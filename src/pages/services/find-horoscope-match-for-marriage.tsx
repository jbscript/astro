import ServiceDetail from "@/components/service-details";
import { Heart } from "lucide-react";

const serviceData = {
  id: "marriage-matchmaking-service",
  title: "Marriage Matchmaking & Compatibility Analysis",
  description:
    "Shri Chithrabhanu K Poduval offers comprehensive marriage matchmaking services that go beyond traditional compatibility. His expertise lies in deeply analyzing character, behavior, mindset, thoughts, priorities, fate, health, and future prospects of potential partners. This holistic approach ensures not just astrological compatibility but also psychological and spiritual harmony for a successful marriage.",
  icon: Heart,
  whatsappMessage:
    "Hi Dr. Poduval, I would like to book a marriage matchmaking session to find a suitable life partner.",
  duration: "90-120 minutes",
  price: "₹3,000 - ₹5,000",
  includes: [
    "Complete horoscope compatibility analysis",
    "Character and behavior assessment",
    "Mindset and thought pattern evaluation",
    "Priority and life goal alignment check",
    "Fate and destiny compatibility",
    "Health and wellness prospects",
    "Future life prospects analysis",
    "Detailed written compatibility report",
  ],
  process: [
    "Provide birth details of both individuals",
    "Dr. Poduval creates detailed birth charts",
    "Comprehensive astrological compatibility analysis",
    "Character and behavioral pattern study",
    "Mindset and priority alignment assessment",
    "Health and fate compatibility evaluation",
    "Future prospects and life path analysis",
    "Detailed consultation and guidance session",
  ],
  benefits: [
    "Deep understanding of partner compatibility",
    "Character and behavior insights",
    "Mindset and priority alignment",
    "Health and wellness compatibility",
    "Future life prospects clarity",
    "Psychological harmony assessment",
    "Spiritual connection evaluation",
    "Informed decision making for marriage",
  ],
  suitableFor: [
    "Individuals seeking life partners",
    "Families planning arranged marriages",
    "Couples wanting compatibility verification",
    "Parents seeking suitable matches",
    "Those prioritizing character assessment",
    "Individuals valuing holistic compatibility",
    "Marriage-ready singles",
    "Anyone seeking deep partner analysis",
  ],
  uniqueFeatures: [
    "Beyond traditional horoscope matching",
    "Character and behavior deep analysis",
    "Mindset and thought pattern evaluation",
    "Life priorities alignment check",
    "Fate and destiny compatibility",
    "Health prospects assessment",
    "Future life path analysis",
    "Comprehensive psychological profiling",
  ],
};

export default function MarriageMatchmakingService() {
  return <ServiceDetail service={serviceData} />;
}