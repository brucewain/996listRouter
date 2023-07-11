// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys


const stripe = require("stripe")('sk_test_51NEwFNDR8aBIUyKTPyzr5x5JRGdiFS5Ta6WnP9abZiBcjupQZ8zaa7KeHwRcbGtCOXBVZdbxv3vqfKJvv2yGuUgr00W5iUJ7Ag');
const express = require('express');
const app = express();


const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};


app.get('/secret', async (req, res) => {
  const { items } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: 'usd',
      payment_method_types: ['card'],
    });
    res.json({ client_secret: paymentIntent.client_secret });   
  } catch (error) {
    console.error('Error creating PaymentIntent:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(3000, () => {
  console.log('Running on port 3000');
});

