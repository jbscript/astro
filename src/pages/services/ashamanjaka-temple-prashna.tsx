import ServiceDetail from "@/components/service-details";
import { Building2 } from "lucide-react";

const serviceData = {
  id: "ashtamangala-temple-prashna",
  title: "Ashtamangala Temple Prashna",
  description:
    "Ashtamangala Temple or Kshethra Prashna is a divine astrological procedure for finding matters related to temples, their betterment, deities, and proper functioning. This sacred practice identifies flaws, mistakes, deity's wishes, and can reveal new deity presence. It uncovers truths about temples and deity wishes, bringing divine blessings. Astrologer Shri. Chithrabhanu K Poduval has conducted over 375 temple Ashtamangala Prashnas and found hundreds of Kuladevathas, making him the ultimate expert in this procedure.",
  icon: Building2,
  whatsappMessage:
    "Hi Dr. Poduval, I would like to book an Ashtamangala Temple Prashna session for temple rectification and deity guidance.",
  duration: "4-6 hours",
  price: "₹15,000 - ₹30,000",
  includes: [
    "Complete temple astrological analysis",
    "Deity presence and wishes identification",
    "Temple flaw and mistake detection",
    "Kuladevatha discovery and guidance",
    "Sacred procedure rectification",
    "Divine blessing enhancement methods",
    "Detailed temple improvement report",
    "Ongoing spiritual guidance and support",
  ],
  process: [
    "Temple history and current situation assessment",
    "Dr. Poduval performs Ashtamangala divination",
    "Deity presence and energy analysis",
    "Temple functioning evaluation",
    "Flaw and mistake identification",
    "Deity wishes and requirements revelation",
    "Kuladevatha discovery if applicable",
    "Comprehensive rectification guidance provided",
  ],
  benefits: [
    "Enhanced temple spiritual energy",
    "Proper deity worship and functioning",
    "Divine blessings and grace",
    "Temple problem resolution",
    "Kuladevatha connection restoration",
    "Improved temple management",
    "Spiritual purification and healing",
    "Long-term temple prosperity",
  ],
  suitableFor: [
    "Temple management committees",
    "Family temples and shrines",
    "Religious institutions",
    "Kuladevatha temple restoration",
    "New temple establishment",
    "Temple renovation projects",
    "Spiritual centers and ashrams",
    "Ancient temple restoration",
  ],
  expertiseHighlights: [
    "Over 375 temple Ashtamangala Prashnas conducted",
    "Hundreds of Kuladevathas discovered",
    "Ultimate expert in temple procedures",
    "Proven track record of temple rectification",
    "Divine deity communication specialist",
    "Temple spiritual energy restoration",
    "Ancient temple wisdom application",
    "Sacred procedure authenticity guaranteed",
  ],
  serviceFeatures: [
    "Divine temple assessment procedure",
    "Deity presence identification",
    "Temple flaw detection method",
    "Kuladevatha discovery expertise",
    "Sacred truth revelation",
    "Divine blessing enhancement",
    "Temple functioning optimization",
    "Spiritual energy rectification",
  ],
};

export default function AshtamangalaTemplePrashna() {
  return <ServiceDetail service={serviceData} />;
}