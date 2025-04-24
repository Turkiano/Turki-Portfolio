import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
    const { t, i18n } = useTranslation();
  
    const isRtl = i18n.language === "ar";

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
    <div className="container … flex-col-reverse md:flex-row …">
      <div
        className={
          "w-full md:w-1/ p-10 " +
          (isRtl ? "text-right md:text-right" : "text-center md:text-left")
        }
      >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
            {t("hero.title")}
          </h1>
          <h5 className="text-3xl sm:text-2xl lg:text-1xl font-bold text-gray-900 dark:text-white ">
            {t("hero.description")}
          </h5>
          <p className="mt-4 text-lg sm:text-xl text-gray-700 dark:text-gray-300">
            {t("hero.subtitle")}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4 w-1/3">
            <Button size="lg">{t("hero.primaryAction")}</Button>
            <Button variant="outline" size="lg">
              {t("hero.secondaryAction")}
            </Button>
          </div>
        </div>

        {/* Illustration or image */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
          <img
            src="/hero-illustration.svg"
            alt="Illustration"
            className="w-3/4 max-w-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
