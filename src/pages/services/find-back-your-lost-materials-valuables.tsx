import ServiceDetail from "@/components/service-details";
import { Search } from "lucide-react";

const serviceData = {
  id: "lost-item-recovery-service",
  title: "Lost Item Recovery Service",
  description:
    "Astrologer Shri Chithrabhanu K Poduval specializes in finding lost materials, properties, and valuables using ancient astrological techniques. With 18 years of proven expertise, he has successfully recovered gold ornaments worth ₹44 crores, currency worth ₹20 lakhs, and countless missing documents, passports, files, and cellphones. His unique spiritual methods help locate lost items with remarkable accuracy.",
  icon: Search,
  whatsappMessage:
    "Hi Dr. Poduval, I would like to book a session to find my lost items using your astrological guidance.",
  duration: "45-60 minutes",
  price: "₹1,500 - ₹3,000",
  includes: [
    "Detailed astrological analysis for lost items",
    "Spiritual guidance and direction finding",
    "Time-based recovery predictions",
    "Location and area identification",
    "Remedial measures for recovery",
    "Follow-up guidance and support",
    "Written report with findings",
    "Recovery timeline estimation",
  ],
  process: [
    "Provide details about the lost item",
    "Share approximate time and place of loss",
    "Dr. Poduval performs astrological calculations",
    "Spiritual analysis and divination methods",
    "Direction and location guidance provided",
    "Recovery strategies and remedies suggested",
    "Timeline and probability assessment",
  ],
  benefits: [
    "Proven track record of successful recoveries",
    "Ancient astrological techniques",
    "Detailed location guidance",
    "Time-specific recovery predictions",
    "Spiritual remedies for enhancement",
    "Cost-effective compared to investigation services",
    "Personalized approach for each case",
    "18 years of specialized experience",
  ],
  suitableFor: [
    "Individuals who lost valuable items",
    "Missing jewelry and gold ornaments",
    "Lost documents and passports",
    "Misplaced electronic devices",
    "Missing money or currency",
    "Lost property papers and files",
    "Missing personal belongings",
    "Anyone seeking spiritual guidance for recovery",
  ],
  successRecord: [
    "Gold ornaments worth ₹44 crores recovered",
    "Currency worth ₹20 lakhs found",
    "Hundreds of passports located",
    "Countless documents and files recovered",
    "Numerous cellphones and electronics found",
    "18 years of successful practice",
    "Clients from across the globe",
    "Proven astrological methodology",
  ],
};

export default function LostItemRecoveryService() {
  return <ServiceDetail service={serviceData} />;
}