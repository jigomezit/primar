import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 px-4 text-center">
        <Image
          src="/images/logo.png"
          alt="Primar Logo"
          width={200}
          height={200}
          className="w-auto h-auto"
          priority
        />
        <div className="flex flex-col items-center md:items-start gap-4">
          <h1 className="text-7xl md:text-8xl font-bold text-white font-coolvetica tracking-widest">
            Primar
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light font-coolvetica tracking-normal">
            Página en construcción
          </p>
        </div>
      </div>
    </main>
  )
}

