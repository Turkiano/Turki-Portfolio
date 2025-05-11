import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export function NavBar() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const navItems = [
    { id: "hero", label: t("nav.home") },
    { id: "about", label: t("nav.about") },
    { id: "projects", label: t("nav.projects") },
    { id: "contact", label: t("nav.contact") },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-background/80 backdrop-blur-md shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo / Brand */}
        <Link to="/" className="text-xl font-bold">
          {t("site.name")}
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() =>
                document
                  .getElementById(item.id)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-sm font-medium hover:text-primary"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Language Buttons (desktop only) */}
        <div className="hidden md:flex items-center space-x-2">
          <Button
            variant={i18n.language === "en" ? "default" : "outline"}
            size="sm"
            onClick={() => i18n.changeLanguage("en")}
          >
            EN
          </Button>
          <Button
            variant={i18n.language === "ar" ? "default" : "outline"}
            size="sm"
            onClick={() => i18n.changeLanguage("ar")}
          >
            العربـية
          </Button>
        </div>

        {/* Mobile Menu (Sheet) */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side={isRTL ? "left" : "right"} className="w-64 p-6">
              <div className="flex items-center justify-between mb-6">
                <Link to="/" className="text-lg font-bold">
                  {t("site.name")}
                </Link>
                <SheetTrigger asChild>
                  <Button variant="ghost">
                    <X />
                  </Button>
                </SheetTrigger>
              </div>

              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      document
                        .getElementById(item.id)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-base font-medium hover:text-primary text-start"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <div className="mt-6 flex space-x-2">
                <Button
                  variant={i18n.language === "en" ? "default" : "outline"}
                  size="sm"
                  onClick={() => i18n.changeLanguage("en")}
                >
                  EN
                </Button>
                <Button
                  variant={i18n.language === "ar" ? "default" : "outline"}
                  size="sm"
                  onClick={() => i18n.changeLanguage("ar")}
                >
                  العربـية
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
