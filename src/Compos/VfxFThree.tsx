import { Card, CardContent } from "@/components/ui/card";

export default function VfxThree() {
  return (
    <Card className="mt-3">
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-3">
          {/* Column 1: Text */}
          <div className="flex flex-col space-y-2">
            <h2 className="text-3xl font-bold mt-10">
              Documentary Film | Dar Al Sayed Abdullah Sharbatly
            </h2>
            <p className="text-sm text-gray-700 mb-4 mt-5">
              Working as an advertising coordinator with Albir Society from
              March 2017 to January 2019 was truly an inspiring journey,
              enriched by meaningful projects that touched hearts and impacted
              lives. One particularly memorable event was when we had the honor
              of welcoming Prince Mishal bin Abdulaziz to visit the Mr. Abdullah
              Al-Sharbatly orphanage home in Jeddah. Entrusted with the
              responsibility of producing a documentary film highlighting the
              state-of-the-art facilities of the orphanage, my task was to
              vividly capture the benefits and daily joys experienced by the
              orphans under Albir’s compassionate management. Over an intensive
              two-week period, I immersed myself deeply into various creative
              roles, working as a camera operator, video editor, VFX artist, and
              audio editor, to ensure every aspect of the story was presented
              authentically and compellingly. Supported by an extraordinary team
              whose dedication matched my own, we collectively brought to life a
              heartfelt narrative that resonated profoundly with all who viewed
              it, including the esteemed royal visitor. This documentary not
              only underscored the nurturing environment Albir Society provided
              for orphaned children but also affirmed to me personally how
              powerful visual storytelling can inspire community awareness,
              empathy, and positive social change.
            </p>
          </div>

          {/* Column 2: Responsive Video */}
          <div className="relative w-full pb-[56.25%] overflow-hidden rounded-lg shadow">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/rcLlQK-5Cpk?si=ysHCeKjF51QtjT0k"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
