import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { asyncHandler } from "../utils/asyncHandler.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = asyncHandler(async (req, res) => {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if(password !== confirmPassword) {
        return res.status(400).json({error: "Password Dont match"})
    }
    const user = await User.findOne({username});

    if(user) {
        return res.status(400).json({error: "User already exists"})
    }

    // Hash password generation
    const hashedPassword = await bcrypt.hash(password, 10)

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}` 
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}` 

    const newUser = new User({
        fullName,
        username,
        password: hashedPassword,
        gender,
        profilePic: gender === "male" ? boyProfilePic : girlProfilePic
    })

    if(newUser){

        //gnerate JWT tokeen here
        generateTokenAndSetCookie(newUser._id, res);

        await newUser.save();
    
        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic
        })
    } else {
        res.status(400).json({ error: "Invalid user data"})
    }
    
})

export const login = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({username})
    const isPasswordCorrect = await bcrypt.compare(password, user?.password || '')

    if(!user || !isPasswordCorrect) {
        res.status(400).json({error: 'Invalid Username or Password'})
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(201).json({
        _id: user._id,
        fullName: user.fullName,
        username: user.username,
        profilePic: user.profilePic
    })
})

export const logout = asyncHandler((req, res) => {
    res.cookie("jwt", "", {maxAge: 0});
    res.status(200).json({ message: "Logged out successfully"})
})