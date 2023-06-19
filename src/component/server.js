const express = require("express");
const app = express();
// This is your test secret API key.
const stripe = require("stripe")(
  "pk_test_51NEwFNDR8aBIUyKTl8gRMCo9EdoA4oVLsCqDrLhlezmExZh0ZlGVjldFIRP59MYtdURhWJStQ5WwmYIg16RGOpOC00o9NRkBPP"
);

app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = (cartPrice) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return cartPrice;
};

app.post("/create-payment-intent", async (req, res) => {
  const { cartPrice } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(cartPrice),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));

