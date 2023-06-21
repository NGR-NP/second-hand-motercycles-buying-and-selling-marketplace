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
    console.log(typeof(req.params.id));

    const uploadReview = await reviewModel.create({
        review: reviewText,
        rating: ratingPoint,
        productId: req.params.id
    });

    statusFunc(res, 200, uploadReview);
}