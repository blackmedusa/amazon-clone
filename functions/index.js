const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51JOlicBpVWy1C2YFkDFygpudBiqsOhjqxORHdzavWpfjHTS40jxmegoE3ynFZKEmP7CrA8v4hC3Qoj3NacoJbXuW00FW0aVIBd")

//API

//App config
const app = express();

//Middleware
app.use(cors({origin: true}));
app.use(express.json());

//API routes
app.get('/', (request, response)=> response.status(200).send
('hello world'))

app.post('/payments/create', async (request, response)=> { 
    const total = request.query.total;

    console.log('Payment Request Received',total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//-Listen command
exports.api = functions.https.onRequest(app)