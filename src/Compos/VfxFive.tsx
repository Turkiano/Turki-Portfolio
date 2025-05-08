import { Card, CardContent } from "@/components/ui/card";

export default function VfxFive() {
  return (
    <Card className="mt-3">
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-3">
          {/* Column 1: Text */}
          <div className="flex flex-col space-y-2">
            <h2 className="text-3xl font-bold mt-10">
              Social issue: "kidney failure patients"
            </h2>
            <p className="text-sm text-gray-700 mb-4 mt-5">
              My journey as an Advertising Coordinator with Albir Society was
              profoundly meaningful, as I had the privilege of working closely
              with a charitable initiative dedicated to supporting patients
              battling kidney failure. Our primary mission involved connecting
              compassionate donors with patients who urgently required
              sponsorship for dialysis sessions—treatments that were essential
              yet highly expensive for both the charity dialysis center and the
              patients themselves. Many patients needed three to four sessions
              weekly, creating significant financial strain and logistical
              difficulties. Deeply moved by their resilience and determination,
              I conceptualized and produced a short, impactful video
              illustrating the immense challenges patients experienced in
              accessing timely dialysis treatments. Through authentic
              storytelling and compelling visuals, I aimed to foster greater
              public awareness and empathy. It was my sincere hope that this
              heartfelt portrayal would serve not only as a powerful reminder of
              the unseen struggles many people face daily but also inspire
              gratitude in each of us for the blessings we often take for
              granted, ultimately motivating viewers to extend their support to
              those in need.
            </p>
          </div>

          {/* Column 2: Responsive Video */}
          <div className="relative w-full pb-[56.25%] overflow-hidden rounded-lg shadow">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/2t-QCKpmzOs?si=AtDfOJ0Vskb_PFtE"
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
