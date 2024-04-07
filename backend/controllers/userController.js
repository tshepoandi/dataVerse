import User from "../models/userModel.js";
import asyncHandler from "../middleware/asyncHandler.js";
import jwt from "jsonwebtoken";
import generateToken from "../utils/generateNewToken.js";


export const getAllUsers = asyncHandler(async() => {
    const users = await User.find();
    return users;
})

export const getUserById = asyncHandler(async(id) => {
    const user = await User.findById(id);
    return user;
})

export const registerUser = asyncHandler(async(req, res) => {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }
    const user = await User.create({
        name,
        email,
        password
    });
    if (user) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

export const authUser = asyncHandler(async(req, res) => {
    const { email, password } = req.body
    console.log(req.body)
    const user = await User.findOne({ email, password })
    console.log(user)
    if (user) {
        // generateToken(res, user._id)
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }

})