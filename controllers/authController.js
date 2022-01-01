const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const signToken = (id, email) => {
    return jwt.sign({ id, email }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};

exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new AppError("Введите email и пароль", 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.correctPassword(password, user.password))) {
        return next(new AppError("Некорректный Email или пароль", 401));
    }

    const token = signToken(user.id, user.email);

    res.status(200).json({
        status: "success",
        token,
    });
});

exports.signup = catchAsync(async (req, res) => {
    const { email, password } = req.body;

    const newUser = await User.create({
        email,
        password,
    });

    const token = signToken(newUser.id, newUser.email);

    res.status(201).json({
        status: "success",
        token,
    });
});
