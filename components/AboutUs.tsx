'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutUs() {
  return (
    <section id="nosotros" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-96 bg-gray-800 rounded-lg overflow-hidden"
          >
            <Image
              src="/images/PrimarPhoto.jpeg"
              alt="Primar Inmobiliaria"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6">
              ¿Quiénes Somos?
            </h2>
            <h4 className="text-2xl font-semibold font-poppins text-white mb-6">
              👥 Cuatro Socios, Una Misión
            </h4>
            <p className="text-lg font-poppins text-gray-300 leading-relaxed">
              Somos un equipo de cuatro socios, formados en la <strong>Universidad Católica Argentina</strong>, que decidimos unir nuestras individualidades, conocimientos y valores para crear una inmobiliaria diferente. Nuestra formación académica y experiencia nos impulsaron a emprender este proyecto con un objetivo claro: transformar la experiencia inmobiliaria para nuestros clientes.
            </p>
          </motion.div>
        </div>

        {/* Visión Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <h4 className="text-2xl font-semibold font-poppins text-white mb-6">
            🎯 Nuestra Visión
          </h4>
          <p className="text-lg font-poppins text-gray-300 leading-relaxed">
            Queremos que cada cliente tenga una visión más amplia y segura al momento de comprar, vender o alquilar una propiedad. Creemos que el acceso a la información, el acompañamiento profesional y la transparencia son claves para que puedas concretar tus sueños inmobiliarios con confianza.
          </p>
        </motion.div>

        {/* Compromiso Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <h4 className="text-2xl font-semibold font-poppins text-white mb-6">
            🚀 Nuestro Compromiso
          </h4>
          <p className="text-lg font-poppins text-gray-300 leading-relaxed">
            Trabajamos con pasión, dedicación y profesionalismo para ayudarte a concretar tus sueños y necesidades inmobiliarias. Nos motiva construir relaciones de confianza y ser parte de tu historia.
            <br /><br />
            ¡Te invitamos a conocernos y a dar el primer paso hacia tu próxima propiedad junto a nosotros!
          </p>
        </motion.div>
      </div>
    </section>
  )
}

