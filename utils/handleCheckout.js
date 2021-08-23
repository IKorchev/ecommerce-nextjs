import { loadStripe } from "@stripe/stripe-js"
const NEXT_PUBLIC_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
const stripePromise = loadStripe(NEXT_PUBLIC_KEY)

// eslint-disable-next-line import/no-anonymous-default-export
const handleCartCheckout = async (products) => {
  const stripe = await stripePromise
  const session = await fetch("/api/create-checkout-session", {
    method: "POST",
    body: JSON.stringify({ items: [...products] }),
    headers: {
      "Content-Type": "application/json",
    },
  })
  const jsonData = await session.json()
  const result = await stripe.redirectToCheckout({
    sessionId: jsonData.id,
  })

  if (result.error) {
    alert(result.error.message)
  }
}

export default handleCartCheckout
