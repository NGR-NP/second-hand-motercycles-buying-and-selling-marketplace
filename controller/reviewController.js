const database = require("../model/index");
const catchAsync = require("../utils/catchAsync");

const reviewModel = database.reviews;

const statusFunc = (res, status, message) => {
    res.json({
        status,
        message: message
    })
}

// upload review
exports.review_upload = async (req, res) => {
    const {reviewText, ratingPoint} = req.body;
    console.log(res.locals.users);

    // const uploadReview = await reviewModel.create({
    //     review: reviewText,
    //     rating: ratingPoint,
    //     userId: req.params.id
    // });

    statusFunc(res, 200, "he");
}