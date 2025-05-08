import { Card, CardContent } from "@/components/ui/card";

export default function VfxTwo() {
  return (
    <Card className="mt-3">
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-3">
          {/* Column 1: Text */}
          <div className="flex flex-col space-y-2">
            <h2 className="text-3xl font-bold mt-10">
              Sea World Project - Andalus Mall
            </h2>
            <p className="text-sm text-gray-700 mb-4 mt-5">
              During my time as a Social Media Manager at FineMark Expo from
              February to November 2020, I had the privilege of leading digital
              storytelling for one of our most vibrant campaigns—the Sea World
              Project at Al-Andalus Mall in Jeddah. Though the project itself
              spanned just 3 to 5 working days, it was the culmination of weeks
              of creative planning, production coordination, and hands-on
              execution. From the initial brainstorming sessions in the FineMark
              workshop to the final implementation on-site, I meticulously
              documented every stage to create engaging, behind-the-scenes
              content. The goal of the campaign was to build brand awareness and
              introduce the public to the exciting presence of FineMark Expo.
              This project deepened my passion for turning ideas into immersive,
              shareable experiences and strengthened my ability to manage
              fast-paced campaigns with precision and creativity.
            </p>
          </div>

          {/* Column 2: Responsive Video */}
          <div className="relative w-full pb-[56.25%] overflow-hidden rounded-lg shadow">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/IkagvoTWZj4?si=_d2p1u4Jq-8xJJjf"
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
