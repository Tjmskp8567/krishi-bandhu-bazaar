
import { useLanguage } from "@/contexts/LanguageContext";

export default function PartnershipSection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We work together with leading organizations to improve agricultural outcomes
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70">
          {/* These would be replaced with actual partner logos */}
          <div className="h-12 w-32 bg-gray-300 rounded flex items-center justify-center">
            <span className="text-gray-600 font-semibold">Partner 1</span>
          </div>
          <div className="h-12 w-32 bg-gray-300 rounded flex items-center justify-center">
            <span className="text-gray-600 font-semibold">Partner 2</span>
          </div>
          <div className="h-12 w-32 bg-gray-300 rounded flex items-center justify-center">
            <span className="text-gray-600 font-semibold">Partner 3</span>
          </div>
          <div className="h-12 w-32 bg-gray-300 rounded flex items-center justify-center">
            <span className="text-gray-600 font-semibold">Partner 4</span>
          </div>
        </div>
      </div>
    </section>
  );
}
