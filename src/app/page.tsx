import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-autoflow-dark">
      {/* Background with stars effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-autoflow-dark via-autoflow-dark to-black">
            {/* Background image */}
            <div className='absolute inset-0'>
                <Image src="/BackGround Image.png" alt="Background" fill className='object-cover' />
          {/* Stars effect */}
          <div className="absolute inset-0">
            {[...Array(100)].map((_, i) => (
              <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>
          
          {/* Glowing arc effect */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-96">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-autoflow-purple/20 via-blue-500/10 to-transparent rounded-t-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-blue-400/30 via-purple-500/20 to-transparent rounded-t-full blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
      </div>
    </main>
  )
}
