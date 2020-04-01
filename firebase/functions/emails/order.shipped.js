const nodemailer = require('nodemailer');

// default settings
const transport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'michalrosa91@gmail.com', // ready just pick mail and domain
    pass: 'anhlqadzldpapzmh'
  }
});

// ORDER FLOW
// order received
exports.orderShipped = async (email, name, orderId, doprava, street, city) => {
  try {
    const response = await transport.sendMail({
      from: 'tralala<tralala@test.com>',
      to: email,
      subject: `Wíí, your order is on its way - ${orderId}.`,
      html: `<h1>We will never forget you, ${name}</h1>
                      <p>Your order with your favourite number ${orderId} (try bet that in eurojackpot) is on its way!</p>
                      <br></br>
                      <p>Johnny from ${doprava} just took it to his cool van a went your way (${street}, ${city})</p>
                      <br></br>
                      <p>Have a patience with Johnny, he's trying his best! See ya</p>
                `
    });
    return response;
  } catch (error) {
    return error;
  }
};
