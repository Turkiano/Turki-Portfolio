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
        <TabsTrigger value="Branding"> {t("ProjectsTaps.tap01")}</TabsTrigger>
        <TabsTrigger value="Research">
          {t("ProjectsTaps.tap02")}
        </TabsTrigger>{" "}
        <TabsTrigger value="content">{t("ProjectsTaps.tap03")}</TabsTrigger>
        <TabsTrigger value="vfx">{t("ProjectsTaps.tap04")}</TabsTrigger>
        <TabsTrigger value="Programing">{t("ProjectsTaps.tap05")}</TabsTrigger>
      </TabsList>
      <TabsContent value="Branding" className="w-full ">
        <BrandingProjects />
      </TabsContent>
      <TabsContent value="Programing">
        <ProgrammingProjects />
      </TabsContent>
      <TabsContent value="Research">
        <ResearchProjects />
      </TabsContent>
      <TabsContent value="content">
        <ContentProjects />
      </TabsContent>
      <TabsContent value="vfx">
        <VfxProjects />
      </TabsContent>
    </Tabs>
  );
}
