import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContentOne() {

  return (
    <Card>
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
              <p>Content Date: Feburary 2022</p>
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
            <img
              src="https://i.postimg.cc/kXXF7Z1q/gird-Main.png"
              alt="FNC grid"
              className="rounded-md w-50 h-auto"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
