
import MainLayout from "@/components/layouts/MainLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Users, ShoppingCart, Handshake, BookOpen } from "lucide-react";

const ServicesPage = () => {
  const { t } = useLanguage();

  const serviceCategories = [
    {
      icon: <DollarSign className="h-12 w-12 text-agri-green-DEFAULT" />,
      title: t("farmer.financing.title"),
      description: t("farmer.financing.desc"),
      buttonText: "Apply for Financing",
      color: "bg-green-50"
    },
    {
      icon: <Users className="h-12 w-12 text-agri-blue-DEFAULT" />,
      title: t("investor.title"),
      description: t("investor.projects.desc"),
      buttonText: "Explore Investments",
      color: "bg-blue-50"
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-agri-yellow-dark" />,
      title: t("marketplace.title"),
      description: t("marketplace.buyers.desc"),
      buttonText: "Visit Marketplace",
      color: "bg-yellow-50"
    },
    {
      icon: <Handshake className="h-12 w-12 text-agri-brown-DEFAULT" />,
      title: t("retailer.title"),
      description: t("retailer.inventory.desc"),
      buttonText: "Retailer Solutions",
      color: "bg-amber-50"
    },
    {
      icon: <BookOpen className="h-12 w-12 text-agri-green-dark" />,
      title: t("education.title"),
      description: t("education.training.desc"),
      buttonText: "Learn More",
      color: "bg-emerald-50"
    }
  ];

  return (
    <MainLayout>
      <section className="bg-gradient-to-r from-agri-green-dark to-agri-green-DEFAULT text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{t("home.services.title")}</h1>
            <p className="text-lg opacity-90 mb-8">
              Comprehensive services to support the agricultural ecosystem in Bangladesh
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-agri-green-DEFAULT">
                For Farmers
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-agri-green-DEFAULT">
                For Investors
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-agri-green-DEFAULT">
                For Buyers
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-agri-green-DEFAULT">
                For Retailers
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-lg transition-all duration-300 overflow-hidden border-none ${service.color}`}
              >
                <CardHeader className="pb-2">
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <Button className="bg-agri-green-DEFAULT hover:bg-agri-green-dark">
                    {service.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Platform?</h2>
            <p className="text-gray-600">
              We provide a complete ecosystem of services designed to transform agriculture in Bangladesh
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="flex gap-4 p-6">
                <div className="min-w-12 h-12 rounded-full bg-agri-green-light/20 flex items-center justify-center text-agri-green-DEFAULT">
                  <span className="font-bold text-lg">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">End-to-End Solutions</h3>
                  <p className="text-gray-600">
                    From financing to market access, we provide everything farmers need to succeed
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="flex gap-4 p-6">
                <div className="min-w-12 h-12 rounded-full bg-agri-green-light/20 flex items-center justify-center text-agri-green-DEFAULT">
                  <span className="font-bold text-lg">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Transparency</h3>
                  <p className="text-gray-600">
                    Clear processes, fair pricing, and open communication throughout
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="flex gap-4 p-6">
                <div className="min-w-12 h-12 rounded-full bg-agri-green-light/20 flex items-center justify-center text-agri-green-DEFAULT">
                  <span className="font-bold text-lg">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Expert Support</h3>
                  <p className="text-gray-600">
                    Access to agricultural experts and advisors to guide your farming decisions
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="flex gap-4 p-6">
                <div className="min-w-12 h-12 rounded-full bg-agri-green-light/20 flex items-center justify-center text-agri-green-DEFAULT">
                  <span className="font-bold text-lg">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Technology-Enabled</h3>
                  <p className="text-gray-600">
                    Digital tools that make agricultural business management simple and efficient
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ServicesPage;
