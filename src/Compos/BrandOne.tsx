import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export default function BrandOne() {
  const colors = ["ff5410", "56f82d", "57caab", "aa2efc"];
  const { t } = useTranslation();

  return (
    <Card>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-3 ">
          {/* Column 1: Main Logo + Brand Colors */}
          <div className="flex justify-center items-center space-x-3">
            <img
              src="https://i.postimg.cc/4d34hQp1/Pioneers-Logo-2026-05.jpg"
              alt="Pioneers Logo"
              className="mb-4 w-50 h-auto"
            />
            <div className="grid grid-cols-2 gap-4">
              {colors.map((c) => (
                <div key={c} className="flex flex-col items-center">
                  <div
                    className="w-8 h-8 rounded-full ring ring-gray-300"
                    style={{ backgroundColor: `#${c}` }}
                  />
                  <span className="mt-1 text-xs font-mono">#{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Text + Download Button */}
          <div className="flex flex-col justify-between">
            <h2 className="text-3xl font-bold"> {t("BrandOne.title")}</h2>
            <p className="text-sm text-gray-700 mb-4">
              {t("BrandOne.paragraph")}
            </p>
            <div className="flex justify-center">
              <a href="/Branding/Pioneers-Logo 2026.pdf" download>
                <Button className="lg:w-full md:w-1/2">
                  {t("BrandOne.button")}
                </Button>
              </a>
            </div>
          </div>

          {/* Column 3: Additional Logos */}
          {/* Column 3: Additional Logos in a row */}
          <div className="flex justify-center items-center space-x-3">
            <img
              src="https://i.postimg.cc/hvdcT90z/Pioneers-Logo-2026-02.jpg"
              alt="Pioneers mockup"
              className="rounded-md w-30 h-auto"
            />
            <img
              src="https://i.postimg.cc/vB6ZtFYZ/Pioneers-Logo-2026-03.jpg"
              alt="Pioneers mockup 02"
              className="rounded-md w-30 h-auto"
            />
            <img
              src="https://i.postimg.cc/X726q1WH/Pioneers-Logo-2026-04.jpg"
              alt="Pioneers mockup 03"
              className="rounded-md w-30 h-auto"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
