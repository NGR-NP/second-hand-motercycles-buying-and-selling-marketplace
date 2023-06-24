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
exports.review_upload = catchAsync (async (req, res) => {
    const {
        reviewText,
        ratingPoint
    } = req.body;

    const checkAlreadyComment = await reviewModel.findOne({
        where: {
            userId: res.locals.userData.id,
            productId: req.params.id
        }
    })

    if (checkAlreadyComment) {
        return statusFunc(res, 200, "already commented");
    }

    const uploadReview = await reviewModel.create({
        review: reviewText,
        rating: ratingPoint,
        userId: res.locals.userData.id,
        productId: req.params.id
    });

    statusFunc(res, 200, uploadReview);
})


// udpate review
exports.updateReview = catchAsync (async (req, res) => {
    const {
        updateReviewText,
        updateRatingPoint
    } = req.body;

    const updateReview = await reviewModel.findOne({
        where: {
            productId: req.params.id,
            userId: res.locals.userData.id,
        }
    });

    if(!updateReview){
        return statusFunc(res, 200, "cannot find review to update");
    }

    updateReview.review = updateReviewText;
    updateReview.rating = updateRatingPoint;
    updateReview.save();

    statusFunc(res, 200, updateReview);
})


// delete review
exports.deleteReview = catchAsync(async (req, res) => {
    const findReview = await reviewModel.findOne({
        where: {
            productId: req.params.id,
            userId: res.locals.userData.id,
        }
    });

    if(!findReview){
        return statusFunc(res, 200, "you haven't commented yet");
    }

    findReview.destroy();
    statusFunc(res, 200, "review delete successfully");
})