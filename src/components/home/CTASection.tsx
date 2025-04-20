
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-agri-yellow-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Join Krishi Bandhu Bazaar Today</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Start your journey with us and become part of Bangladesh's growing agricultural ecosystem
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <Button 
              variant="outline" 
              className="border-agri-brown-DEFAULT text-agri-brown-DEFAULT hover:bg-agri-brown-DEFAULT hover:text-white"
            >
              {t("user.farmer")}
            </Button>
            <Button 
              variant="outline" 
              className="border-agri-brown-DEFAULT text-agri-brown-DEFAULT hover:bg-agri-brown-DEFAULT hover:text-white"
            >
              {t("user.investor")}
            </Button>
            <Button 
              variant="outline" 
              className="border-agri-brown-DEFAULT text-agri-brown-DEFAULT hover:bg-agri-brown-DEFAULT hover:text-white"
            >
              {t("user.buyer")}
            </Button>
            <Button 
              variant="outline" 
              className="border-agri-brown-DEFAULT text-agri-brown-DEFAULT hover:bg-agri-brown-DEFAULT hover:text-white"
            >
              {t("user.retailer")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
