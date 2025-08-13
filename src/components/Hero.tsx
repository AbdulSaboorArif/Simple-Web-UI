import { Inter, Lora} from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })
const lora = Lora({ subsets: ['latin'] })

const Hero = () => {
  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
      {/* Top Banner */}
      <div className="mb-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 bg-[#1C166E] rounded-full">
        <div className={`${inter.className} px-6 py-2 border border-white/20 rounded-full bg-autoflow-purple/5`}>
          <span className="text-white text-sm font-medium">
            AutoFlow is an open-source automation platform
          </span>
        <button className="px-4 py-2 bg-autoflow-purple/30 hover:bg-autoflow-purple/40 border border-white/20 rounded-full text-white text-sm font-medium transition-all duration-300">
          Meet the Developer
        </button>
        </div>
      </div>

      {/* Main Heading */}
      <div className="mb-8 max-w-4xl">
        <h1 className={`${inter.className}text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight`}>
          Automate your workflow
        </h1>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          with{' '}
          <span className={`${lora.className} text-autoflow-purple`}>
            AutoFlow
          </span>
        </h2>
      </div>

      {/* Description */}
      <div className="mb-12 max-w-2xl">
        <p className={`${inter.className} text-lg sm:text-xl text-white/80 leading-relaxed`}>
          Autoflow is an web-based automation software designed for everyone from individual to enterprise.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="mb-16 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
        <button className="btn-primary text-lg px-8 py-4 bg-[#1C166E] rounded-full">
          Get started
        </button>
        <button className="btn-secondary text-lg px-8 py-4 bg-black rounded-full">
          Read the blog
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-6 border-2 border-white/30 rounded-full flex items-center justify-center">
            <div className="w-1 h-1 bg-white rounded-full animate-bounce"></div>
          </div>
          <div className="text-white/60 text-sm font-medium">
            Scroll Down
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
