const express = require("express");
const {
  validateBody,
  isBodyEmpty,
  authenticate,
  imageUpload,
} = require("../../middlewars");
const registerValidator = require("../../schemas/registerSchema");
const loginValidator = require("../../schemas/loginSchema");
const emailValidator = require("../../schemas/userEmailSchema");
const subscriptionValidator = require("../../schemas/updateSubscriptionSchema");
const controllers = require("../../controllers/users");

const router = express.Router();

router.post(
  "/register",
  isBodyEmpty(),
  validateBody(registerValidator),
  controllers.register
);

router.post(
  "/login",
  isBodyEmpty(),
  validateBody(loginValidator),
  controllers.login
);

router.post("/logout", authenticate, controllers.logout);

router.get("/current", authenticate, controllers.getCurrent);

router.patch(
  "/",
  authenticate,
  validateBody(subscriptionValidator),
  controllers.updateSubscription
);

router.patch(
  "/avatars",
  authenticate,
  imageUpload.single("avatar"),
  controllers.updateAvatar
);

router.get("/verify/:verificationToken", controllers.verify);

router.post(
  "/verify",
  isBodyEmpty(),
  validateBody(emailValidator),
  controllers.resendVerifyEmail
);

module.exports = router;
