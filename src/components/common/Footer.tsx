
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  
  const footerLinks = [
    {
      title: t("app.name"),
      links: [
        { name: t("footer.about"), path: "/about" },
        { name: t("footer.careers"), path: "/careers" },
        { name: t("footer.contact"), path: "/contact" }
      ]
    },
    {
      title: t("farmer.title"),
      links: [
        { name: t("farmer.financing.title"), path: "/farmers/financing" },
        { name: t("farmer.advisory.title"), path: "/farmers/advisory" },
        { name: t("farmer.insurance.title"), path: "/farmers/insurance" }
      ]
    },
    {
      title: t("investor.title"),
      links: [
        { name: t("investor.projects.title"), path: "/investors/projects" },
        { name: t("investor.tracking.title"), path: "/investors/tracking" },
        { name: t("investor.returns.title"), path: "/investors/returns" }
      ]
    },
    {
      title: t("education.title"),
      links: [
        { name: t("education.training.title"), path: "/education/training" },
        { name: t("education.soil.title"), path: "/education/soil" },
        { name: t("education.weather.title"), path: "/education/weather" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-agri-green-DEFAULT mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link 
                      to={link.path}
                      className="text-gray-600 hover:text-agri-green-DEFAULT transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">{t("footer.copyright")}</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-500 text-sm hover:text-agri-green-DEFAULT">
                {t("footer.privacy")}
              </Link>
              <Link to="/terms" className="text-gray-500 text-sm hover:text-agri-green-DEFAULT">
                {t("footer.terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
