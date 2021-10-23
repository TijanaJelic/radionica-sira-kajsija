const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

const sentMail = (message) => {
  const transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASS
    }
  }));
  
  const mailOptions = {
    from: "radionicasirakajsija@gmail.com",
    to: "radionicasirakajsija@gmail.com",
    subject: 'Radionica sira kajsija',
    text: `name: ${message.name},
           email: ${message.email},
           text: ${message.text}
    `
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = sentMail;

