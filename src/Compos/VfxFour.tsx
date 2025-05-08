import { Card, CardContent } from "@/components/ui/card";

export default function VfxThree() {
  return (
    <Card className="mt-3">
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-3">
          {/* Column 1: Text */}
          <div className="flex flex-col space-y-2">
            <h2 className="text-3xl font-bold mt-10">
              Brand Presentation for Eddy KSA
            </h2>
            <p className="text-sm text-gray-700 mb-4 mt-5">
              Working as an advertising designer at VMLY&R Agency was an
              enlightening journey filled with creativity, collaboration, and
              valuable learning experiences. One of the standout projects was
              creating a compelling presentation video for Eddy, a prominent
              player in the home and electronics industry. Although the project
              spanned just one intense, collaborative day with the talented team
              at Y&R's bustling office in Jeddah, the experience was
              exceptionally rich and impactful. From my vantage point as a video
              editor, I discovered the art of effectively sourcing and
              incorporating Shutterstock footage to vividly illustrate and
              communicate our creative vision to the client. This process taught
              me the importance of visual storytelling, precision, and quick
              problem-solving, especially when working under tight deadlines.
              Even though our initial creative direction faced unforeseen
              challenges and did not pan out exactly as planned, the obstacles
              encountered became opportunities to refine our strategy, push our
              creativity further, and explore alternative solutions. The
              collaboration significantly enhanced my practical expertise in
              critical design and production skills, such as Adobe InDesign,
              Photoshop, Illustrator, Branding & Identity, and Video Production.
              Moreover, I developed a deeper understanding of adhering to brand
              guidelines and maintaining visual consistency. Above all, this
              memorable project strengthened my adaptability, teamwork, and
              resilience, qualities that have proved invaluable in my
              professional growth and continue to inspire me today.
            </p>
          </div>

          {/* Column 2: Responsive Video */}
          <div className="relative w-full pb-[56.25%] overflow-hidden rounded-lg shadow">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/b_X6GxRlgCQ?si=ys97kJ1VCAsMEmVp"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
