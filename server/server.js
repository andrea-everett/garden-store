require('dotenv').config()

const express = require("express")
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors({ 
}))


const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const storeItems = new Map([
    [1, { priceInCents: 10000, name: "Learn React Today"}],
    [ 2, { priceInCents: 20000, name: "Learn CSS Today"}],
])

const YOUR_DOMAIN = 'http://localhost:3000'

// app.post('/create-checkout-session', async(req, res) => {
//     try {
//         const session = await stripe.checkout.sessions.create({
//             payment_method_types: ['card'],
//             mode: "payment",
//             line_items: req.body.items.map(item => {
//                 const storeItem = storeItems.get(item.id)
//                 return {
//                     price_data: {
//                         currency: 'usd',
//                         product_data: {
//                             name: storeItem.name
//                         },
//                         unit_amount: storeItem.priceInCents,
//                     },
//                     quantity: item.quantity
//                 }
//             }),
//             success_url: `${process.env.SERVER_URL}/success.html`,
//             cancel_url: `${process.env.SERVER_URL}/cancel.html`
//         })
//         res.json({ url: session.url })
//     } catch (e) {
//         res.status(500).json({ error: e.message })
//     }
// })

// This is your test secret API key.
app.get('/', (req, res) => {
  console.log('hi');
  res.sendFile('/public/index.html');
}) 


app.post('http://localhost:5500/create-checkout-session', async  (req, res) => {
  console.log('starting-checkout');
  console.log('req body', req.body);
  try {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                mode: "payment",
                line_items: req.body.items.map(item => {
                    const storeItem = storeItems.get(item.id)
                    return {
                        price_data: {
                            currency: 'usd',
                            product_data: {
                                name: storeItem.name
                            },
                            unit_amount: storeItem.priceInCents,
                        },
                        quantity: item.quantity
                    }
                }),
                success_url: `${process.env.PUBLIC_URL}/success.html`,
                cancel_url: `${process.env.PUBLIC_URL}/cancel.html`
            })
            console.log('sucessfull response')
            res.status(200).json({ url: session.url })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    })
  // const session = await stripe.checkout.sessions.create({
  //   line_items: [
  //     {
  //       // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
  //       price: '{{pr_1234}}',
  //       quantity: 1,
  //     },
  //   ],
  //   mode: 'payment',
  //   success_url: `${process.env.SERVER_URL}/success.html`,
  //   cancel_url: `${process.env.SERVER_URL}/cancel.html`,
  //   automatic_tax: {enabled: true},
  // });

  // res.redirect(303, session.url);


app.listen(3000)
