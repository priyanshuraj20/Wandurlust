const express = require("express");
const router = express.Router();

const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const listingController = require("../controllers/listings.js");

//multer:
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

// INDEX ROUTE anD // CREATE ROUTE
router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.createRoute)
  );

// NEW ROUTE
router.get("/new", isLoggedIn, wrapAsync(listingController.renderNewForm));

//// SHOW ROUTE and update route and delete route
router
  .route("/:id")
  .get(wrapAsync(listingController.showRoute))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.updateRoute)
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.deleteRoute));

// EDIT ROUTE
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.editRoute)
);

module.exports = router;
