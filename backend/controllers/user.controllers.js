import User from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js"

export const getUsersForSidebar = asyncHandler(async (req, res) => {
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
    return res.status(200).json(filteredUsers)
})