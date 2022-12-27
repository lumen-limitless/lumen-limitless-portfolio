import { SimpleLayout } from '../components/SimpleLayout'
import { NextSeo } from 'next-seo'

export default function ThankYou() {
  return (
    <>
      <NextSeo
        title="Thank You"
        description="Thank you for contacting me. I will be in touch shortly."
      />

      <SimpleLayout
        title="Thanks for your message."
        intro="I aim to reply to all contacts as soon as possible. Thank you for your interest and looking forward to working with you."
      />
    </>
  )
}
