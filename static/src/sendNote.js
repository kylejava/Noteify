var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail'
});

var mailOptions = {
  from: 'noobtube077@gmail.com',
  to: 'kyleedwardgjava@gmail.com',
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
