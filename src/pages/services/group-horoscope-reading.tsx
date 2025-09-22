import ServiceDetail from "@/components/service-details";
import { Users } from "lucide-react";

const serviceData = {
  id: "group-horoscope-reading",
  title: "Group Horoscope Reading",
  description:
    "Dr. Chithrabhanu K Poduval's Group Horoscope Reading service includes comprehensive horoscope analysis combined with Prashna divination and rare intuitive capacity for groups of people. Whether it's a small group of 2-3 friends, a team, or a larger collective, this service provides detailed insights into the fate and life matters of each individual within the group context, revealing how their destinies interconnect and influence each other.",
  icon: Users,
  whatsappMessage:
    "Hi Dr. Poduval, I would like to book a Group Horoscope Reading session for my team/friends to understand our collective and individual destinies.",
  duration: "2-5 hours (depends on group size)",
  price: "₹3,000 - ₹15,000 (varies by group size)",
  includes: [
    "Individual horoscope analysis for each member",
    "Prashna divination for group dynamics",
    "Rare intuitive capacity insights",
    "Fate and life matter identification per person",
    "Group compatibility and interaction analysis",
    "Collective destiny understanding",
    "Individual guidance within group context",
    "Comprehensive group analysis report",
  ],
  process: [
    "Gather birth details of all group members",
    "Dr. Poduval analyzes individual horoscopes",
    "Prashna divination for collective insights",
    "Apply rare intuitive capacity for deeper understanding",
    "Individual fate and life matter assessment",
    "Group dynamics and compatibility evaluation",
    "Interconnected destiny analysis",
    "Detailed consultation with each member's insights",
  ],
  benefits: [
    "Understanding of each member's fate and life",
    "Group harmony and compatibility insights",
    "Individual destiny clarity within collective",
    "Enhanced team collaboration and understanding",
    "Mutual support and guidance strategies",
    "Collective decision-making wisdom",
    "Relationship dynamics improvement",
    "Synchronized life planning opportunities",
  ],
  suitableFor: [
    "Friend groups seeking collective guidance",
    "Business teams and partnerships",
    "Study groups and colleagues",
    "Social circles and communities",
    "Project teams and collaborators",
    "Spiritual groups and seekers",
    "Family friend circles",
    "Any group wanting astrological insights",
  ],
  groupOptions: [
    "Small groups (2-3 people)",
    "Medium teams (4-6 people)",
    "Larger groups (7-10 people)",
    "Extended teams (10+ people)",
    "Friend circles and social groups",
    "Professional teams and colleagues",
    "Mixed groups with varied relationships",
    "Custom group configurations",
  ],
  uniqueFeatures: [
    "Horoscope analysis combined with Prashna",
    "Rare intuitive capacity application",
    "Individual fate analysis for each member",
    "Group dynamics and compatibility focus",
    "Flexible group size accommodation",
    "Collective destiny understanding",
    "Interconnected life pattern recognition",
    "Personalized guidance within group context",
  ],
};

export default function GroupHoroscopeReading() {
  return <ServiceDetail service={serviceData} />;
}