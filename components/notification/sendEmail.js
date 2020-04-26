exports.sendEmail = function (nodemailer,req,res) {


    console.log(req.body);

    let email = req.body.email;
    let content = req.body.content;
    let subject = req.body.subject;
    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: '',
          pass: ''
        }
      });
      
    
    let mailOptions = {
        from: '',
        to: email,
        subject: subject,
        text: content
    };


    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

    res.send("1");

};
