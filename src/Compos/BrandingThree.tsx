import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BrandThree() {
  const colors = ["09478f", "65c4ea", "3f3c39"];

  return (
    <Card>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-3 ">
          {/* Column 1: Main Logo + Brand Colors */}
          <div className="flex justify-center items-center space-x-3">
            <img
              src="https://i.postimg.cc/MT3kF3CT/ML-LOGO.png"
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
            <h2 className="text-3xl font-bold">Branding: Medcial Lights</h2>
            <p className="text-sm text-gray-700 mb-4">
              Following up as a Project Manager, where I took on broader
              responsibilities regularly meeting with the client multiple times
              a week, collaborating with the internal team, and sometime I will
              have to do the designing myself to ensure deadlines were met and
              our work aligned with the agency’s standards. . At Tajreed
              Marketing Agency, I had the rewarding experience of working with a
              variety of clients, which enhanced my design expertise, also
              deepened my leadership, and project management skills in a
              fast-paced environment in the Marketing industry.
            </p>
            <div className="flex justify-center">
              <Button className="lg:w-1/3 md:w-1/2">Download Project</Button>
            </div>{" "}
          </div>

          {/* Column 3: Additional Logos */}
          {/* Column 3: Additional Logos in a row */}
          <div className="flex justify-center items-center space-x-3">
            <img
              src="https://i.postimg.cc/LXpLxjfJ/Hip-Abduction-pillow.png"
              alt="Pioneers Logo 02"
              className="rounded-md w-35 h-auto"
            />
            <img
              src="https://i.postimg.cc/fTpZ4Cbg/Casting-Tape.png"
              alt="Pioneers Logo 03"
              className="rounded-md w-35 h-auto"
            />
            <img
              src="https://i.postimg.cc/bw0zQbzC/Cardboard-Brochure.png"
              alt="Pioneers Logo 04"
              className="rounded-md w-35 h-auto"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
