import { Card, CardContent } from "@/components/ui/card";

export default function VfxThree() {
  return (
    <Card className="mt-3">
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-3">
          {/* Column 1: Text */}
          <div className="flex flex-col space-y-2">
            <h2 className="text-3xl font-bold mt-10">SM Content: FNC</h2>
            <p className="text-sm text-gray-700 mb-4 mt-5">
              I’ve had the pleasure of collaborating with Pioneers to elevate
              their brand even further, spearheading a full identity re-brand
              and crafting a stronger online presence across their website and
              social media channels. Together, we’re refining every visual
              element and messaging touchpoint to reflect their spirit of
              innovation. This exciting marketing initiative is still underway,
              and I’m honored to help Pioneers shine as the go-to technology
              partner for ambitious visionaries.
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
