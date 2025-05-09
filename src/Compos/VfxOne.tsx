import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";


export default function VfxOne() {
    const { t } = useTranslation();
  
  return (
    <Card className="mt-3">
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-3 ">
          {/* Column 2: Text + Download Button */}
          <div className="flex flex-col space-y-2">
            <h2 className="text-3xl font-bold mt-10">{t("VfxOne.title")}</h2>
            <p className="text-sm text-gray-700 mb-4 mt-5">
             {t("VfxOne.paragraph")}
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
