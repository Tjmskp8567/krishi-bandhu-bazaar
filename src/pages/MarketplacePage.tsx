
import MainLayout from "@/components/layouts/MainLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const MarketplacePage = () => {
  const { t } = useLanguage();

  const products = [
    {
      name: "Premium Aman Rice",
      price: "৳58/kg",
      quantity: "Minimum 100kg",
      location: "Dinajpur",
      farmer: "Karim Mia",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b"
    },
    {
      name: "Organic Vegetables Bundle",
      price: "৳450/bundle",
      quantity: "5kg assorted",
      location: "Jessore",
      farmer: "Nasreen Begum",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
    },
    {
      name: "Fresh Hilsa Fish",
      price: "৳850/kg",
      quantity: "Available now",
      location: "Chandpur",
      farmer: "Rahman Ali",
      image: "https://images.unsplash.com/photo-1497671954146-59a89210a564"
    },
    {
      name: "Organic Mangoes",
      price: "৳120/kg",
      quantity: "10kg boxes",
      location: "Rajshahi",
      farmer: "Abdul Hamid",
      image: "https://images.unsplash.com/photo-1553279768-865429fa0078"
    },
    {
      name: "Fresh Milk",
      price: "৳85/liter",
      quantity: "Minimum 5 liters",
      location: "Pabna",
      farmer: "Sharmin Akter",
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150"
    },
    {
      name: "Honey",
      price: "৳650/kg",
      quantity: "Pure Sundarban Honey",
      location: "Khulna",
      farmer: "Mahmud Khan",
      image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924"
    }
  ];

  return (
    <MainLayout>
      <section className="bg-gradient-to-r from-agri-yellow-DEFAULT to-agri-yellow-dark text-agri-brown-dark py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{t("marketplace.title")}</h1>
            <p className="text-lg">
              Purchase directly from farmers or sell your produce at fair market prices
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <Tabs defaultValue="all" className="w-full md:w-auto">
              <TabsList>
                <TabsTrigger value="all">All Products</TabsTrigger>
                <TabsTrigger value="crops">Crops</TabsTrigger>
                <TabsTrigger value="vegetables">Vegetables</TabsTrigger>
                <TabsTrigger value="fish">Fish & Livestock</TabsTrigger>
                <TabsTrigger value="fruits">Fruits</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <div className="relative w-full md:w-auto md:min-w-[300px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search products..." 
                className="pl-10" 
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="py-4">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <div className="text-agri-green-DEFAULT font-bold text-lg mb-2">
                    {product.price}
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>Quantity: {product.quantity}</div>
                    <div>Location: {product.location}</div>
                    <div>Seller: {product.farmer}</div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between gap-4 border-t pt-4">
                  <Button variant="outline" className="flex-1">
                    Details
                  </Button>
                  <Button className="flex-1 bg-agri-green-DEFAULT hover:bg-agri-green-dark">
                    Buy Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">How Our Marketplace Works</h2>
            <p className="text-gray-600">
              Connecting farmers directly with buyers through our transparent platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-agri-yellow-light p-6 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-4 text-agri-yellow-dark">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">List Your Products</h3>
              <p className="text-gray-600">
                Farmers can easily list their products with prices, quantities, and delivery options
              </p>
            </div>
            
            <div>
              <div className="bg-agri-yellow-light p-6 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-4 text-agri-yellow-dark">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Connect & Trade</h3>
              <p className="text-gray-600">
                Buyers browse, compare, and purchase directly from farmers at fair prices
              </p>
            </div>
            
            <div>
              <div className="bg-agri-yellow-light p-6 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-4 text-agri-yellow-dark">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Delivery & Payment</h3>
              <p className="text-gray-600">
                Secure payments and reliable delivery options ensure smooth transactions
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default MarketplacePage;
