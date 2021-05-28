var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'alienmawunyo@gmail.com',
    pass: '701049048'
  }
});

var mailOptions = {
  from: 'alienmawunyo@gmail.com',
  to: 'sethmegbetor@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});