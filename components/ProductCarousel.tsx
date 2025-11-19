'use client'

import { motion } from 'framer-motion'

interface Product {
  id: number
  title: string
  type: string
  price: string
  area: string
  rooms: string
  bathrooms: string
  image: string
}

const products: Product[] = [
  {
    id: 1,
    title: 'MONROE 3814',
    type: 'Departamento en venta',
    price: 'U$S 199.999',
    area: '40.00 M2',
    rooms: 'MONOAMBIENTE',
    bathrooms: '1 BAÑO',
    image: '/images/product-1.jpg',
  },
  {
    id: 2,
    title: 'PALERMO 2456',
    type: 'Departamento en venta',
    price: 'U$S 350.000',
    area: '65.00 M2',
    rooms: '2 AMBIENTES',
    bathrooms: '1 BAÑO',
    image: '/images/product-2.jpg',
  },
  {
    id: 3,
    title: 'BELGRANO 1890',
    type: 'Departamento en venta',
    price: 'U$S 425.000',
    area: '80.00 M2',
    rooms: '3 AMBIENTES',
    bathrooms: '2 BAÑOS',
    image: '/images/product-3.jpg',
  },
]

export default function ProductCarousel() {

  return (
    <section id="proyectos" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold font-poppins text-white text-center mb-12"
        >
          Nuestros Proyectos
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 bg-gray-800">
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <span className="text-gray-400 font-poppins text-sm">{product.title}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-poppins text-white mb-2">
                  {product.title}
                </h3>
                <p className="text-sm font-poppins text-gray-400 mb-2">{product.type}</p>
                <p className="text-xl font-bold font-poppins text-red-500 mb-4">
                  {product.price}
                </p>
                <p className="text-sm font-poppins text-gray-300">
                  {product.area} | {product.rooms} | {product.bathrooms}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

