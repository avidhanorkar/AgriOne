import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "../config/config";

declare module "express-serve-static-core" {
  interface Request {
    user?: any; 
  }
}

const isAuth = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
      res.status(401).json({ message: "Authorization header is missing" });
      return;
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      res.status(401).json({ message: "Token not found in header" });
      return;
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err || !decoded) {
        res.status(401).json({ msg: "Invalid or expired token" });
        return;
      }

      // Attach user to request
      req.user = (decoded as JwtPayload).user;

      console.log("User Id is: " + req.user.userId)
      next();
    });
  } catch (error) {
    console.error("JWT Auth Middleware Error:", error);
    res.status(500).json({ msg: "Internal Server Error", error: error instanceof Error ? error.message : String(error) });
  }
};

export default isAuth;
