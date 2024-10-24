const nodeMailer = require('nodemailer');
require('dotenv').config();
const transporter=nodeMailer.createTransport({
    host:'smtp.gmail.com',
    port:465,
    secure:true,
    auth:{
        user: process.env.user,
        pass: process.env.pass
    },
});
async function main() {
    const info = transporter.sendMail({
        from: `Biji <${process.env.user}>`,
        to: process.env.to,
        subject: 'Hello NodeMailer',
        html: "<b>Node JS module that allows you to send emails from your server easily.</b>"
    })
    console.log('Message sent!' + (await info).messageId);
};
main()
.catch(e => console.log(e))
// console.log(process.env.user);
// console.log(process.env.pass);
// console.log(process.env.to);