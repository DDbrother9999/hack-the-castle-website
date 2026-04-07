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
  { time: "9:00 AM", event: "Doors Open and Sign-In" },
  { time: "9:30 AM", event: "Opening Ceremony" },
  { time: "10:00 AM", event: "Github Workshop" },
  { time: "10:30 AM", event: "Website (HTML + CSS) Workshop" },
  { time: "10:30 AM", event: "Gamedev (Godot) Workshop" },
  { time: "11:45 PM", event: "Lunch" },
  { time: "12:30 PM", event: "Speaker" },
  { time: "3:45 PM", event: "Ship (Submission) Deadline" },
  { time: "4:00 PM", event: "Ship Showcase & Voting" },
  { time: "4:30 PM", event: "Closing Ceremony" },
  { time: "4:45 PM", event: "Group Photo & Clean Up" },
  { time: "5:00 PM", event: "Event End" }
];

export function InfoSection() {
  return (
    <section id="info" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Introduction Blurb */}
        <div className="mb-24 bg-white text-blue-950 p-8 md:p-12 lg:p-14 rounded-3xl shadow-xl border border-blue-100/50">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-10 text-[#002855] tracking-tight leading-snug">
              Hack the Castle is a <span className="text-[#0052cc]">hackathon.</span>
            </h2>
            <div className="space-y-6 text-sm md:text-base lg:text-lg text-[#003366]/80 max-w-4xl">
              <p className="leading-relaxed">
                You are invited to Hack the Castle, a <span className="text-[#002855] font-semibold">8-hour hackathon</span> hosted at the Noble and Greenough School on <span className="text-[#002855] font-semibold">April 11th (9 AM - 5 PM)</span>.
              </p>
              <p className="leading-relaxed">
                Open to all students in grades 6-12, this is a chance to build a technical project (like a website, game, or app) alongside peers. Mentors will be available, and there are various awards (totaling <span className="text-[#0052cc] font-semibold">$200</span>) to be won!
              </p>
            </div>
          </div>
        </div>

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
