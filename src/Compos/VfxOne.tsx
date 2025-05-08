import { Card, CardContent } from "@/components/ui/card";

export default function VfxOne() {
  return (
    <Card className="mt-3">
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-3 ">
          {/* Column 2: Text + Download Button */}
          <div className="flex flex-col space-y-2">
            <h2 className="text-3xl font-bold mt-10">ShowReel 2000 </h2>
            <p className="text-sm text-gray-700 mb-4 mt-5">
              My career in visual storytelling began as a VFX artist during a
              three-month internship at PixelPost Agency in Malaysia, a renowned
              MSC-status company in the advertising industry. There, I honed my
              skills in digital imaging, 2D and 3D animation, and video editing,
              laying the creative foundation for what was to come. Returning to
              my hometown, Jeddah, I stepped into my first full-time role with
              Milimeter Production as an Assistant Manager. This role opened
              doors to high-profile projects, including visually captivating
              work for Red Bull and other notable productions, sharpening both
              my technical and managerial abilities. Simultaneously, I embraced
              freelancing, notably collaborating with Queen Lounge on an
              exclusive event featuring Alaa Almonsory from Alf Alf FM. From
              conceptualization to shooting and editing, I led the production
              process, delivering a final piece that exceeded expectations and
              left the client highly satisfied. This journey reflects my passion
              for visual media, adaptability across roles, and dedication to
              delivering excellence at every stage.
            </p>
          </div>

          {/* Column 3: Additional Logos */}

          <div className="relative w-full pb-[56.25%] /* 16:9 */ overflow-hidden rounded-lg shadow">
            <iframe
              src="https://player.vimeo.com/video/382653851?badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
              allowFullScreen
              title="Turki’s Showreel 2020"
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
