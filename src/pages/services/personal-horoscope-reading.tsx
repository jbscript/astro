import ServiceDetail from "@/components/service-details";
import { User } from "lucide-react";

const serviceData = {
  id: "personal-horoscope-reading",
  title: "Personal Horoscope Reading",
  description:
    "Get comprehensive insights into your life path, career prospects, health, relationships, and spiritual journey through detailed analysis of your birth chart. Dr. Poduval provides personalized guidance based on planetary positions and their influence on your destiny.",
  icon: User,
  whatsappMessage:
    "Hi Dr. Poduval, I would like to book a Personal Horoscope Reading session.",
  duration: "60-90 minutes",
  price: "₹2,500",
  includes: [
    "Complete birth chart analysis",
    "Life path and destiny reading",
    "Career and financial prospects",
    "Health and wellness guidance",
    "Relationship compatibility insights",
    "Spiritual growth recommendations",
    "Remedial measures and solutions",
    "Written report with predictions",
  ],
  process: [
    "Provide your exact birth details (date, time, place)",
    "Dr. Poduval creates your detailed birth chart",
    "Comprehensive analysis of planetary positions",
    "One-on-one consultation session",
    "Detailed explanation of findings",
    "Personalized remedies and guidance",
    "Written report delivery",
    "Follow-up support for 30 days",
  ],
  benefits: [
    "Clear understanding of your life purpose",
    "Guidance for major life decisions",
    "Career and business direction",
    "Relationship harmony insights",
    "Health and wellness awareness",
    "Spiritual growth acceleration",
    "Obstacle removal strategies",
    "Future planning with confidence",
  ],
  suitableFor: [
    "Individuals seeking life direction",
    "Career transition planning",
    "Relationship guidance seekers",
    "Health concern clarification",
    "Spiritual growth enthusiasts",
    "Major decision makers",
    "Life purpose explorers",
    "Future planning needs",
  ],
};

export default function PersonalHoroscopeReadingPage() {
  return <ServiceDetail service={serviceData} />;
}
