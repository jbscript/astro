import ServiceDetail from "@/components/service-details";
import { Users2 } from "lucide-react";

const serviceData = {
  id: "family-group-horoscope-reading",
  title: "Family & Group Horoscope Reading",
  description:
    "Dr. Chithrabhanu K Poduval offers comprehensive Family and Group Horoscope Reading services that combine traditional horoscope analysis with Prashna and rare intuitive capacity. Whether it's a nuclear family, joint family, or larger family unit, or a group of friends and team members, this service provides deep insights into the fate and life matters of each individual within the collective, revealing interconnected destinies and group dynamics.",
  icon: Users2,
  whatsappMessage:
    "Hi Dr. Poduval, I would like to book a Family/Group Horoscope Reading session for comprehensive astrological analysis of multiple people.",
  duration: "2-4 hours (varies by group size)",
  price: "₹5,000 - ₹20,000 (depends on group size)",
  includes: [
    "Individual horoscope analysis for each member",
    "Prashna (divination) for the group",
    "Rare intuitive capacity insights",
    "Fate and life matter identification",
    "Group dynamics and compatibility",
    "Collective destiny analysis",
    "Individual guidance within group context",
    "Comprehensive group report",
  ],
  process: [
    "Gather birth details of all family/group members",
    "Dr. Poduval analyzes individual horoscopes",
    "Prashna divination for collective insights",
    "Rare intuitive capacity application",
    "Fate and life matter identification",
    "Group interaction and dynamics analysis",
    "Individual destiny within collective context",
    "Comprehensive consultation and guidance",
  ],
  benefits: [
    "Complete family/group astrological understanding",
    "Individual fate and life clarity",
    "Group harmony and compatibility insights",
    "Collective destiny awareness",
    "Enhanced relationships and communication",
    "Mutual support and understanding",
    "Coordinated life planning",
    "Holistic group well-being guidance",
  ],
  suitableFor: [
    "Nuclear and joint families",
    "Extended family units",
    "Friend groups and social circles",
    "Business teams and partnerships",
    "Study groups and colleagues",
    "Spiritual groups and communities",
    "Any collective seeking astrological guidance",
    "Groups planning major decisions together",
  ],
  serviceTypes: [
    "Family Horoscope Reading - Nuclear families",
    "Family Horoscope Reading - Joint families",
    "Family Horoscope Reading - Extended families",
    "Group Horoscope Reading - Friends",
    "Group Horoscope Reading - Teams",
    "Group Horoscope Reading - Colleagues",
    "Group Horoscope Reading - Communities",
    "Custom group sizes and configurations",
  ],
  uniqueFeatures: [
    "Horoscope analysis combined with Prashna",
    "Rare intuitive capacity application",
    "Individual and collective insights",
    "Fate and life matter revelation",
    "Group dynamics understanding",
    "Flexible family/group size accommodation",
    "Comprehensive multi-person analysis",
    "Interconnected destiny exploration",
  ],
};

export default function FamilyGroupHoroscopeReading() {
  return <ServiceDetail service={serviceData} />;
}