import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { NavBar } from "./Compos/NavBar";
import { Button } from "./Compos/Button";
import Hero from "./Compos/Hero";
import { ProjectsTaps } from "./Compos/ProjectsTaps";
import { ContactMe } from "./Compos/ContactMe";
import AboutMe from "./Compos/AboutMe";
import { Chart } from "./Compos/Chart";

//testing

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lang = i18n.language;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <>
      <NavBar />
      <div className="w-full ">
        <Hero />
      </div>

      <div>
        <AboutMe />
        
      </div>

      

      <div className="w-auto mx-auto text-center mt-10">
        <h2 className="text-3xl font-bold ">{t("ProjectsTaps.title")}</h2>
        <p className="text-base leading-relaxed w-1/2 mx-auto pt-3 md: w-full">
          {t("ProjectsTaps.paragraph")}
          <br />
        </p>
        <ProjectsTaps />
      </div>
      <div className="w-full bg-gray-100 p-5 mt-10">
        <div className="w-1/2 mx-auto text-center">
          <h2 className="text-3xl font-bold ">Stay in touch </h2>
          <p>
            Empower your next project, and reach out today, let’s turn your
            vision into reality.
          </p>
        </div>

        <div className="w-1/3 mx-auto text-center pt-5  ">
          <ContactMe />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen p-4 gap-4">
        <h1 className="text-3xl font-bold">{t("greeting")}</h1>

        <div className="flex gap-2">
          <Button onClick={() => i18n.changeLanguage("ar")}>Arabic</Button>
          <Button onClick={() => i18n.changeLanguage("en")}>English</Button>
        </div>
      </div>
    </>
  );
}

export default App;
