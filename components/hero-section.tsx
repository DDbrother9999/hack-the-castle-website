import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="min-h-[80vh] flex items-center px-6 py-16">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
            Hack the Castle
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-md">
            March 11th, at the Noble and Greenough School
          </p>
          <Button asChild size="lg">
            <Link href="https://hackthecastle.fillout.com/t/gC31fNvoqfus">Sign Up</Link>
          </Button>
        </div>
        
        <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center">
          <span className="text-muted-foreground text-sm">Event Image</span>
        </div>
      </div>
    </section>
  )
}
