const nodemailer = require('nodemailer');

// default settings
const transport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'michalrosa91@gmail.com', // ready just pick mail and domain
    pass: 'anhlqadzldpapzmh'
  }
});

// welcome email template
exports.welcome = async (email, name) => {
  try {
    const response = await transport.sendMail({
      from: 'tralala<tralala@test.com>',
      to: email,
      subject: `welcome here, ${name}!`,
      html: `<h1>Hola ${name}</h1>
              <p>welcome between us!</p>
        `
    });
    return response;
  } catch (error) {
    return error;
  }
};
