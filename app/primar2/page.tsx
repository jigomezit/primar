import type { Metadata } from 'next'
import Navbar from '@/components/primar2/Navbar'
import Hero from '@/components/primar2/Hero'
import AboutUs from '@/components/primar2/AboutUs'
import Services from '@/components/primar2/Services'
import Blog from '@/components/primar2/Blog'
import Footer from '@/components/primar2/Footer'

export const metadata: Metadata = {
  title: 'Primar — Inter',
  robots: { index: false, follow: false },
}

export default function Primar2Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Blog />
      <Footer />
    </main>
  )
}
