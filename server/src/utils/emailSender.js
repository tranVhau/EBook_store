const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

const emailSender = async (email, resource) => {
  //   const transporter = nodemailer.createTransport({
  //     host: "smtp.gmail.com",
  //     port: 465,
  //     secure: true,
  //     auth: {
  //       // TODO: replace `user` and `pass` values from <https://forwardemail.net>
  //       user: process.env.EMAIL_SENDER,
  //       pass: process.env.EMAIL_PASSWORD,
  //     },
  //   });

  var transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "1705b73d098086",
      pass: "509d88d8b495df",
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"eB00k - best ebook provider with special offers"<foo@example.com>', // sender address
    to: email, // list of receivers
    subject: "Thank You For Your Purchase", // Subject line
    text: "follow the link to download your order", // plain text body
    html: "<a>https://xyz</a>", // html body
  });
  return info;
};

module.exports = emailSender;
//   console.log("Message sent: %s", info.messageId);
