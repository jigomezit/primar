'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ContactCard() {
  const handleSaveContact = () => {
    // Función para guardar contacto (puede implementarse con vCard o similar)
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Fabiana Pérez
ORG:Primar Servicios Inmobiliarios
TITLE:Martillera Pública
TEL;TYPE=CELL:+54 9 11 69092147
TEL;TYPE=WORK:+54 9 11 34775000
EMAIL:administracion@primarprop.com.ar
ADR;TYPE=WORK:;;Av. Cabildo 2586 3C;CABA;;;
END:VCARD`;
    
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'fabiana-perez.vcf';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white h-screen md:h-[800px] relative rounded-none md:rounded-[24px] shadow-none md:shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-screen md:w-full max-w-none md:max-w-[448px] overflow-hidden md:mx-auto flex flex-col"
    >
      {/* Header con imagen PrimarCard */}
      <div className="bg-black h-[272px] md:h-[272px] flex items-center justify-center overflow-hidden shrink-0">
        <div className="h-full w-full relative px-8 py-12">
          <Image
            src="/images/PrimarCard.png"
            alt="Primar Servicios Inmobiliarios"
            fill
            className="object-contain scale-100"
            priority
          />
        </div>
      </div>

      {/* Contenido de contacto */}
      <div className="flex-1 md:h-[528px] relative px-8 pt-10 flex flex-col">
        {/* Nombre */}
        <h1 className="font-bold text-[30px] leading-[36px] text-neutral-950 mb-2 font-poppins">
          Fabiana Pérez
        </h1>

        {/* Título y Matrícula */}
        <p 
          className="whitespace-pre-wrap"
          style={{
            fontFamily: 'Inq, "Inq Fallback: Arial", sans-serif',
            fontSize: '1.5rem',
            fontWeight: 'var(--tnkigl2)',
            lineHeight: '1.2',
            color: '#35393b',
            marginBottom: 'var(--tnkiglp)',
          }}
        >
          Martillera Pública<br />
          CUCICBA MAT. 9024
        </p>

        {/* Información de contacto */}
        <div className="flex flex-col gap-4 mb-8">
          {/* Celular */}
          <a
            href="tel:+5491169092147"
            className="flex gap-4 items-start group"
          >
            <div className="bg-[#364153] rounded-full w-10 h-10 flex items-center justify-center shrink-0">
              <img
                src="/images/icons/phone-icon.svg"
                alt="Teléfono"
                className="w-5 h-5 brightness-0 invert"
              />
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-base leading-6 text-neutral-950 font-poppins">
                +54 9 11 69092147
              </p>
              <p className="font-bold text-sm leading-5 text-[#6a7282] font-poppins">
                Celular
              </p>
            </div>
          </a>

          {/* Oficina */}
          <a
            href="tel:+5491134775000"
            className="flex gap-4 items-start group"
          >
            <div className="bg-[#364153] rounded-full w-10 h-10 flex items-center justify-center shrink-0">
              <img
                src="/images/icons/phone-icon.svg"
                alt="Teléfono"
                className="w-5 h-5 brightness-0 invert"
              />
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-base leading-6 text-neutral-950 font-poppins">
                +54 9 11 34775000
              </p>
              <p className="font-bold text-sm leading-5 text-[#6a7282] font-poppins">
                Oficina
              </p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:administracion@primarprop.com.ar"
            className="flex gap-4 items-center group"
          >
            <div className="bg-[#364153] rounded-full w-10 h-10 flex items-center justify-center shrink-0">
              <img
                src="/images/icons/email-icon.svg"
                alt="Email"
                className="w-5 h-5 brightness-0 invert"
              />
            </div>
            <p className="font-bold text-base leading-6 text-neutral-950 font-poppins">
              administracion@primarprop.com.ar
            </p>
          </a>

          {/* Dirección */}
          <div className="flex gap-4 items-center">
            <div className="bg-[#364153] rounded-full w-10 h-10 flex items-center justify-center shrink-0">
              <img
                src="/images/icons/location-icon.svg"
                alt="Ubicación"
                className="w-5 h-5 brightness-0 invert"
              />
            </div>
            <p className="font-bold text-base leading-6 text-neutral-950 font-poppins">
              Av. Cabildo 2586 3C, CABA
            </p>
          </div>
        </div>

        {/* Botón Guardar Contacto */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.button
            onClick={handleSaveContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#1e2939] px-12 py-3 rounded-full"
          >
            <p className="font-bold text-base leading-normal text-white text-center font-poppins whitespace-nowrap">
              Guardar Contacto
            </p>
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
