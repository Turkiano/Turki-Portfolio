import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProgramThree() {
  const [isOpen, setIsOpen] = useState(false);
  const imageUrl = "https://i.postimg.cc/y8C8GBmw/Measure-it-Page.png";

  return (
    <Card className="mt-3">
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-3">
          {/* Column 1: Text */}
          <div className="flex flex-col space-y-2">
            <h2 className="text-3xl font-bold mt-10">Project: MeasureIt App</h2>
            <p className="text-sm text-gray-700 mb-4 mt-5">
              MeasureIt is more than just a to-do list, it’s your daily
              companion for turning intentions into action. Built on the idea
              that “you can’t manage it without measuring it,” MeasureIt
              empowers you to visualize progress, track completion, and build
              momentum one task at a time. Its clean, elegant design and
              intuitive interface turn productivity into a gratifying ritual.
              Whether you're programming, working out, or finishing a portfolio,
              MeasureIt helps you celebrate every small win; because progress
              isn't just about getting things done, it's about seeing how far
              you've come.
            </p>
            <div className="flex justify-center">
              <Button className="lg:w-1/3 md:w-1/2">View Project</Button>
            </div>
          </div>

          {/* Column 2: Image */}
          <div className="mt-15 md:mt-10">
            <img
              src={imageUrl}
              alt="MeasureIt App Page"
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
