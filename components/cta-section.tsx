import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <Button asChild size="lg">
          <Link href="https://hackthecastle.fillout.com/t/gC31fNvoqfus">Sign Up</Link>
        </Button>
        <p className="text-sm">
          view this repository:{" "}
          <Link href="https://github.com/example/hack-the-castle" className="underline hover:no-underline">
            [repository]
          </Link>
        </p>
        <p className="text-sm">made with love {"<3"}</p>
      </div>
    </section>
  )
}
