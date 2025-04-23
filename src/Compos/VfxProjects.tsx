import { Progress } from "@/components/ui/progress";

export function VfxProjects() {
  return (
    <div className=" pt-10">
      <h1 className="text-3xl font-bold">VFX Projects</h1>
      <div className="w-full max-w-md mx-auto mt-4 space-y-4">
        <div className="flex items-center justify-between">
          <p>Adobe Premiere </p>
          <p>89%</p>
        </div>
        <Progress value={89} />

        <div className="flex items-center justify-between">
          <p>Adobe After Effect </p>
          <p>93%</p>
        </div>
        <Progress value={93} />

        <div className="flex items-center justify-between">
          <p>3D Max - Modeling</p>
          <p>87%</p>
        </div>
        <Progress value={87} />

        <div className="flex items-center justify-between">
          <p>3D Max - Texturing</p>
          <p>73%</p>
        </div>
        <Progress value={73} />

        <div className="flex items-center justify-between">
          <p>3D Max - Animation</p>
          <p>65%</p>
        </div>
        <Progress value={65} />

        <div className="flex items-center justify-between">
          <p>Zbursh</p>
          <p>67%</p>
        </div>
        <Progress value={67} />
      </div>
    </div>
  );
}
