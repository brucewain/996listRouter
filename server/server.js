const express = require('express');
const stripe = require('stripe')('sk_test_51NEwFNDR8aBIUyKTeoG7UWBr7Lm6PhwYayJDRZDvyiQqAjc4CDkGzKgvkDd124ERLQLNKa7HAXka7otETlZJUQ9m00CWtQDca2');
const app = express();
// app.use(express.static('public'));
app.use(express.json()); // Example middleware for parsing JSON request bodies

// const endpointSecret = "whsec_7f90fa7fa9a23fa4705b02cb98a5cbac832a149d730396d6c7fcef61af223526";

// app.post('/create-checkout-session', async (req, res) => {
//   // Define the logic to create a Checkout Session
//   // Use the Stripe API to create a session and return the session URL

//   try {
//     const session = await stripe.checkout.sessions.create({
//       line_items: [
//         {
//           price: 'price_1NOVefDR8aBIUyKT0DtOewJE',
//           quantity: 1,
//         },
//       ],
//       mode: 'payment',
//       success_url: `http://localhost:5173/PaymentCompletion`,
//       cancel_url: `http://localhost:5173/PaymentFail`,
//     });

//     res.redirect(303, session.url);
//   } catch (error) {
//     console.error('Error creating checkout session:', error);
//     res.sendStatus(500);
//   }
// });


// // ... webhook code

// const port = 2020;
// app.listen(port, () => console.log(`Running on port ${port}`));
// const YOUR_DOMAIN = 'http://localhost:5173';

// app.post('/create-checkout-session', async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     line_items: [
//       {
//         // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//         price: '{{PRICE_ID}}',
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: `${YOUR_DOMAIN}/PaymentCompletion`,
//     cancel_url: `${YOUR_DOMAIN}/PaymentFail`,
//   });

//   res.redirect(303, session.url);
// });

// app.listen(4242, () => console.log('Running on port 4242'));

const endpointSecret = "whsec_7f90fa7fa9a23fa4705b02cb98a5cbac832a149d730396d6c7fcef61af223526";

app.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntentSucceeded = event.data.object;
      // Then define and call a function to handle the event payment_intent.succeeded
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
});

app.listen(4242, () => console.log('Running on port 4242'));