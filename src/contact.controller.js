const contactsCtrl = {};

// Models
const Contact = require("./contact.model");

contactsCtrl.createNewContact = async (req, res) => {
  console.log('body',req.body)
  // if(!req.body ) {res.send('falló');return null}
  const {
    description,
    business,
    contact,
    email,
    telephone,
    country,
    zip,
    serviceType,
    comments,
  } = req.body;
  const errors = [];
  if (!description||
    !business||
    !contact||
    !email||
    !telephone||
    !country||
    !zip||
    !serviceType||
    !comments) {
    errors.push({ text: "Please Write a Description" });
  }
  if (errors.length > 0) {
    res.send({
      errors,
      description,
    });
  } else {
    const newContact = new Contact({
      description,
      business,
      contact,
      email,
      telephone,
      country,
      zip,
      serviceType,
      comments,
    });
    await newContact.save();
    res.redirect("/contact");
  }
};

contactsCtrl.renderContacts = async (req, res) => {
  const Contacts = await Contact.find({ })
    .lean();
  res.send({ Contacts });
};

module.exports = contactsCtrl;
