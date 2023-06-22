const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

const emailSender = async (email, resource) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: process.env.EMAIL_SENDER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // var transporter = nodemailer.createTransport({
  //   host: "sandbox.smtp.mailtrap.io",
  //   port: 2525,
  //   auth: {
  //     user: "1705b73d098086",
  //     pass: "509d88d8b495df",
  //   },
  // });

  const itemUrlHTML = resource
    .map(
      (item) => `<li>
                <span class="accent">${item.name}: </span>
                <a class="link" href=${item.url}>click here</a>
              </li>`
    )
    .join(" ");

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"eB00k - best ebook provider with special offers"<tranhau108201@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Thank You For Your Purchase", // Subject line
    text: "follow the link to download your order", // plain text body
    html: `<!DOCTYPE html>
    <html>
      <head>
        <title>Thank You for Your Purchase</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f7f7f7;
            padding: 20px;
          }
    
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 40px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }
    
          h1 {
            font-size: 24px;
            margin-top: 0;
            color: #003366;
          }
    
          ul {
            list-style-type: none;
            padding: 0;
            margin: 20px 0;
          }
    
          li {
            margin-bottom: 10px;
          }
    
          a {
            color: #ff6600;
            text-decoration: none;
          }
    
          a:hover {
            text-decoration: underline;
          }
    
          .highlight {
            background-color: #003366;
            color: #ffffff;
            padding: 5px;
            border-radius: 3px;
          }
    
          .accent {
            color: #ff6600;
            font-weight: bold;
          }

          .link {
            color: #0000ff;
            font-weight: bold;
            font-style: italic;
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Thank You for Your Purchase</h1>
          <p>
            Dear customer, we appreciate your recent purchase. Below is a list of
            the products you have purchased:
          </p>
          <ul id='productList'>
            ${itemUrlHTML}
          </ul>
          <p>
            If you have any questions or need further assistance,feel free to contact us. Thank you again for choosing our products!
          </p>
        </div>
      </body>

     
    </html>
    `,
  });
  return info;
};

module.exports = emailSender;
