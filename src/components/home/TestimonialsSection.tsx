
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function TestimonialsSection() {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      name: "Rafiqul Islam",
      role: "Rice Farmer, Rangpur",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "Through this platform, I received fair financing for my rice crop and connected directly with buyers who pay better prices than middlemen."
    },
    {
      name: "Nasreen Akhter",
      role: "Vegetable Farmer, Jessore",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "The advisory services helped me improve my vegetable yields by 30%. I also received insurance that protected me during unexpected floods."
    },
    {
      name: "Ahmed Khan",
      role: "Investor, Dhaka",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "I've invested in multiple agriculture projects through this platform. The transparent tracking and consistent returns have been impressive."
    }
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t("home.testimonials.title")}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-agri-brown-light bg-white hover:shadow-md transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <p className="text-gray-700 text-center italic mb-4">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="flex flex-col items-center border-t pt-4">
                <h4 className="font-medium text-agri-green-DEFAULT">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
