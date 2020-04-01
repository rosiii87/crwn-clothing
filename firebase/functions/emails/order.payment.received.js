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
exports.paymentReceived = async (
  email,
  name,
  orderId,
  total,
  doprava,
  street,
  city
) => {
  try {
    const response = await transport.sendMail({
      from: 'tralala<tralala@test.com>',
      to: email,
      subject: `Hurray! Payment accepted - ${orderId}.`,
      html: `<h1>Love ya, ${name}</h1>
                      <p>Payment of Total ${total} Kč for Your order number ${orderId} has just been received!</p>
                      <br></br>
                      <p>Now, it's going to be shipped to ${street}, ${city} with a little help of ${doprava} currier.</p>
                      <br></br>
                      <p>But we will let you know as soon as our lazy teamates finish preparation :)</p>
                `
    });
    return response;
  } catch (error) {
    return error;
  }
};
