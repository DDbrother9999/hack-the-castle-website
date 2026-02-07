import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <Button asChild size="lg">
          <Link href="https://forms.gle/NK5bPEad3BZ8YBZn6" target="_blank" rel="noopener noreferrer">Sign Up</Link>
        </Button>
        <p className="text-sm">
          view this repository:{" "}
          <Link href="https://github.com/DDbrother9999/hack-the-castle-website" className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">
            [repository]
          </Link>
        </p>
        <p className="text-sm">made with love {"<3"}</p>
      </div>
    </section>
  )
}
