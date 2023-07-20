const express = require("express");

const controllers = require("../../controllers/contacts");
const { validateBody, isBodyEmpty, isValidId } = require("../../middlewars");
const dataValidator = require("../../schemas/contactsSchema");
const favoriteValidator = require("../../schemas/updateFavoriteSchema");

const router = express.Router();

router.get("/", controllers.listContacts);

router.get("/:id", isValidId, controllers.getById);

router.post("/", validateBody(dataValidator), controllers.addContact);

router.delete("/:id", isValidId, controllers.removeContact);

router.put(
  "/:id",
  isValidId,
  isBodyEmpty(),
  validateBody(dataValidator),
  controllers.updateContact
);

router.patch(
  "/:id/favorite",
  isValidId,
  isBodyEmpty(),
  validateBody(favoriteValidator),
  controllers.updateStatusContact
);

module.exports = router;
