import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ContentThree() {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const imageUrl = "https://i.postimg.cc/jS3vYCgK/Fine-Mark-grid.png";

  return (
    <Card className="mt-3">
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-3 ">
          {/* Column 1: Main Logo + Brand Colors */}
          <div className="flex justify-center items-center space-x-3">
            <img
              src="https://i.postimg.cc/DwrYV2Vw/Main-fine-Mark-logo.png"
              alt="FineMark Logo"
              className="w-50 h-auto"
            />
            <div className="grid grid-cols-2 gap-4">
              <p>{t("ContentThree.industry")}</p>
            </div>
          </div>

          {/* Column 2: Text + Download Button */}
          <div className="flex flex-col space-y-2">
            <h2 className="text-3xl font-bold mt-10">
              {t("ContentThree.title")}
            </h2>
            <p className="text-sm text-gray-700 mb-4 mt-5">
              {t("ContentThree.paragraph")}
            </p>
          </div>

          {/* Column 3: Additional Logos */}
          {/* Column 3: Additional Logos in a row */}
          <div className="flex justify-center items-center space-x-3">
            {/* Thumbnail */}
            <img
              src={imageUrl}
              alt="iboat grid"
              className="rounded-md w-50 h-auto cursor-pointer hover:opacity-80 transition"
              onClick={() => setIsOpen(true)}
            />

            {/* Modal Overlay */}
            {isOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50"
                onClick={() => setIsOpen(false)}
              >
                <img
                  src={imageUrl}
                  alt="Full screen iboat grid"
                  className="max-w-full max-h-full object-contain"
                  onClick={(e) => e.stopPropagation()} // prevent closing when clicking the image
                />
              </div>
            )}

            <video
              src="https://media-hosting.imagekit.io/3f86d519d1674ba0/WhatsApp%20Video%202025-05-04%20at%206.27.40%20PM.mp4?Expires=1840980704&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=q39DkrQ884a6BF0ojRa7EiSp8M-dYCI6311V8pPn3n4lpIjPYI5YDh79fcBW9dvA-h6DKc6KPSWVuGI165rDqeEm-tCi~~wV61b3RFbaq5GEPwQ~7P-5BphAhU-~WmuphktOs4DUkd4t~Rb8mp1gTYA62CNkhO99MHo0PRyHJiOAFS3aWaeXSpRGOCSrxI-o4Bcv--3xBAtNHM9Ij5gMpCBDVobDhvga8seAliuAAHzzzRMEd5QF~s~ihflqxlAKMmR7MZfcbIirF5~FJ5K6fpAOc-nM6lj~XDOOzYJ7fVuuGeztcW0FqUroExw5hjNN1FPw7sr8aHqCzMnRqwq1lQ__"
              controls
              autoPlay
              loop
              muted
              className="w-50 max-w-md rounded-lg shadow"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
