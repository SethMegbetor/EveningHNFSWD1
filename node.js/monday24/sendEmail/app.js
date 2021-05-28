//npm install nodemailer
var nodemailer = require("nodemailer");
const { getMaxListeners } = require("process");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "alienmawunyo@gmail.com",
    pass: "0000000000",
  },
});

var mailOptions = {
  from: "alienmawunyo@gmail.com",
  to: "cndyly@gmail.com,dtotorino@gmail.com,eugenesew4@gmail.com,sethmegbetor@gmail.com",
  subject: "class session email with node.js",
  text: "It works like magic",
};
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
