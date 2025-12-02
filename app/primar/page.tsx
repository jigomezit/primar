import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import Services from '@/components/Services'
import Blog from '@/components/Blog'
import Testimonials from '@/components/Testimonials'
import ContactCard from '@/components/ContactCard'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

export default function PrimarPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Blog />
      <Testimonials />
      <ContactCard />
      <Footer />
    </main>
  )
}

