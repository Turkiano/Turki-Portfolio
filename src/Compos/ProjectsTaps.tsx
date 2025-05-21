import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VfxProjects } from "./VfxProjects";
import { useTranslation } from "react-i18next";
import { BrandingProjects } from "./BrandingProjects";
import { ContentProjects } from "./ContentProjects";
import { ProgrammingProjects } from "./ProgramingProjects";
import { ResearchProjects } from "./ResearchProjects";

export function ProjectsTaps() {
  const { t } = useTranslation();

  return (
    <Tabs defaultValue="Branding" className="w-full mx-auto mt-5">
      <TabsList className="flex justify-center space-x-4 w-auto mx-auto sticky top-0 z-50 bg-stone-200 dark:bg-gray-800 shadow border-b border-gray-300 dark:border-gray-700">
        <TabsTrigger
          value="Branding"
          onClick={() => {
            document
              .getElementById("tab-content-Branding")
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          {" "}
          {t("ProjectsTaps.tap01")}
        </TabsTrigger>
        <TabsTrigger
          value="Research"
          onClick={() => {
            document
              .getElementById("tab-content-Research")
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          {t("ProjectsTaps.tap02")}
        </TabsTrigger>{" "}
        <TabsTrigger
          value="content"
          onClick={() => {
            document
              .getElementById("tab-content-content")
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          {t("ProjectsTaps.tap03")}
        </TabsTrigger>
        <TabsTrigger
          value="vfx"
          onClick={() => {
            document
              .getElementById("tab-content-vfx")
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          {t("ProjectsTaps.tap04")}
        </TabsTrigger>
        <TabsTrigger
          value="Programing"
          onClick={() => {
            document
              .getElementById("tab-content-Programing")
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          {t("ProjectsTaps.tap05")}
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="Branding"
        className="w-full"
        id="tab-content-Branding"
      >
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
  );
}
