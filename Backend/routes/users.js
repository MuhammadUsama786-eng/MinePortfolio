var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');

/* GET users listing. */
router.post('/mail', function(req, res, next) {

    const {name,phone,email,subject,message} = req.body;

    // create reusable transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: 'usama_naseer@ucp.edu.pk',
            pass: 'Pakarmy786'
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'usama_naseer@ucp.edu.pk', // sender address
        to: 'usama_naseer@ucp.edu.pk', // list of receivers
        subject: subject, // Subject line
        html: `<b>You received a new message from your website! Name: ${name}, Phone: ${phone}, Email: ${email} and here is the message: ${message}</b>`, // plain text body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send({ message: 'Failed to send email!' });
        } else {
            console.log('Message sent: %s', info.messageId);
            res.status(200).send({ message: 'Email sent successfully!' });
        }
    });
});

module.exports = router;
