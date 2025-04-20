
import MainLayout from "@/components/layouts/MainLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Calendar, Tag, Database } from "lucide-react";

const RetailersPage = () => {
  const { t } = useLanguage();

  return (
    <MainLayout>
      <section className="bg-gradient-to-r from-agri-brown-DEFAULT to-agri-brown-dark text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{t("retailer.title")}</h1>
            <p className="text-lg opacity-90">
              Tools and services to help agricultural input retailers grow their business
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mb-4 text-agri-brown-DEFAULT">
                  <Database className="h-10 w-10" />
                </div>
                <CardTitle>{t("retailer.inventory.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{t("retailer.inventory.desc")}</p>
                <Button className="w-full bg-agri-brown-DEFAULT hover:bg-agri-brown-dark">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mb-4 text-agri-brown-DEFAULT">
                  <Calendar className="h-10 w-10" />
                </div>
                <CardTitle>{t("retailer.credit.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{t("retailer.credit.desc")}</p>
                <Button className="w-full bg-agri-brown-DEFAULT hover:bg-agri-brown-dark">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mb-4 text-agri-brown-DEFAULT">
                  <ShoppingCart className="h-10 w-10" />
                </div>
                <CardTitle>{t("retailer.reach.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{t("retailer.reach.desc")}</p>
                <Button className="w-full bg-agri-brown-DEFAULT hover:bg-agri-brown-dark">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mb-4 text-agri-brown-DEFAULT">
                  <Tag className="h-10 w-10" />
                </div>
                <CardTitle>Analytics Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Track sales trends and optimize your inventory with data-driven insights
                </p>
                <Button className="w-full bg-agri-brown-DEFAULT hover:bg-agri-brown-dark">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works for Retailers</h2>
            <p className="text-gray-600">
              Join our platform and take your agricultural retail business to the next level
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-agri-brown-light/30 p-6 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-agri-brown-dark">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Register Your Store</h3>
              <p className="text-gray-600">
                Create a profile, add your inventory, and set up your digital storefront
              </p>
            </div>
            
            <div>
              <div className="bg-agri-brown-light/30 p-6 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-agri-brown-dark">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Connect With Farmers</h3>
              <p className="text-gray-600">
                Reach more farmers in your area and offer them products and credit options
              </p>
            </div>
            
            <div>
              <div className="bg-agri-brown-light/30 p-6 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-agri-brown-dark">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Grow Your Business</h3>
              <p className="text-gray-600">
                Use our tools and analytics to increase sales and optimize your operations
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-agri-brown-DEFAULT hover:bg-agri-brown-dark text-lg px-8">
              Join as a Retailer
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default RetailersPage;
