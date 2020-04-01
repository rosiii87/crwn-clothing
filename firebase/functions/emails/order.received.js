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
exports.received = async (
  email,
  name,
  orderId,
  total,
  doprava,
  payment,
  street,
  city,
  status,
  cartItems
) => {
  try {
    if (status == 'Objednávka přijata') {
      const response = await transport.sendMail({
        from: 'tralala<tralala@test.com>',
        to: email,
        subject: `Order successfull - ${orderId} !`,
        html: `<h1>Hola ${name}</h1>
                      <p>Your order number ${orderId} has been accepted!</p>
                      <h2>Order summary:</h2>
                      <p>platba: ${payment}</p>
                      <p>total: ${total} Kč</p>
                      
                      <h2>Delivery summary:</h2>
                      <p>carrier: ${doprava}</p>
                      <p>Adress: ${street}, ${city}</p>
                      <h2>(Almost) your products:</h2>
                      <p>${cartItems[0].name}</p>
                      <p>${cartItems[0].price}</p>
                      <p>${cartItems[0].quantity}</p>
                      <p>${cartItems[1] ? cartItems[1].name : null}</p>
                      <p>${cartItems[1] ? cartItems[1].price : null}</p>
                      <p>${cartItems[1] ? cartItems[1].quantity : null}</p>
                      <p>${cartItems[2] ? cartItems[2].name : null}</p>
                      <p>${cartItems[2] ? cartItems[2].price : null}</p>
                      <p>${cartItems[2] ? cartItems[2].quantity : null}</p>
                `
      });
      return response;
    } else {
      const response = await transport.sendMail({
        from: 'tralala<tralala@test.com>',
        to: email,
        subject: `Order successfull - ${orderId} !`,
        html: `<h1>Hola ${name}</h1>
                        <p>Your order number ${orderId} has been accepted and currently waiting for your payment.</p>
                        <h2>Order summary:</h2>
                        
                        <p>payment: ${payment}</p>
                        <p>total: ${total} Kč</p>
                        <p>Bank acc: 11111111/1111</p>
                        <p>var sym.: ${orderId}</p>
  
                        <h2>Delivery summary:</h2>
                        <p>carrier: ${doprava}</p>
                        <p>Adress: ${street}, ${city}</p>
                        <h2>(Almost) your products:</h2>
                        <p>${cartItems[0].name}</p>
                        <p>${cartItems[0].price}</p>
                        <p>${cartItems[0].quantity}</p>
                        <p>${cartItems[1] ? cartItems[1].name : null}</p>
                        <p>${cartItems[1] ? cartItems[1].price : null}</p>
                        <p>${cartItems[1] ? cartItems[1].quantity : null}</p>
                        <p>${cartItems[2] ? cartItems[2].name : null}</p>
                        <p>${cartItems[2] ? cartItems[2].price : null}</p>
                        <p>${cartItems[2] ? cartItems[2].quantity : null}</p>
                  `
      });

      return response;
    }
  } catch (error) {
    return error;
  }
};
