import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="min-h-[80vh] flex items-center px-6 py-16">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
            Hack the Castle
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-md">
            Saturday, April 11th, at the Noble and Greenough School (10 Campus Drive, Dedham, MA 02026)
          </p>
          <Button asChild size="lg">
            <Link href="https://forms.gle/NK5bPEad3BZ8YBZn6" target="_blank" rel="noopener noreferrer">Sign Up</Link>
          </Button>
        </div>

        <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/img/main.jpeg"
            alt="Hack the Castle Event"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
