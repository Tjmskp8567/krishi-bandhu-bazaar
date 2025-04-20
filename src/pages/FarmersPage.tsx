
import MainLayout from "@/components/layouts/MainLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { DollarSign, FileText, Heart, Earth } from "lucide-react";
import { Button } from "@/components/ui/button";

const FarmersPage = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: t("farmer.financing.title"),
      description: t("farmer.financing.desc"),
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: t("farmer.advisory.title"),
      description: t("farmer.advisory.desc"),
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: t("farmer.insurance.title"),
      description: t("farmer.insurance.desc"),
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a"
    },
    {
      icon: <Earth className="h-6 w-6" />,
      title: t("farmer.market.title"),
      description: t("farmer.market.desc"),
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac"
    }
  ];

  return (
    <MainLayout>
      <section className="bg-gradient-to-r from-agri-green-light to-agri-green-DEFAULT text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{t("farmer.title")}</h1>
            <p className="text-lg opacity-90">
              Access the resources, connections, and support you need to grow your farm and increase your income.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-md">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-2/5 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="h-48 md:h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="md:w-3/5 p-6">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-center mb-2">
                        <div className="mr-2 p-2 bg-agri-green-light/20 rounded-full text-agri-green-DEFAULT">
                          {service.icon}
                        </div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </div>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <Button className="bg-agri-green-DEFAULT hover:bg-agri-green-dark mt-4">
                        {t("nav.learn_more")}
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600">Join thousands of farmers across Bangladesh who are growing their businesses with our support</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-agri-green-DEFAULT text-white text-lg font-bold mb-4">
                  {step}
                </div>
                <h3 className="text-xl font-semibold mb-3">Step {step}</h3>
                <p className="text-gray-600">
                  {step === 1 && "Register and create your farmer profile"}
                  {step === 2 && "Apply for services and connect with advisors"}
                  {step === 3 && "Grow your farm with our continuous support"}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-agri-green-DEFAULT hover:bg-agri-green-dark text-lg px-8">
              Sign Up as a Farmer
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default FarmersPage;
