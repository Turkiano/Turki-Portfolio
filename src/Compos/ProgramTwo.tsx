import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export default function ProgramTwo() {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const imageUrl = "https://i.postimg.cc/9QfBZFyd/Budget-App-page.png";

  return (
    <Card className="mt-3">
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-3">
          {/* Column 1: Text */}
          <div className="flex flex-col space-y-2">
            <h2 className="text-3xl font-bold mt-10">
              {t("ProgramTwo.title")}
            </h2>
            <p className="text-sm text-gray-700 mb-4 mt-5">
              {t("ProgramTwo.paragraph")}
            </p>
            <div className="flex justify-center">
              <Button className="lg:w-1/3 md:w-1/2">
                {t("ProgramTwo.button")}
              </Button>
            </div>
          </div>

          {/* Column 2: Image */}
          <div className="mt-15 md:mt-10">
            <img
              src={imageUrl}
              alt="Budget App Page"
              className="rounded-md w-full h-auto cursor-pointer hover:opacity-80 transition"
              onClick={() => setIsOpen(true)}
            />
          </div>
        </div>

        {/* Modal Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
            onClick={() => setIsOpen(false)}
          >
            <img
              src={imageUrl}
              alt="Enlarged"
              className="max-w-full max-h-[90%] rounded shadow-lg"
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
