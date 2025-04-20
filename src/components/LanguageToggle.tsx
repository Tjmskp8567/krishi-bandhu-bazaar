
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "bn" : "en");
  };

  return (
    <Button 
      variant="outline" 
      size="sm" 
      className="rounded-full flex items-center gap-1 px-3" 
      onClick={toggleLanguage}
    >
      <Globe className="h-4 w-4" />
      <span className="ml-1">{language === "en" ? "বাংলা" : "English"}</span>
    </Button>
  );
}
