const sgMail = require("@sendgrid/mail");
require("dotenv").config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const { SENDGRID_EMAIL } = process.env;

const sendEmail = async (data) => {
  const msg = {
    ...data,
    from: SENDGRID_EMAIL,
  };
  return sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = sendEmail;
