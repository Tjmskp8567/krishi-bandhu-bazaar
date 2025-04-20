
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-r from-agri-green-light to-agri-green-DEFAULT text-white py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
              {t("home.hero.title")}
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-6 max-w-xl animate-fade-in">
              {t("home.hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button 
                size="lg" 
                className="bg-agri-yellow-DEFAULT text-agri-brown-dark hover:bg-agri-yellow-dark"
              >
                {t("home.hero.cta")}
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white">
                {t("nav.learn_more")}
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 animate-scale-in">
            <img 
              src="https://images.unsplash.com/photo-1517022812141-23620dba5c23" 
              alt="Bangladesh Agriculture" 
              className="rounded-lg shadow-lg w-full object-cover object-center h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
