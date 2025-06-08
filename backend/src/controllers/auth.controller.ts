import User from "../models/user.model";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/config';

export const register = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            res.status(400).json({ msg: "All fields are required" });
            return;
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(409).json({ msg: "User already exists. Please login." });
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({ msg: "User registered successfully", newUser: newUser });
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ msg: "Internal server error" });
    }
};

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ msg: "All fields are required" });
            return;
        }

        const existingUser = await User.findOne({
            email: email
        });

        if (!existingUser) {
            res.status(404).json({
                msg: "User not found"
            })
            return;
        };

        const isPassCorrect = bcrypt.compare(password, existingUser.password);

        if (!isPassCorrect) {
            res.status(400).json({
                msg: "Incorrect Password"
            })
            return;
        };

        const Payload = {
            role: existingUser.role,
            userId: existingUser._id
        };

        const token = jwt.sign(Payload, JWT_SECRET, {
            expiresIn: '2d'
        });

        res.status(200).json({
            msg: "User logged in successfully",
            token: token
        })

    } catch (error) {
        console.error("Error during logging in process:", error);
        res.status(500).json({ msg: "Internal server error" });
    }
}