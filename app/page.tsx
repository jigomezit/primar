import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ImageCarousel from '@/components/ImageCarousel'
import AboutUs from '@/components/AboutUs'
import Blog from '@/components/Blog'
// import ProductCarousel from '@/components/ProductCarousel' // Se usará a futuro
import Services from '@/components/Services'
// import Testimonials from '@/components/Testimonials' // Se usará a futuro
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ImageCarousel />
      <AboutUs />
      <Blog />
      {/* <ProductCarousel /> Se usará a futuro */}
      <Services />
      {/* <Testimonials /> Se usará a futuro */}
      <Footer />
    </main>
  )
}

