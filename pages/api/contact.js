import nodemailer from "nodemailer";

export default async function handler(req, res) {
    const {name, email, message} = req.body

    const transport = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        auth: {
            user: 'abdallamohaz01@gmail.com',
            pass: process.env.APP_PASSWORD
        }
    })

    const mailOptions = {
        from: `"${name}" abdallamohaz01@gmail.com`,
        to: "abdallamohaz01@gmail.com",
        subject: `PORTFOLIO MAIL FROM: ${name}`,
        html: `
        Name: ${name} <br>
        Email: ${email} <br>
        Message: ${message} <br>
        `,
    }

    try {
        await transport.sendMail(mailOptions)
        res.status(200).end()
    } catch (e) {
        res.status(500).end()
    }


}