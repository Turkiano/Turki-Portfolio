import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";


export default function VfxThree() {
      const { t } = useTranslation();
  
  return (
    <Card className="mt-3">
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-3">
          {/* Column 1: Text */}
          <div className="flex flex-col space-y-2">
            <h2 className="text-3xl font-bold mt-10">
              {t("VfxFour.title")}
            </h2>
            <p className="text-sm text-gray-700 mb-4 mt-5">
              {t("VfxFour.paragraph")}
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
