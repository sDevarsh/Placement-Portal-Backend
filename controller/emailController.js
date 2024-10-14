import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const EmailController = {
  sendMail: async (req, res) => {
    const emails = req.body.email;
    const data = req.body.data;
    const subject = req.body.subject;
    try {
      const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: emails.join(","),
        subject: subject,
        html: data,
      };

      await transporter.sendMail(mailOptions);
      return res.json({ message: "Mail sent successfully" });
    } catch (e) {
      res
        .status(500)
        .json({ message: "Error While Sending Mail", error: error });
    }
  },
};

export default EmailController;
