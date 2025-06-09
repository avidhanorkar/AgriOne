import User from "../models/user.model";
import { Request, Response } from "express";

export const getUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const {id} = req.body;

        if (!id) {
            res.status(404).json({
                msg: "Id Not Found"
            });
            return;
        }
        
        const user = await User.findById(id);

        if (!user) {
            res.status(403).json({
                msg: "Invalid User Id"
            });
            return;
        }

        res.status(200).json({
            msg: "User Found",
            user: user
        })
        return;
    } catch (error) {
        console.log(`Error in getting the User: ${error}`);
        res.status(500).json({
            msg: `Internal server error`,
            error: (error as String)
        })
        return;
    }
}

export const updateDetails = async (req: Request, res: Response): Promise<void> => {
    try {
        const {id} = req.body;

        const existingUser = await User.findById(id);

        if (!existingUser) {
            res.status(404).json({
                msg: "User Not Found | Invalid id"
            });
            return;
        }

        const {name, phone, city, state, pincode, profilePic} = req.body;

        existingUser.name = name || existingUser.name;
        existingUser.address.city = city || existingUser.address.city;
        existingUser.address.state = state || existingUser.address.state;
        existingUser.address.pincode = pincode || existingUser.address.pincode;
        existingUser.phone = phone || existingUser.phone;
        existingUser.profilePic = profilePic || existingUser.profilePic;

        await existingUser.save();

        res.status(200).json({
            msg: "User Updated Successfully",
            updatedUser: existingUser
        });
        return;
    } catch (error) {
        console.log(`Error in updating the User: ${error}`);
        res.status(500).json({
            msg: `Internal server error`,
            error: (error as String)
        })
        return;
    }
}

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.user.userId;

        const existingUser = await User.findByIdAndDelete(id);

        if (!existingUser) {
            res.status(404).json({
                msg: "User Not Found | Invalid id"
            });
            return;
        }

        res.status(200).json({
            msg: "User Deleted Successfully"
        });
        return;
    } catch (error) {
        console.log(`Error in deleting the User: ${error}`);
        res.status(500).json({
            msg: `Internal server error`,
            error: (error as String)
        })
        return;
    }
}
