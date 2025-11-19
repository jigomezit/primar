import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Primar Inmobiliaria',
  description: 'Tu próxima propiedad, más cerca. Te acompañamos en cada decisión de compra, inversión o alquiler.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

