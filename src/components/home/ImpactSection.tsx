
import { useLanguage } from "@/contexts/LanguageContext";

export default function ImpactSection() {
  const { t } = useLanguage();
  
  const stats = [
    { number: "10,000+", label: "Farmers" },
    { number: "৳500M+", label: "Agricultural Financing" },
    { number: "5,000+", label: "Investors" },
    { number: "25+", label: "Districts Covered" }
  ];
  
  return (
    <section className="py-16 bg-agri-green-DEFAULT text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t("home.impact.title")}</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</p>
              <p className="text-lg opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
