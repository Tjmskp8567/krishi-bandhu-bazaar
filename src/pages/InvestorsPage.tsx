
import MainLayout from "@/components/layouts/MainLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const InvestorsPage = () => {
  const { t } = useLanguage();

  const investmentOptions = [
    {
      title: "Rice Cultivation",
      location: "Rangpur District",
      return: "15-20%",
      duration: "4 months",
      amount: "৳10,000 - ৳50,000",
      farmers: 25,
      risk: "Low"
    },
    {
      title: "Vegetable Growing",
      location: "Jessore District",
      return: "20-25%",
      duration: "3 months",
      amount: "৳20,000 - ৳100,000",
      farmers: 15,
      risk: "Medium"
    },
    {
      title: "Aquaculture Project",
      location: "Khulna District",
      return: "25-30%",
      duration: "6 months",
      amount: "৳50,000 - ৳200,000",
      farmers: 10,
      risk: "Medium-High"
    }
  ];

  return (
    <MainLayout>
      <section className="bg-gradient-to-r from-agri-blue-dark to-agri-blue-DEFAULT text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{t("investor.title")}</h1>
            <p className="text-lg opacity-90">
              Invest in agriculture to earn competitive returns while supporting Bangladesh's farming communities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Invest in Agriculture?</h2>
            <p className="text-gray-600">
              Agricultural investments offer consistent returns while directly supporting rural communities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-agri-blue-DEFAULT">Attractive Returns</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our agricultural projects provide 15-30% returns, outperforming many traditional investment options.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-agri-blue-DEFAULT">Risk Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Diversified projects and crop insurance minimize risk across your investment portfolio.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-agri-blue-DEFAULT">Social Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Your investment directly supports rural farmers and contributes to food security in Bangladesh.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Current Investment Opportunities</h2>
            <p className="text-gray-600">
              Browse our vetted agricultural projects ready for investment
            </p>
          </div>
          
          <Tabs defaultValue="all" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="crops">Crop Cultivation</TabsTrigger>
              <TabsTrigger value="livestock">Livestock & Aquaculture</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-4">
              {investmentOptions.map((option, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-4 justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-agri-blue-DEFAULT mb-1">{option.title}</h3>
                        <p className="text-gray-500 mb-3">{option.location}</p>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                          <div>
                            <span className="text-gray-600">Expected Returns:</span>
                            <span className="font-semibold ml-1 text-green-600">{option.return}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Duration:</span>
                            <span className="font-semibold ml-1">{option.duration}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Investment:</span>
                            <span className="font-semibold ml-1">{option.amount}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Risk Level:</span>
                            <span className="font-semibold ml-1">{option.risk}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-center gap-2">
                        <div className="text-center px-4 py-2 bg-agri-blue-light/10 rounded-lg text-agri-blue-DEFAULT">
                          <div className="font-bold text-2xl">{option.farmers}</div>
                          <div className="text-sm">Farmers</div>
                        </div>
                        <Button className="bg-agri-blue-DEFAULT hover:bg-agri-blue-dark">
                          Invest Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="crops">
              <div className="text-center py-12 text-gray-500">
                Crop cultivation projects will be displayed here
              </div>
            </TabsContent>
            
            <TabsContent value="livestock">
              <div className="text-center py-12 text-gray-500">
                Livestock and aquaculture projects will be displayed here
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </MainLayout>
  );
};

export default InvestorsPage;
