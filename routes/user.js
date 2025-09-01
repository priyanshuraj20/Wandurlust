const express = require("express");
const router = express.Router();

const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/user.js");

// GET signup form
router.get("/signup", userController.signupForm);

// POST signup
router.post("/signup", wrapAsync(userController.signuproute));

// GET login form
router.get("/login", userController.loginForm);

// POST login
router.post(
  "/login",
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  userController.Loginroute
);

// GET logout
router.get("/logout", userController.logout);

module.exports = router;
