var nodemailer = require('nodemailer');

async function sendEmail(name, email, message) {
        var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
                user: 'noreplydevapp@gmail.com',
                pass: process.env.EMAIL,
            }
    });

    const mailOptions = {
        from: 'noreply@keypassguard.com', // sender address
        to: 'portfolio@digitalcaldwell.com', // list of receivers
        subject: 'New contact from portfolio!', // Subject line
        html: 
        `
        <body>
        <div>
            <div style="font-size: 18px;">
                Name: ${name}
                <br />
                Email: ${email}
                <br />
                Message: ${message}
            </div>
        </div>
        </body>
        `,};

    try {
        await transporter.sendMail(mailOptions);
    } catch(err) {
        console.error(err);
    }
    

    return;
}

module.exports = {
    sendEmail,
}