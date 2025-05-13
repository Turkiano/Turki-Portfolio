import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function BrandThree() {
  const colors = ["09478f", "65c4ea", "3f3c39"];
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    setIsOpen(true);
  };

  return (
    <Card>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-3 ">
          {/* Column 1: Main Logo + Brand Colors */}
          <div className="flex justify-center items-center space-x-3">
            <img
              src="https://i.postimg.cc/MT3kF3CT/ML-LOGO.png"
              alt="Medcial Lights Logo"
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
            <h2 className="text-3xl font-bold">{t("BrandThree.title")}</h2>
            <p className="text-sm text-gray-700 mb-4">
              {t("BrandThree.paragraph")}
            </p>
            <div className="flex justify-center ">
              <a href="/Branding/Modern LIGHTS GUIDE.pdf" download>
                <Button className="lg:w-full md:w-1/2">
                  {t("BrandOne.button")}
                </Button>
              </a>
            </div>
          </div>

          {/* Column 3: Additional Logos with Modal */}
          <div className="flex justify-center items-center space-x-3">
            {[
              "https://i.postimg.cc/LXpLxjfJ/Hip-Abduction-pillow.png",
              "https://i.postimg.cc/fTpZ4Cbg/Casting-Tape.png",
              "https://i.postimg.cc/bw0zQbzC/Cardboard-Brochure.png",
            ].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Medical Lights design ${index + 1}`}
                onClick={() => handleImageClick(src)}
                className="rounded-md w-35 h-auto cursor-pointer hover:opacity-80 transition"
              />
            ))}

            {/* Modal */}
            {isOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50"
                onClick={() => setIsOpen(false)}
              >
                <img
                  src={selectedImage}
                  alt="Full-screen preview"
                  className="max-w-full max-h-full object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
