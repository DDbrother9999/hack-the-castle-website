import Image from "next/image"

const reasons = [
  {
    title: "Share your knowledge and learn new things",
    description:
      "No matter your experience level, you will meet plenty of people to learn with. Join the learnathon to learn from a workshop or dive into the hackathon to explore by yourself.",
    imagePosition: "left" as const,
    image: "/img/showandtell.jpg",
  },
  {
    title: "Make cool stuff",
    description:
      "Come to the hackathon and create an awesome project with a team or by yourself with a chance to win some cool prizes. Follow one of three tracks or forge your own adventure.",
    imagePosition: "right" as const,
    image: "/img/working.jpg",
  },
  {
    title: "Create lasting memories",
    description:
      "Meet new people, make friends, play games, create projects, and have a great time. Experience the community and make lasting memories.",
    imagePosition: "left" as const,
    image: "/img/lunch.jpg",
  },
]

const schedule = [
  { time: "9:00 AM", event: "Opening Ceremony" },
  { time: "9:30 AM", event: "Work Block" },
  { time: "12:00 PM", event: "Lunch" },
  { time: "1:00 PM", event: "Work Block 2" },
  { time: "4:30 PM", event: "Demos & Judging" },
  { time: "5:00 PM", event: "Closing Ceremony" },
]

export function InfoSection() {
  return (
    <section id="info" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Why Attend */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Why should you attend?</h2>

          <div className="space-y-16">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className={`flex flex-col gap-6 ${reason.imagePosition === "left"
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                  }`}
              >
                <div className="md:w-1/3 aspect-[4/3] relative rounded-lg overflow-hidden shadow-md shrink-0">
                  <Image
                    src={reason.image}
                    alt={reason.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-2/3 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Schedule</h2>

          <div className="border border-border rounded-lg overflow-hidden">
            <table className="w-full">
              <tbody>
                {schedule.map((item, index) => (
                  <tr
                    key={index}
                    className={index !== schedule.length - 1 ? "border-b border-border" : ""}
                  >
                    <td className="py-4 px-6 text-muted-foreground font-medium w-32">
                      {item.time}
                    </td>
                    <td className="py-4 px-6">{item.event}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
