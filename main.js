var firebaseConfig = {
    apiKey: "AIzaSyD7SImMqSIbnyazBMhY7GVsFU-CBK9D2qY",
    authDomain: "contactform-46e74.firebaseapp.com",
    databaseURL: "https://contactform-46e74.firebaseio.com",
    projectId: "contactform-46e74",
    storageBucket: "",
    messagingSenderId: "703474479916",
    appId: "1:703474479916:web:d34a9cfc3b2b6ebb"
};

  firebase.initializeApp(firebaseConfig);
  var messageref = firebase.database().ref("message");
   document.getElementById('Contact').addEventListener('submit',submit);

function submit(e){
    e.preventDefault;
  
    var name=  getInput('name');
    var email= getInput('email');
    var Quey= getInput('query');
    saveMessege(name, email,Quey);
    document.querySelector(".notify").style.display='block';
    document.querySelector("html").style.scrollBehavior='auto';
    setTimeout(function(){
document.querySelector(".notify").style.display='none';
    },1500);
}

function getInput(id){
return document.getElementById(id).value;
}

function saveMessege(name, email, Quey){
var messageref_2= messageref.push();
messageref_2.set({
    name : name,
    email : email,
    Quey : Quey,
});
}



  

exports.SendEmail2 = functions.database.ref("/message/{sessionid}").onCreate(snapshot)
    {
    var value = snapshot.val();
    var name =value['name'];
    var email= value['email'];
    var query= value['query'];

    SendEmail(email , 'Message from '+name +'\n'+ query+'\n'+ email );

}




import { cofig } from 'firebase-function';
  import { createTransport } from "nodemailer";

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

