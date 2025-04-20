
import MainLayout from "@/components/layouts/MainLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Globe, Search } from "lucide-react";

const EducationPage = () => {
  const { t } = useLanguage();

  const resources = [
    {
      title: "Sustainable Rice Cultivation",
      category: "Crop Management",
      level: "Beginner",
      duration: "2 hours",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b"
    },
    {
      title: "Organic Pest Control Methods",
      category: "Pest Management",
      level: "Intermediate",
      duration: "1.5 hours",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
    },
    {
      title: "Understanding Soil Health",
      category: "Soil Science",
      level: "Advanced",
      duration: "3 hours",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a"
    },
    {
      title: "Water Conservation Techniques",
      category: "Resource Management",
      level: "Intermediate",
      duration: "2.5 hours",
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac"
    }
  ];

  return (
    <MainLayout>
      <section className="bg-gradient-to-r from-agri-blue-light to-agri-blue-DEFAULT text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{t("education.title")}</h1>
            <p className="text-lg opacity-90">
              Learn modern farming techniques, best practices, and access valuable agricultural knowledge
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Resources</h2>
            <p className="text-gray-600">Explore our educational content designed for Bangladesh's farmers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={resource.image} 
                    alt={resource.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs">
                      {resource.category}
                    </span>
                    <span className="px-2 py-1 bg-green-50 text-green-600 rounded-full text-xs">
                      {resource.level}
                    </span>
                    <span className="px-2 py-1 bg-amber-50 text-amber-600 rounded-full text-xs">
                      {resource.duration}
                    </span>
                  </div>
                  <Button className="w-full">View Resource</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md bg-white">
              <CardHeader>
                <div className="mb-4 text-agri-blue-DEFAULT">
                  <BookOpen className="h-10 w-10" />
                </div>
                <CardTitle>{t("education.training.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{t("education.training.desc")}</p>
                <Button variant="outline">View All Courses</Button>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md bg-white">
              <CardHeader>
                <div className="mb-4 text-agri-green-DEFAULT">
                  <FileText className="h-10 w-10" />
                </div>
                <CardTitle>{t("education.soil.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{t("education.soil.desc")}</p>
                <Button variant="outline">Learn About Testing</Button>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md bg-white">
              <CardHeader>
                <div className="mb-4 text-agri-yellow-dark">
                  <Globe className="h-10 w-10" />
                </div>
                <CardTitle>{t("education.weather.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{t("education.weather.desc")}</p>
                <Button variant="outline">Check Weather</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Find Specific Information</h2>
            <p className="text-gray-600 mb-8">Search our knowledge base for answers to your farming questions</p>
            
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input 
                type="text"
                placeholder="Search for farming techniques, crop information, etc."
                className="w-full px-12 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-agri-blue-DEFAULT"
              />
              <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full px-6">
                Search
              </Button>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer text-sm">
                Rice Farming
              </span>
              <span className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer text-sm">
                Pest Control
              </span>
              <span className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer text-sm">
                Irrigation
              </span>
              <span className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer text-sm">
                Organic Farming
              </span>
              <span className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer text-sm">
                Soil Health
              </span>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default EducationPage;
