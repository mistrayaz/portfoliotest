const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const nodemailer = require('nodemailer');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


// Your routes will go here...
// index.js (continued)

  
  
    // Email message configuration
    
  

app.post("/contact",function(req,res){
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        // Configure your email service provider here
        service: 'gmail',
        auth: {
          user: 'anumanum953@gmail.com', // Your email address
          pass: 'mjdj sbhq pgko chtj'   // Your email password or app-specific password
        }
      });
    const mailOptions = {
        from: 'anumanum953@gmail.com',
        to: 'anum12958@gmail.com',  // Recipient's email address
        subject: 'New Message from Contact Form',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
      };
    
      // Send email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          res.status(500).send('Error sending email');
        } else {
          console.log('Email sent:', info.response);
          res.send('Message sent successfully!');
        }
      });
    // Create a Nodemailer transporter
    
})

app.get("/",function(req, res){
    res.render("index");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
  });