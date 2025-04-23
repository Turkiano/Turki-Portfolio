import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VfxProjects } from "./VfxProjects";

export function ProjectsTaps() {
  return (
    <Tabs defaultValue="Branding" className="w-[400px] mx-auto mt-5">
      <TabsList className="flex justify-center space-x-4 w-auto mx-auto">
        <TabsTrigger value="Branding">Branding</TabsTrigger>
        <TabsTrigger value="Reasearch">Reasearch</TabsTrigger>
        <TabsTrigger value="content">Content</TabsTrigger>
        <TabsTrigger value="vfx">VFX</TabsTrigger>
        <TabsTrigger value="Programing">Programing</TabsTrigger>



      </TabsList>
      <TabsContent value="Branding">
        Make changes to your Brand Management here.
      </TabsContent>
      <TabsContent value="Programing">Change your Programing here.</TabsContent>
      <TabsContent value="Research">Change your Research here.</TabsContent>
      <TabsContent value="content">Change your content here.</TabsContent>
      <TabsContent value="vfx">
        <VfxProjects />
      </TabsContent>



    </Tabs>
  );
}
