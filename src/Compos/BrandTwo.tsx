import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BrandOne() {
  const mainColors = ["2CAAE1", "44B8B6"];
  const secondaryColors = ["37C3F4", "57DDD6", "00FFB5"];
  const gradients = [
    { label: ["main", "gradient"], colors: ["2CAAE1", "44B8B6"] },
    { label: ["2nd", "gradient"], colors: ["37C3F4", "57DDD6"] },
    { label: ["3rd", "gradient"], colors: ["57DDD6", "00FFB5"] },
  ];

  return (
    <Card>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-3">
          {/* Column 1: Logo beside Main, Secondary & Gradients */}
          <div className="flex flex-col md:flex-row items-center md:items-center md:space-x-6 space-y-4 md:space-y-0">
            {/* Logo */}
            <img
              src="https://i.postimg.cc/LsmPgh0z/FNC-log.png"
              alt="FNC Logo"
              className="w-50 h-auto"
            />
            {/* Colors & Gradients */}
            <div className="space-y-4 flex flex-col items-center">
              {/* Main colors */}
              <div>
                <h4 className="font-semibold">i- Main colors</h4>
                <div className="flex mt-1 space-x-3 ">
                  {mainColors.map((c) => (
                    <div key={c} className="flex flex-col items-center">
                      <div
                        className="w-6 h-6 rounded-full ring ring-gray-300"
                        style={{ backgroundColor: `#${c}` }}
                      />
                      <span className="mt-1 text-xs font-mono">#{c}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Secondary colors */}
              <div>
                <h4 className="font-semibold">ii- Secondary colors</h4>
                <div className="flex mt-1 space-x-3">
                  {secondaryColors.map((c) => (
                    <div key={c} className="flex flex-col items-center">
                      <div
                        className="w-6 h-6 rounded-full ring ring-gray-300"
                        style={{ backgroundColor: `#${c}` }}
                      />
                      <span className="mt-1 text-xs font-mono">#{c}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Gradients */}
              <div>
                <h4 className="font-semibold">iii- Complementary Colors</h4>
                <div className="flex mt-1 space-x-3">
                  {gradients.map((g) => (
                    <div
                      key={g.label.join("-")}
                      className="flex flex-col items-center"
                    >
                      <div
                        className="w-16 h-16 rounded-lg"
                        style={{
                          background: `linear-gradient(to right, #${g.colors[0]} 0%, #${g.colors[1]} 100%)`,
                        }}
                      />

                      <span className="mt-1 text-xs font-mono text-center">
                        {g.label[0]}
                        <br />
                        {g.label[1]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Text + Button */}
          <div className="flex flex-col justify-between">
            <h2 className="text-3xl font-bold">Branding: FNC</h2>
            <p className="text-sm text-gray-700 mb-4">
              During my time at Tajreed Marketing Agency, I had the incredible
              opportunity to work with a diverse range of clients, including the
              Al Fraidy National Center (FNC). As a graphic designer, I led the
              enhancement of FNC’s brand guidelines, redesigned their website
              for a more impactful user experience, and elevated their social
              media presence with consistent, engaging content. My dedication
              and creative leadership led to a promotion to Project Manager,
              where I took on greater responsibilities such as meeting with the
              client two to three times a week, and coordinating closely with
              our internal team to meet tight deadlines; while upholding
              Tajreed’s high standards. This journey not only sharpened my
              design skills but also strengthened my ability to lead,
              communicate, and deliver exceptional results under pressure.
            </p>
            <div className="flex justify-center">
              <Button className="lg:w-1/3 md:w-1/2">Download Project</Button>
            </div>
          </div>

          {/* Column 3: Additional Logos */}
          <div className="flex justify-center items-center space-x-3">
            <img
              src="https://i.postimg.cc/pVFn6SrS/Story-FB-1080x1920-AR-09.jpg"
              alt="FNC Design 01"
              className="rounded-md w-31 h-auto"
            />
            <img
              src="https://i.postimg.cc/sgmrD36N/Story-FB-1080x1920-AR-11.jpg"
              alt="FNC Design 02"
              className="rounded-md w-31 h-auto"
            />
            <img
              src="https://i.postimg.cc/PrcDVkz0/Story-FB-1080x1920-AR-10.jpg"
              alt="FNC Design 03"
              className="rounded-md w-31 h-auto"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
