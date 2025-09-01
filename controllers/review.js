const Listing = require("../models/listing");
const Review = require("../models/review");

module.exports.createReview = async (req, res) => {
  try {
    // Find listing by ID
    let listing = await Listing.findById(req.params.id);

    if (!listing) {
      return res.status(404).send("Listing not found");
    }

    // Create new review
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    console.log(newReview);

    // Link review to listing
    listing.reviews.push(newReview);

    // Save review first (so it gets _id)
    await newReview.save();

    // Save updated listing
    await listing.save();
    req.flash("success", "New Review Created!");

    res.redirect(`/listings/${listing._id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving review");
  }
};

module.exports.deleteReview = async (req, res) => {
  let { id, reviewId } = req.params;
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Listing.findById(reviewId);
  req.flash("success", "New review Deleted!");
  res.redirect(`/listings/${id}`);
};
