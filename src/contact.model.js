const { Schema, model } = require("mongoose");

const ContactSchema = new Schema(
  {
    description: {
      type: String,
      required: true
    },
    business: {
      type: String,
      required: true
    },
    contact: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    telephone: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    zip: {
      type: String,
      required: true
    },
    serviceType: {
      type: String,
      required: true
    },
    comments: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true
  }
);

module.exports = model("Contact", ContactSchema);
