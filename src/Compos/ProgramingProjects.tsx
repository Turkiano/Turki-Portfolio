import { Progress } from "@/components/ui/progress";
import { useTranslation } from "react-i18next";

export function ProgrammingProjects() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  return (
    <>
      <h1 className="text-3xl font-bold pt-10">{t("ProgramingProjects.title")}</h1>
      <div
        dir={isRtl ? "rtl" : "ltr"}
        className="w-full max-w-4xl px-4 sm:px-6 md:px-10 mx-auto"
      >
        {" "}
        {/* make a 1-col on small, 2-col on lg+ */}
        <div className="grid grid-cols-1 w-full lg:grid-cols-2 gap-8 pt-3">
          {/* Left column: your career summary */}
          <div>
            <p className="text-base leading-relaxed">
              {t("ProgramingProjects.paragraph")}
              <br />
            </p>
            <p className="text-base leading-relaxed pt-1">
              {t("ProgramingProjects.paragraph02")}
              <br /> <br />
            </p>
          </div>

          {/* Right column: your skill bars */}
          <div className="space-y-4">
            {[53, 88, 95, 73, 85, 77, 89].map((value, i) => (
              <div key={i} className="space-y-1">
                <div className="flex items-center justify-between">
                  <p>{t(`ProgramingProjects.progress0${i + 1}`)}</p>
                  <p>{value}%</p>
                </div>
                <Progress value={value} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
