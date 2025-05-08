import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function ContentOne() {
  const [isOpen, setIsOpen] = useState(false);

  const imageUrl = "https://i.postimg.cc/kXXF7Z1q/gird-Main.png";
  return (
    <Card className="mt-3">
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-3 ">
          {/* Column 1: Main Logo + Brand Colors */}
          <div className="flex justify-center items-center space-x-3">
            <img
              src="https://i.postimg.cc/LsmPgh0z/FNC-log.png"
              alt="FNC Logo"
              className="w-50 h-auto"
            />
            <div className="grid grid-cols-2 gap-4">
              <p>Market Industry: Health Care</p>
            </div>
          </div>

          {/* Column 2: Text + Download Button */}
          <div className="flex flex-col space-y-2">
            <h2 className="text-3xl font-bold mt-10">SM Conent: Al-Faraidy
              Medical Center </h2>
            <p className="text-sm text-gray-700 mb-4 mt-5">
              As a project manager overseeing social media for Al-Faraidy
              Medical Center (FNC), I've embraced a dynamic role that demands
              versatility, creativity, and precision. Wearing multiple hats,
              I've strategically developed compelling content aligned with FNC’s
              vision, proactively planning a month ahead to ensure seamless
              delivery. Each content piece goes through a meticulous
              process—beginning with conceptualization and declaration, securing
              approval via the Monday platform, and then moving into vibrant
              design and engaging animation stages. Another round of approval
              ensures alignment with client expectations before final scheduling
              for publication. Beyond these operational responsibilities, I've
              prioritized building and nurturing strong client relationships
              through regular meetings three to four times weekly. These
              interactions have not only sustained momentum but also deepened
              trust and collaboration, laying the groundwork for ongoing
              success.
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
              src="https://media-hosting.imagekit.io/bcfe2c033a7b4455/FNC%20Story%20FB%20(1080x1920)-09.mp4?Expires=1841032768&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=GR9LVuirG16cq-TgILMOSlCmz~TpUrbcaaUnOt9IohhnnbRjs50qwPgqG0LtbjRHnoS2Cp1ZhZe2i-HP8ZOniK8R9aBJuJpNsYqrJLrR87bNb1j3R75EQBS37y2OD8wmwwPpIZ13GfFYtAt5LHlz6niN2DAPNEzNAtB0lb~LYP5Y5P~ptwnNlZdfGi0nlGn69SPEZy3GvPTxcqozAemxqy~d04NmOK12JNSelA999TYWd5fFjrOnqiHkLPr1X67DH-2yTnChTxLiRYqMTi2OEJNePFzkWc-VIU2zhnCntNDaEYbmYFS7YavMWS1U2rP912LhxC2DQ3VXxnChm01jqg__"
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
