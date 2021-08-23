const KEY = process.env.STRIPE_SECRET_KEY
const stripe = require("stripe")(KEY)

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(400).send({ message: "Only POST requests allowed" })
    return
  }
  try {
    // items prices should be handled here
    // the way its done below is not secure at all
    // and the client can basically change the price to wantever they want

    const { items } = req.body
    const itemsFormatted = items?.map((item) => ({
      description: item.description,
      quantity: item.quantity,
      price_data: {
        currency: "gbp",
        unit_amount: item.price * 100,
        product_data: {
          name: item.title,
          images: [item.image],
        },
      },
    }))

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: itemsFormatted,
      mode: "payment",
      success_url: `${req.headers.origin}/success`,
      cancel_url: `${req.headers.origin}/cancelled`,
    })
    res.status(200).json({ id: session.id })
  } catch (err) {
    res.status(500).json({ error: err })
  }
}
