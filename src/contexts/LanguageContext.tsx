
import { createContext, useContext, useState, ReactNode } from "react";

// Define supported languages
export type Language = "en" | "bn";

// Define translation types
type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

// Context interface
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: () => "",
});

// Translations object
const translations: Translations = {
  en: {
    // Common
    "app.name": "Krishi Bandhu Bazaar",
    "app.tagline": "Connecting Farmers, Investors & Markets",
    "nav.home": "Home",
    "nav.farmers": "Farmers",
    "nav.investors": "Investors",
    "nav.marketplace": "Marketplace",
    "nav.retailers": "Retailers",
    "nav.education": "Education",
    "nav.login": "Login",
    "nav.signup": "Sign Up",
    
    // Home sections
    "home.hero.title": "Empowering Bangladesh's Farmers",
    "home.hero.subtitle": "Access financing, markets, advisory services and more",
    "home.hero.cta": "Join Our Platform",
    "home.services.title": "Our Services",
    "home.impact.title": "Our Impact",
    "home.testimonials.title": "Success Stories",
    
    // Farmer section
    "farmer.title": "Services for Farmers",
    "farmer.financing.title": "Agricultural Financing",
    "farmer.financing.desc": "Access affordable loans for crops, equipment and more",
    "farmer.advisory.title": "Advisory Services",
    "farmer.advisory.desc": "Expert guidance on best farming practices",
    "farmer.insurance.title": "Crop Insurance",
    "farmer.insurance.desc": "Protect your investment against weather and pests",
    "farmer.market.title": "Market Linkage",
    "farmer.market.desc": "Sell your produce directly to buyers at fair prices",
    
    // Investor section
    "investor.title": "Investment Opportunities",
    "investor.projects.title": "Agricultural Projects",
    "investor.projects.desc": "Fund various agricultural ventures with good returns",
    "investor.tracking.title": "Transparent Tracking",
    "investor.tracking.desc": "Monitor your investments in real-time",
    "investor.returns.title": "Profit Sharing",
    "investor.returns.desc": "Clear profit distribution through our platform",
    
    // Marketplace section
    "marketplace.title": "Digital Marketplace",
    "marketplace.buyers.title": "For Buyers",
    "marketplace.buyers.desc": "Purchase quality produce directly from farmers",
    "marketplace.farmers.title": "For Farmers",
    "marketplace.farmers.desc": "Access larger markets and get fair prices",
    "marketplace.logistics.title": "Efficient Logistics",
    "marketplace.logistics.desc": "Quick and reliable delivery services",
    
    // Retailer section
    "retailer.title": "Agri-Input Retailer Support",
    "retailer.inventory.title": "Inventory Management",
    "retailer.inventory.desc": "Track and manage your products efficiently",
    "retailer.credit.title": "Buy Now, Pay Later",
    "retailer.credit.desc": "Offer credit options to farmers through our platform",
    "retailer.reach.title": "Reach More Farmers",
    "retailer.reach.desc": "Expand your customer base with digital presence",
    
    // Education section
    "education.title": "Educational Resources",
    "education.training.title": "Training Modules",
    "education.training.desc": "Learn modern agricultural practices",
    "education.soil.title": "Soil Testing",
    "education.soil.desc": "Understand and improve your soil quality",
    "education.weather.title": "Weather Updates",
    "education.weather.desc": "Stay informed with accurate weather forecasts",
    "education.sustainable.title": "Sustainable Farming",
    "education.sustainable.desc": "Learn environmentally friendly techniques",
    
    // Footer
    "footer.about": "About Us",
    "footer.careers": "Careers",
    "footer.contact": "Contact Us",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.copyright": "© 2025 Krishi Bandhu Bazaar. All rights reserved.",
    
    // Authentication
    "auth.email": "Email",
    "auth.password": "Password",
    "auth.login": "Login",
    "auth.signup": "Sign Up",
    "auth.forgot": "Forgot Password?",
    "auth.or": "Or continue with",
    
    // User types
    "user.farmer": "I am a Farmer",
    "user.investor": "I am an Investor",
    "user.buyer": "I am a Buyer",
    "user.retailer": "I am a Retailer"
  },
  bn: {
    // Common
    "app.name": "কৃষি বন্ধু বাজার",
    "app.tagline": "কৃষক, বিনিয়োগকারী এবং বাজার সংযোগ করা",
    "nav.home": "হোম",
    "nav.farmers": "কৃষক",
    "nav.investors": "বিনিয়োগকারী",
    "nav.marketplace": "বাজার",
    "nav.retailers": "খুচরা বিক্রেতা",
    "nav.education": "শিক্ষা",
    "nav.login": "লগইন",
    "nav.signup": "নিবন্ধন করুন",
    
    // Home sections
    "home.hero.title": "বাংলাদেশের কৃষকদের ক্ষমতায়ন",
    "home.hero.subtitle": "অর্থায়ন, বাজার, পরামর্শ সেবা এবং আরও অনেক কিছু অ্যাক্সেস করুন",
    "home.hero.cta": "আমাদের প্ল্যাটফর্মে যোগদান করুন",
    "home.services.title": "আমাদের সেবা",
    "home.impact.title": "আমাদের প্রভাব",
    "home.testimonials.title": "সাফল্যের গল্প",
    
    // Farmer section
    "farmer.title": "কৃষকদের জন্য সেবা",
    "farmer.financing.title": "কৃষি অর্থায়ন",
    "farmer.financing.desc": "ফসল, সরঞ্জাম এবং আরও অনেক কিছুর জন্য সাশ্রয়ী ঋণ অ্যাক্সেস করুন",
    "farmer.advisory.title": "পরামর্শমূলক সেবা",
    "farmer.advisory.desc": "সেরা কৃষি পদ্ধতির উপর বিশেষজ্ঞ নির্দেশনা",
    "farmer.insurance.title": "ফসল বীমা",
    "farmer.insurance.desc": "আবহাওয়া এবং কীটপতঙ্গ থেকে আপনার বিনিয়োগ রক্ষা করুন",
    "farmer.market.title": "বাজার সংযোগ",
    "farmer.market.desc": "ন্যায্য মূল্যে সরাসরি ক্রেতাদের কাছে আপনার পণ্য বিক্রি করুন",
    
    // Investor section
    "investor.title": "বিনিয়োগের সুযোগ",
    "investor.projects.title": "কৃষি প্রকল্প",
    "investor.projects.desc": "ভালো রিটার্ন সহ বিভিন্ন কৃষি উদ্যোগে অর্থায়ন করুন",
    "investor.tracking.title": "স্বচ্ছ ট্র্যাকিং",
    "investor.tracking.desc": "রিয়েল-টাইমে আপনার বিনিয়োগগুলি নিরীক্ষণ করুন",
    "investor.returns.title": "লাভ ভাগাভাগি",
    "investor.returns.desc": "আমাদের প্ল্যাটফর্মের মাধ্যমে স্পষ্ট মুনাফা বিতরণ",
    
    // Marketplace section
    "marketplace.title": "ডিজিটাল বাজারস্থল",
    "marketplace.buyers.title": "ক্রেতাদের জন্য",
    "marketplace.buyers.desc": "সরাসরি কৃষকদের কাছ থেকে মানসম্পন্ন পণ্য কিনুন",
    "marketplace.farmers.title": "কৃষকদের জন্য",
    "marketplace.farmers.desc": "বড় বাজারে অ্যাক্সেস এবং ন্যায্য মূল্য পান",
    "marketplace.logistics.title": "দক্ষ লজিস্টিকস",
    "marketplace.logistics.desc": "দ্রুত এবং নির্ভরযোগ্য ডেলিভারি পরিষেবা",
    
    // Retailer section
    "retailer.title": "কৃষি-ইনপুট খুচরা বিক্রেতা সমর্থন",
    "retailer.inventory.title": "ইনভেন্টরি ম্যানেজমেন্ট",
    "retailer.inventory.desc": "আপনার পণ্যগুলি দক্ষতার সাথে ট্র্যাক এবং পরিচালনা করুন",
    "retailer.credit.title": "এখন কিনুন, পরে পেমেন্ট করুন",
    "retailer.credit.desc": "আমাদের প্ল্যাটফর্মের মাধ্যমে কৃষকদের ক্রেডিট বিকল্প অফার করুন",
    "retailer.reach.title": "আরও কৃষকদের কাছে পৌঁছান",
    "retailer.reach.desc": "ডিজিটাল উপস্থিতির মাধ্যমে আপনার গ্রাহক বেস বাড়ান",
    
    // Education section
    "education.title": "শিক্ষামূলক সম্পদ",
    "education.training.title": "প্রশিক্ষণ মডিউল",
    "education.training.desc": "আধুনিক কৃষি পদ্ধতি শিখুন",
    "education.soil.title": "মাটি পরীক্ষা",
    "education.soil.desc": "আপনার মাটির গুণমান বুঝুন এবং উন্নত করুন",
    "education.weather.title": "আবহাওয়া আপডেট",
    "education.weather.desc": "সঠিক আবহাওয়া পূর্বাভাসের সাথে অবহিত থাকুন",
    "education.sustainable.title": "টেকসই কৃষি",
    "education.sustainable.desc": "পরিবেশ বান্ধব কৌশল শিখুন",
    
    // Footer
    "footer.about": "আমাদের সম্পর্কে",
    "footer.careers": "ক্যারিয়ার",
    "footer.contact": "যোগাযোগ করুন",
    "footer.privacy": "গোপনীয়তা নীতি",
    "footer.terms": "সেবার শর্তাবলী",
    "footer.copyright": "© ২০২৫ কৃষি বন্ধু বাজার। সর্বস্বত্ব সংরক্ষিত।",
    
    // Authentication
    "auth.email": "ইমেইল",
    "auth.password": "পাসওয়ার্ড",
    "auth.login": "লগইন",
    "auth.signup": "নিবন্ধন করুন",
    "auth.forgot": "পাসওয়ার্ড ভুলে গেছেন?",
    "auth.or": "অথবা এর সাথে চালিয়ে যান",
    
    // User types
    "user.farmer": "আমি একজন কৃষক",
    "user.investor": "আমি একজন বিনিয়োগকারী",
    "user.buyer": "আমি একজন ক্রেতা",
    "user.retailer": "আমি একজন খুচরা বিক্রেতা"
  }
};

// Provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using language context
export const useLanguage = () => useContext(LanguageContext);
