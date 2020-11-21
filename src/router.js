
const router = require("express").Router();

const {
  createNewContact,
  renderContacts
} = require("./contact.controller");

// Routes
router.post("/contact", createNewContact);

router.get("/contact", renderContacts);

module.exports = router;