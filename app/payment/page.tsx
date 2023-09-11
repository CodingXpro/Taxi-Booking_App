
"use client"

import CheckoutForm from '@/components/Payment/CheckoutForm';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react'

const Payment = async() => {

  // const{carAmount,setCarAmount}=useContext(SelectedCarAmountContext);

  const stripePromise:any=await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as any)
  const options:any={
    mode:'payment',
    amount:1099,
    currency:'usd',
    
  }
  return (
   <Elements stripe={stripePromise} options={options}>
    <CheckoutForm/>
   </Elements>
  )
}

export default Payment

