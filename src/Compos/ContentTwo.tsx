import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContentTwo() {
  const [isOpen, setIsOpen] = useState(false);

  const imageUrl = "https://i.postimg.cc/vBtN2Zt5/iboat-grid.png";

  return (
    <Card>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-3 ">
          {/* Column 1: Main Logo + Brand Colors */}
          <div className="flex justify-center items-center space-x-3">
            <img
              src="https://i.postimg.cc/GmWBqkKT/main-iboat-logo.png"
              alt="FNC Logo"
              className="w-50 h-auto"
            />
            <div className="grid grid-cols-2 gap-4">
              <p>Content Date: December 2022</p>
            </div>
          </div>

          {/* Column 2: Text + Download Button */}
          <div className="flex flex-col justify-between">
            <h2 className="text-3xl font-bold">SM Conent: FNC </h2>
            <p className="text-sm text-gray-700 mb-4">
              I’ve had the pleasure of collaborating with Pioneers to elevate
              their brand even further, spearheading a full identity re-brand
              and crafting a stronger online presence across their website and
              social media channels. Together, we’re refining every visual
              element and messaging touchpoint to reflect their spirit of
              innovation. This exciting marketing initiative is still underway,
              and I’m honored to help Pioneers shine as the go-to technology
              partner for ambitious visionaries.
            </p>
            <div className="flex justify-center">
              <Button className="lg:w-1/3 md:w-1/2">Download Project</Button>
            </div>{" "}
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
              src="https://media-hosting.imagekit.io/c936a91ef4aa46c1/Promoted%20videos%20(1).mp4?Expires=1840977515&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=BsRbpaSdeuYnNibB55hz0p71s9KU77AYSLXhWOSe~2xQkFwuYTBJrtDPnfrSsC0MykU4-KrTfbBuznfwMVSheeh4jjM5jLNr2dHXr-ZkHGo7WCVlLF8cvbr7qmRqWO~LgTP0eD-Cgm7jBVJh~N82h~JyOcMegK2tbV24UWD~JuEZkX~2gJqv2aOWkpz0Sa4vs7yHd~-eBcwnZvCV5pgh2yMHs60sBzWU3MI6iwKyl8hlM0lsemWPimo7~DlqEWx7l5mON283Wg6eIAvmUbcpBZNkbjd08adbYuj2v-gpZ5gmQ1N63aMXokgSCEdYAFW1U48-EiraHzxE0xneB2drqg__"
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
