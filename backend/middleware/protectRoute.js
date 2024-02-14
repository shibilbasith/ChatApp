import jwt from "jsonwebtoken"
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            res.status(400).json({ error: 'Unauthorized - No Token Provided' })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded) {
            res.status(400).json({ error: 'Unauthorized - No Token Provided' })
        }

        const user = await User.findById(decoded.userId).select("-password") // to exclude password from db

        if (!user) {
            res.status(400).json({ error: 'Invalid User' })
        }

        req.user = user;
        next();

    } catch (error) {
        res.status(500).json({ error: 'Internal server Error' })
    }
}

export default protectRoute;