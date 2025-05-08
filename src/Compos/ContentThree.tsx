import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function ContentThree() {
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
              <p>Market Industry: Construction</p>
            </div>
          </div>

          {/* Column 2: Text + Download Button */}
          <div className="flex flex-col space-y-2">
            <h2 className="text-3xl font-bold mt-10">
              SM Conent: FineMark Expo{" "}
            </h2>
            <p className="text-sm text-gray-700 mb-4 mt-5">
              In February 2020, I embarked on an exciting journey as a Social
              Media Manager at FineMark Expo, a pioneering production company
              based in the Kingdom of Saudi Arabia. Specializing in temporary
              and semi-permanent event productions as well as permanent
              construction projects, FineMark Expo provided me with a vibrant
              canvas to unleash my creativity and strategic thinking. Tasked
              with launching and managing their social media platforms and
              overseeing website content, I embraced the challenge of capturing
              and sharing compelling visuals by filming numerous workshops and
              production events. When the unforeseen disruption of Covid-19
              halted projects globally, I pivoted creatively, determined to
              sustain our digital presence. Through relentless effort, I
              produced valuable digital assets that continue to resonate and
              enhance the company’s brand image even today. This experience not
              only honed my resilience and adaptability but also laid a strong
              foundation for my passion for storytelling and impactful digital
              communication.
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
