import Head from 'next/head'
import Link from 'next/link'

import Footer from '@components/Footer'

export default function RpOverview() {
  return (
    <div className="container">
      <main>
        <h1>RP Received!</h1>
        <p>Thank you for your feedback! Head back to the <Link href="/"><a>home page</a></Link>.</p>
      </main>

      <Footer />
    </div>
  )
}
