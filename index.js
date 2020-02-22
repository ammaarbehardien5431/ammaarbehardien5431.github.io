
  const functions = require('firebase-function');
  const nodemailer = require("nodemailer");

  var GmailAddres= cofig().gmail.email;
  var GmailPassword= cofig().gmail.password;

const transporter = createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth:{
        user:GmailAddres,
        pass:GmailPassword
    }
    
})

function SendEmail(email , message){
  

    var mailOptions={
        from:GmailAddres,
        to:GmailAddres,
        subject:'Portfolio Website',
        text:message,

    }

    transporter.sendMail(mailOptions, function(error , info){
        if (error){
            console.log(error);
        }
        console.log('Email sent');
    })
}