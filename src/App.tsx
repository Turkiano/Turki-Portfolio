import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { NavBar } from "./Compos/NavBar";
import { Button } from "./Compos/Button";

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
