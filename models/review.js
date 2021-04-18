const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userimage: {
    type: String,
  },
  comment: {
    type: String,
    required: true,
  },
  commentimages: {
    type: String,
  },
  rating: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
  },
});

reviewSchema.virtual("id").get(function () {
  return this._id.toHexString();
});
reviewSchema.set("toJSON", {
  virtuals: true,
});

exports.Review = mongoose.model("Review", reviewSchema);
