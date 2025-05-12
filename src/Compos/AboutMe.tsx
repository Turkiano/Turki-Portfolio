// AboutMeSection.jsx
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Chart } from "./Chart";
import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  return (
    <div className="bg-gray-200 flex items-start justify-center p-4 md:p-8">
      
      <div
        className="
         w-auto             /* only as wide as its columns */
         grid grid-cols-1
         lg:[grid-template-columns:auto_2fr_3fr] /* pic auto, text 2fr, chart 3fr */
         gap-8
         items-start
       "
      >
        
        {/* ─── COLUMN 1: PROFILE IMAGE ─── */}
        <div className="flex justify-center lg:justify-start">
          <div className="bg-gray-400 rounded-2xl p-1.5">
            <div className="w-40 sm:w-56 md:w-64 lg:w-72 aspect-square rounded-xl overflow-hidden">
              <img
                src="https://i.postimg.cc/k4YnpjBj/Whats-App-Image-2025-04-15-at-6-19-55-PM.jpg"
                alt="Profile photo"
                className="w-full h-full object-cover bg-black"
              />
            </div>
          </div>
        </div>
        {/* ─── COLUMN 2: TEXT CONTENT ─── */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 w-full max-w-lg">
          {/* ADDED: max-h and overflow to control vertical height on large screens */}
          <div className="space-y-2 px-4">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                {t("about.Name")}
              </h1>
              <a
                href="https://github.com/turkiano"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-black hover:text-gray-600"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/turki-saeed/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-black hover:text-gray-600"
              >
                <FaLinkedin />
              </a>
            </div>
            <div>
            <h5
               className={`
                 text-lg sm:text-xl md:text-2xl font-medium
                 ${isRtl ? "text-right" : "text-left"}
               `}
             >                {t("about.CareerTitle")}
              </h5>
            </div>

            <div
              className={`
    flex flex-col gap-6
    ${isRtl ? "items-end text-right" : "items-start text-left"}
    w-full max-w-lg
  `}
              dir={isRtl ? "rtl" : "ltr"}
            >
              {" "}
              <p className="text-sm sm:text-base md:text-lg text-gray-800 max-w-md mx-auto lg:mx-0">
                {t("about.description")}
              </p>
            </div>

            <div className="flex justify-center lg:justify-start pt-4">
              <a
                href="/assets/Turki-Saeed-Resume.pdf"
                download
                className="px-6 py-2 text-center font-semibold rounded-lg border border-gray-600 text-black hover:bg-gray-100"
              >
                RESUME
              </a>
            </div>
          </div>
        </div>
        {/* ─── COLUMN 3: CHART ─── */}
<div className="w-full md:h-[400px] self-center">
          
          {/* ADDED self-center to balance vertical alignment */}
          <Chart />
        </div>
      </div>
    </div>
  );
}
