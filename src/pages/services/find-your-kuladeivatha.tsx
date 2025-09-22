import ServiceDetail from "@/components/service-details";
import { Crown } from "lucide-react";

const serviceData = {
  id: "kuladevatha-discovery-service",
  title: "Find Your Kuladevatha",
  description:
    "Discover your ancestral tutelary deity through Dr. Chithrabhanu K Poduval's specialized Kuladevatha identification service. Just as devotional matters begin with Ganapati, temple devotion starts with your own Kuladevatha - the native family deity that protects your lineage from misfortune. Dr. Poduval has found over 260 Kuladevathas in 17 years, making him the leading expert in reconnecting families with their ancestral guardian deities across India and South India.",
  icon: Crown,
  whatsappMessage:
    "Hi Dr. Poduval, I would like to discover my family's Kuladevatha and reconnect with our ancestral tutelary deity.",
  duration: "90-120 minutes",
  price: "₹3,000 - ₹6,000",
  includes: [
    "Expert Kuladevatha identification (260+ discovered)",
    "Ancestral lineage spiritual analysis",
    "Family deity historical connection",
    "Guardian deity protection activation",
    "Pilgrimage guidance and temple location",
    "Worship rituals and procedures",
    "Detailed family deity report",
    "Follow-up instructions and support",
  ],
  process: [
    "Gather family history and ancestral details",
    "Dr. Poduval performs specialized divination",
    "Ancestral spiritual lineage analysis",
    "Kuladevatha identification and verification",
    "Historical connection establishment",
    "Worship methods and rituals guidance",
    "Reconnection ceremony planning",
    "Detailed consultation and guidance",
  ],
  benefits: [
    "Guardian deity protection and blessings",
    "Family prosperity and spiritual harmony",
    "Ancestral connection restoration",
    "Pilgrimage and temple worship guidance",
    "Generational blessing activation",
    "Protection from misfortune",
    "Spiritual identity and lineage clarity",
    "Expert guidance from 260+ discoveries",
  ],
  suitableFor: [
    "Hindu and Jain families",
    "Families with unknown ancestral deities",
    "Those seeking ancestral protection",
    "Families with conversion history",
    "Spiritual lineage restoration seekers",
    "Families facing recurring problems",
    "Those wanting ancestral blessings",
    "Anyone seeking family deity connection",
  ],
  keyAspects: [
    "Family guardian and protector deity",
    "Ancestral worship tradition for generations",
    "Protection, prosperity, and blessings source",
    "Pilgrimage and temple worship customs",
    "Male (Kuladeva) or female (Kuladevi) variations",
    "Distinct from personal or village deities",
    "Regional and family-specific variations",
    "Universal spiritual lineage concept across communities",
  ],
  expertiseRecord: [
    "Over 260 Kuladevathas discovered in 17 years",
    "Highest number found in recent times",
    "Hundreds of families served across India",
    "Specialized expertise in South India",
    "Leading authority in Kuladevatha identification",
    "Proven track record of successful discoveries",
    "Comprehensive instructions and procedures",
    "Expert guidance for reconnection process",
  ],
  reconnectionReasons: [
    "Historical religious conversions",
    "Foreign invasion disruptions",
    "Ancestral displacement circumstances",
    "Conversion by force or compulsion",
    "Religious propagation effects",
    "Colonial period disruptions",
    "Missionary influence impacts",
    "Natural generational disconnection",
  ],
};

export default function KuladevathaDiscoveryService() {
  return <ServiceDetail service={serviceData} />;
}