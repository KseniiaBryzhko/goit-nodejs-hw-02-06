const express = require("express");

const controllers = require("../../controllers/contacts");
const { validateBody, isBodyEmpty } = require("../../middlewars");
const dataValidator = require("../../schemas/contactsSchema");

const router = express.Router();

router.get("/", controllers.listContacts);

router.get("/:id", controllers.getById);

router.post("/", validateBody(dataValidator), controllers.addContact);

router.delete("/:id", controllers.removeContact);

router.put(
  "/:id",
  isBodyEmpty(),
  validateBody(dataValidator),
  controllers.updateContact
);

module.exports = router;
