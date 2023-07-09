// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys


const stripe = require('stripe')('sk_test_51NEwFNDR8aBIUyKTeoG7UWBr7Lm6PhwYayJDRZDvyiQqAjc4CDkGzKgvkDd124ERLQLNKa7HAXka7otETlZJUQ9m00CWtQDca2');
const express = require('express');
const app = express();

app.get('/secret', async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1099,
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
