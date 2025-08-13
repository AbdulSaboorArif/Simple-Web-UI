import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })


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
                  left: `${Math.random() * 100  }%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 1}s`,
                  animationDuration: `${1 + Math.random() * 1}s`
                }}
              />
            ))}
          </div>
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
