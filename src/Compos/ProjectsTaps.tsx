import { useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VfxProjects } from "./VfxProjects";
import { useTranslation } from "react-i18next";
import { BrandingProjects } from "./BrandingProjects";
import { ContentProjects } from "./ContentProjects";
import { ProgrammingProjects } from "./ProgramingProjects";
import { ResearchProjects } from "./ResearchProjects";

export function ProjectsTaps() {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToContent = (id: string) => {
    setTimeout(() => {
      const container = scrollRef.current;
      const el = document.getElementById(id);

      if (container && el) {
        const offset = 80; // adjust based on your tab height
        const topPos = el.offsetTop - offset;
        container.scrollTo({ top: topPos, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div
      ref={scrollRef}
      className="relative max-h-[80vh] overflow-y-auto scroll-smooth"
    >
      <Tabs defaultValue="Branding" className="w-full mx-auto mt-5">
        <TabsList className="flex justify-center space-x-4 w-auto mx-auto sticky top-0 z-50 bg-gray-100 dark:bg-gray-800 shadow border-b border-gray-300 dark:border-gray-700">
          <TabsTrigger value="Branding" onClick={() => scrollToContent("tab-content-Branding")}>
            {t("ProjectsTaps.tap01")}
          </TabsTrigger>
          <TabsTrigger value="Research" onClick={() => scrollToContent("tab-content-Research")}>
            {t("ProjectsTaps.tap02")}
          </TabsTrigger>
          <TabsTrigger value="content" onClick={() => scrollToContent("tab-content-content")}>
            {t("ProjectsTaps.tap03")}
          </TabsTrigger>
          <TabsTrigger value="vfx" onClick={() => scrollToContent("tab-content-vfx")}>
            {t("ProjectsTaps.tap04")}
          </TabsTrigger>
          <TabsTrigger value="Programing" onClick={() => scrollToContent("tab-content-Programing")}>
            {t("ProjectsTaps.tap05")}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="Branding" id="tab-content-Branding">
          <BrandingProjects />
        </TabsContent>
        <TabsContent value="Programing" id="tab-content-Programing">
          <ProgrammingProjects />
        </TabsContent>
        <TabsContent value="Research" id="tab-content-Research">
          <ResearchProjects />
        </TabsContent>
        <TabsContent value="content" id="tab-content-content">
          <ContentProjects />
        </TabsContent>
        <TabsContent value="vfx" id="tab-content-vfx">
          <VfxProjects />
        </TabsContent>
      </Tabs>
    </div>
  );
}
