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
