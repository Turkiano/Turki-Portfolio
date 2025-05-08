import { Card, CardContent } from "@/components/ui/card";

export default function VfxThree() {
  return (
    <Card className="mt-3">
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-3">
          {/* Column 1: Text */}
          <div className="flex flex-col space-y-2">
            <h2 className="text-3xl font-bold mt-10">The Making of FineMark</h2>
            <p className="text-sm text-gray-700 mb-4 mt-5">
              One of the most memorable projects during my tenure was filming
              the "Making of FineMark Workshop." This ambitious video spanned
              approximately six months, requiring dedicated filming across 5 to
              8 days within three separate months. Each shoot day brought new
              experiences, challenges, and opportunities to capture intricate
              details and compelling behind-the-scenes moments that truly
              embodied the essence of FineMark’s meticulous craftsmanship and
              dedication. The editing process, though initially expected to be
              straightforward, turned out to be significantly more
              time-consuming due to simultaneous commitments to various other
              filming projects and the ongoing management and updates of our
              active social media accounts. Despite these demanding
              circumstances, the unwavering support, encouragement, and
              collaboration from the FineMark team enabled me to maintain focus
              and creatively overcome these hurdles. Ultimately, our collective
              determination and teamwork resulted in a video that vividly
              highlighted our shared passion and creativity, leaving a lasting
              impression on viewers and colleagues alike. I would not be able to
              make it happen without the help of my team, and I am grateful for
              their support and encouragement throughout this process.
            </p>
          </div>

          {/* Column 2: Responsive Video */}
          <div className="relative w-full pb-[56.25%] overflow-hidden rounded-lg shadow">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/Sna5vjVg22U?si=3e_yuZ9XmkXxCN3y"
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
