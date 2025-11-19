import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ImageCarousel from '@/components/ImageCarousel'
import AboutUs from '@/components/AboutUs'
import ProductCarousel from '@/components/ProductCarousel'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ImageCarousel />
      <AboutUs />
      <ProductCarousel />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  )
}

