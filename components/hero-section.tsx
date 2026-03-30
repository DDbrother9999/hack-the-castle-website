import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-[95vh] pt-4 md:pt-8 lg:pt-10 overflow-hidden flex flex-col justify-start">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/img/castle.jpg"
          alt="Noble and Greenough Castle"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Vignette gradient overlay to darken edges */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black/80" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 mb-24 max-w-[1600px] mx-auto">
        <div className="mb-4 text-left">
          <h1 className="relative text-5xl md:text-7xl lg:text-[6.5rem] xl:text-[8rem] font-bold text-white tracking-tight leading-none md:leading-tight inline-block drop-shadow-2xl">
            Hack the Castle
            {/* Sticker positioned relative to the title, scaled precisely for the tight-cropped PNG, resting just outside the text block */}
            <div className="absolute top-[75%] -translate-y-1/2 -right-60.5 md:-right-82.5 lg:-right-105 xl:-right-125 z-20 w-60 h-60 md:w-[320px] md:h-80 lg:w-100 lg:h-100 xl:w-120 xl:h-120 pointer-events-none hover:-rotate-2 transition-transform duration-300">
              <Image
                src="/img/sticker.png"
                alt="Hack the Castle Sticker"
                fill
                className="object-contain"
                priority
              />
            </div>
          </h1>
        </div>
        <p className="text-lg md:text-2xl lg:text-3xl text-white font-bold mb-8 max-w-4xl drop-shadow-md relative z-30">
          Saturday, April 11th, at the <a href="https://maps.app.goo.gl/VRPPFBmpCC22bVnJ7" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/80 transition-colors">Noble and Greenough School</a>
        </p>
        <div className="inline-block relative z-30 group mb-10">
          <Button asChild className="bg-gradient-to-r from-[#00b0ff] to-[#0052cc] hover:scale-105 active:scale-95 transition-transform duration-200 text-white text-2xl md:text-3xl px-12 md:px-14 py-7 md:py-8 h-auto font-bold rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.4)] uppercase tracking-widest border-0">
            <Link href="https://forms.gle/NK5bPEad3BZ8YBZn6" target="_blank" rel="noopener noreferrer">
              Sign Up
            </Link>
          </Button>
        </div>

        {/* main.jpeg added back below the sign up button */}
        <div className="relative z-30 w-full sm:w-[80%] max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 transform hover:-rotate-1 transition-transform duration-300 pointer-events-auto">
          <Image
            src="/img/main.jpeg"
            alt="Hack the Castle Event"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
