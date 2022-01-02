const Mongoose = require("mongoose");

const postSchema = new Mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
        },
        post: {
            type: String,
            require: true,
        },
        author: {
            type: Mongoose.Schema.Types.ObjectId,
            ref: "user",
        },
        likes: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

const post = Mongoose.model("post", postSchema);

module.exports = post;
