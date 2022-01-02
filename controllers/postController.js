const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const Post = require("../models/postModel");

exports.add = catchAsync(async (req, res, next) => {
    const { title, text } = req.body;

    if (!title || !text) {
        return next(new AppError("Пост заполнен не корректно", 400));
    }

    await Post.create({
        title,
        text,
    });

    res.status(201);
});

exports.all = catchAsync(async (req, res) => {
    const posts = await Post.find();

    res.json({
        data: posts,
    });
});
