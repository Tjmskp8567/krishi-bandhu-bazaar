
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Handshake, DollarSign, Users, ShoppingCart } from "lucide-react";

export default function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <DollarSign className="h-10 w-10 text-agri-green-DEFAULT" />,
      title: t("farmer.financing.title"),
      description: t("farmer.financing.desc"),
      link: "/farmers/financing"
    },
    {
      icon: <Users className="h-10 w-10 text-agri-green-DEFAULT" />,
      title: t("investor.projects.title"),
      description: t("investor.projects.desc"),
      link: "/investors/projects"
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-agri-green-DEFAULT" />,
      title: t("marketplace.title"),
      description: t("marketplace.buyers.desc"),
      link: "/marketplace"
    },
    {
      icon: <Handshake className="h-10 w-10 text-agri-green-DEFAULT" />,
      title: t("retailer.title"),
      description: t("retailer.reach.desc"),
      link: "/retailers"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t("home.services.title")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t("app.tagline")}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex items-center justify-center pt-8 pb-2">
                <div className="p-3 rounded-full bg-agri-green-light/20 mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a 
                  href={service.link}
                  className="text-agri-green-DEFAULT hover:underline font-medium"
                >
                  {t("nav.learn_more")} →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
