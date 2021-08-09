import express from "express";
import dotenv from "dotenv";
import mailgun from "mailgun-js";

dotenv.config();

const router = express.Router();

const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

router.post("/", async (req, res) => {
  const lastname = req.body.lastname;
  const email = req.body.email;
  const message = req.body.message;

  const data = {
    from: `ysegh.dev@ysegh.com`,
    to: `ysegh.dev@gmail.com`,
    subject: `Quelqu'un s'intéresse à toi !`,
    html: `<p>Nom : ${lastname}</p></br>
    <p>Email : ${email}</p></br>
    <p>Message : ${message}</p>`,
  };
  mg.messages().send(data, function (error, body) {
    if (error) {
      return res
        .status(400)
        .send({ message: "Impossible d'envoyer ce message." });
    }
    return res
      .status(200)
      .send({ message: "Message envoyé ! Merci de votre intérêt." });
  });
});

export default router;
