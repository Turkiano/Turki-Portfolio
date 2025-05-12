import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation();

  const links = [
    { label: t("Footer.link01"), id: "hero" },
    { label: t("Footer.link02"), id: "about" },
    { label: t("Footer.link03"), id: "projects" },
    { label: t("Footer.link04"), id: "contact" },
  ];

  return (
    <footer className="bg-[#2B2B35] text-white px-6 md:px-20 py-12 text-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
        {/* Turki's Description */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl font-semibold">{t("Footer.titleOne")}</h2>
            <a
              href="https://github.com/turkiano"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-white hover:text-gray-400"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/turki-saeed/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-white hover:text-gray-400"
            >
              <FaLinkedin />
            </a>
          </div>

          <p className="leading-6 text-gray-300">{t("Footer.paragraph")}</p>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">{t("Footer.titleTwo")}</h2>
          <div className="flex items-start gap-3 mb-3 text-gray-300">
            <MapPin size={16} className="mt-1" />
            <div>{t("Footer.address")}</div>
          </div>

          <div className="flex items-center gap-3 mb-3 text-gray-300">
            <Mail size={16} />
            <a href="mailto:turki.saeed.ksa@gmail.com">{t("Footer.email")}</a>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <Phone size={16} />
            <a href="tel:+966594930211">{t("Footer.phone")}</a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            {t("Footer.titleThree")}
          </h2>
          <ul className="space-y-2 text-gray-300">
            {links.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() =>
                    document
                      .getElementById(item.id)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:underline cursor-pointer bg-transparent border-none text-left p-0 text-gray-300"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-500 my-6"></div>

      {/* Bottom row */}
      <div className="flex flex-col md:flex-row justify-between text-gray-400 text-sm">
        <div>Copy Turkiano's Productions L.L.C</div>
        <div>Design By Turki Saeed</div>
      </div>
    </footer>
  );
}
