const express = require("express");

const controllers = require("../../controllers/contacts");
const {
  validateBody,
  isBodyEmpty,
  isValidId,
  authenticate,
} = require("../../middlewars");
const dataValidator = require("../../schemas/contactsSchema");
const favoriteValidator = require("../../schemas/updateFavoriteSchema");

const router = express.Router();

router.get("/", authenticate, controllers.listContacts);

router.get("/:id", authenticate, isValidId, controllers.getById);

router.post(
  "/",
  authenticate,
  validateBody(dataValidator),
  controllers.addContact
);

router.delete("/:id", authenticate, isValidId, controllers.removeContact);

router.put(
  "/:id",
  authenticate,
  isValidId,
  isBodyEmpty(),
  validateBody(dataValidator),
  controllers.updateContact
);

router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  isBodyEmpty(),
  validateBody(favoriteValidator),
  controllers.updateStatusContact
);

module.exports = router;
