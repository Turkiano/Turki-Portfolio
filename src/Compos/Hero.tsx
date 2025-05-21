import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  // const isRtl = i18n.language === "ar";

  const imageUrl =
    "https://i.postimg.cc/v89LTyzt/Leonardo-Kino-XL-Riyadh-landmark-Cityscape-Light-Trails-Tech-0.jpg";

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black/30 z-0" />
      <div className="relative z-10 container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 py-20">
        <div className="relative z-10 container mx-auto flex flex-col items-center justify-center px-4 py-20 text-center pt-70">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            {t("hero.title")}
          </h1>
          <h5 className="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-50 dark:text-white mt-4">
            {t("hero.description")}
          </h5>
          <p className="mt-4 text-lg sm:text-xl text-amber-50 dark:text-gray-300">
            {t("hero.subtitle")}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t("hero.primaryAction")}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t("hero.secondaryAction")}
            </Button>
          </div>
        </div>

        {/* Illustration or image */}
        {/* <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={imageUrl}
            alt="Meeting Illustration"
            className="w-full max-w-md md:max-w-lg h-auto object-cover rounded-lg shadow-lg"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
