import ServiceDetail from "@/components/service-details";
import { Home } from "lucide-react";

const serviceData = {
  id: "ashtamangala-kutumba-prashna",
  title: "Ashtamangala Kutumba Prashna",
  description:
    "Ashtamangala Kutumba Prashna is a divine astrological procedure for finding, revealing, and uncovering the hidden reasons why a family or individuals within the family are suffering. This comprehensive family analysis includes horoscope readings of each family member and provides Pariharas (solutions) to rectify situations affecting the entire family's well-being, concerns, and betterment.",
  icon: Home,
  whatsappMessage:
    "Hi Dr. Poduval, I would like to book an Ashtamangala Kutumba Prashna session for my family's comprehensive astrological analysis and solutions.",
  duration: "3-4 hours",
  price: "₹8,000 - ₹15,000",
  includes: [
    "Complete family astrological analysis",
    "Individual horoscope readings for each member",
    "Hidden problem identification",
    "Root cause analysis of family suffering",
    "Comprehensive Pariharas (solutions)",
    "Family harmony restoration guidance",
    "Detailed written family report",
    "Ongoing support and follow-up",
  ],
  process: [
    "Gather birth details of all family members",
    "Dr. Poduval performs Ashtamangala divination",
    "Individual horoscope analysis of each member",
    "Family karmic pattern identification",
    "Hidden suffering causes revelation",
    "Comprehensive problem assessment",
    "Customized Pariharas and solutions provided",
    "Family consultation and guidance session",
  ],
  benefits: [
    "Complete family problem diagnosis",
    "Hidden suffering causes revealed",
    "Individual and collective solutions",
    "Family harmony restoration",
    "Karmic healing for entire family",
    "Future protection and guidance",
    "Holistic family well-being approach",
    "Generational problem resolution",
  ],
  suitableFor: [
    "Families facing ongoing problems",
    "Households with unexplained difficulties",
    "Families seeking collective healing",
    "Multi-generational issue resolution",
    "Complete family astrological guidance",
    "Families wanting comprehensive analysis",
    "Those seeking root cause solutions",
    "Families prioritizing collective well-being",
  ],
  uniqueAspects: [
    "Divine astrological procedure",
    "Complete family analysis approach",
    "Individual horoscope readings included",
    "Hidden problem revelation technique",
    "Comprehensive Pariharas solutions",
    "Root cause identification method",
    "Family suffering pattern analysis",
    "Holistic family betterment guidance",
  ],
  shastraFeatures: [
    "Ancient Ashtamangala divination method",
    "Family karmic pattern analysis",
    "Hidden suffering cause identification",
    "Comprehensive problem diagnosis",
    "Individual and collective solutions",
    "Generational healing approach",
    "Traditional family astrology wisdom",
    "Complete family transformation guidance",
  ],
};

export default function AshtamangalaKutumbaPrashna() {
  return <ServiceDetail service={serviceData} />;
}