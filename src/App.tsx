import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { NavBar } from "./Compos/NavBar";
import Hero from "./Compos/Hero";
import { ProjectsTaps } from "./Compos/ProjectsTaps";
import AboutMe from "./Compos/AboutMe";
import Footer from "./Compos/Footer";

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
      <div className="overflow-x-hidden">
        <NavBar />
        <div id="hero" className="w-full pt-20">
          <Hero />
        </div>

        <div id="about">
          <AboutMe />
        </div>

        <div id="projects" className="w-auto mx-auto text-center mt-10">
          <h2 className="text-3xl font-bold ">{t("ProjectsTaps.title")}</h2>
          <p className="text-base leading-relaxed w-1/2 mx-auto pt-3 md: w-full">
            {t("ProjectsTaps.paragraph")}
            <br />
          </p>
          <ProjectsTaps />
        </div>
        <div className="w-full bg-gray-100 p-5 mt-10">
  <div className="w-11/12 sm:w-1/2 mx-auto text-center">
    <h2 className="text-xl sm:text-3xl font-bold">
      {t("Contact.title")}
    </h2>
    <p className="text-sm sm:text-base w-full">
      {t("Contact.paragraph01")}
    </p>
    <p className="text-sm sm:text-base">
      {t("Contact.paragraph02")}
    </p>
  </div>
</div>

          {/* 
          <div
           
            className="w-full sm:w-1/2 md:w-1/3 mx-auto text-center pt-5"
          >
            {" "}
            <ContactMe />
          </div> */}
        </div>
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}

export default App;


//verion01