const cors = require('cors');
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const senderEmail = 'ysquaresite@gmail.com'; 
const senderPassword = 'Y5quare5ite@123';
const receiverEmail = 'ysquaresup@gmail.com';
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



const sendEmail = (siteUserEmail, siteUserMessage) => {
const currentDate = Date.now();
const subjectTemplate = `Enquiry from ${siteUserEmail} in Y Square Site`;   
const messageTemplate = `<table> <tr><td>Sender Email:</td> <td>${siteUserEmail}</td></tr> <tr><td>Sender Message:</td> <td>${siteUserMessage}</td></tr>
<tr><td>Mail time:</td> <td>${new Date(currentDate)}</td></tr>
</table>`;
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: senderEmail,
      pass: senderPassword
    }
  });

  let mailOptions = {
    from: senderEmail,
    to: receiverEmail,
    sender:siteUserEmail,
    replyTo:siteUserEmail,
    html: messageTemplate,
    subject: subjectTemplate,
  };


transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  }); 
};

app.post('^/sendemail/',(req, res) =>{
    const siteUserEmail = req.body.email;
    const siteUserMessage = req.body.message;
    sendEmail(siteUserEmail, siteUserMessage);
    res.json({"message":"Worked"});
});

app.listen(port);
console.log('server running at port 3000');