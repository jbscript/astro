import ServiceDetail from "@/components/service-details";
import { Flame } from "lucide-react";

const serviceData = {
  id: "vedic-homa-ceremonies",
  title: "Vedic Homa Ceremonies & Sacred Fire Rituals",
  description:
    "Astrologer Chithrabhanu K Poduval has initiated the highest number of Homaas and Hawans in the world. His unique Homaas carry the greatest expert Tantrikas and Karmis from Kerala across the country and globally. These powerful sacred fire rituals are designed to rectify life challenges and bring spiritual transformation. The ceremonies can be performed at your own residence with complete traditional authenticity.",
  icon: Flame,
  whatsappMessage:
    "Hi Dr. Poduval, I would like to book a Vedic Homa ceremony for spiritual transformation and life rectification.",
  duration: "2-8 hours (varies by Homa type)",
  price: "₹5,000 - ₹50,000 (depends on ceremony)",
  includes: [
    "Expert Tantrikas and Karmis from Kerala",
    "Complete traditional ceremony setup",
    "Sacred fire ritual materials",
    "Vedic chanting and mantras",
    "Personalized spiritual guidance",
    "Home/residence ceremony option",
    "Post-ceremony blessings",
    "Spiritual transformation support",
  ],
  process: [
    "Consultation to select appropriate Homa",
    "Astrological timing and muhurat selection",
    "Ceremony preparation and material arrangement",
    "Expert Tantrikas and Karmis coordination",
    "Traditional sacred fire ritual performance",
    "Vedic chanting and mantra recitation",
    "Personal blessings and spiritual guidance",
    "Post-ceremony follow-up and support",
  ],
  benefits: [
    "Life rectification and transformation",
    "Spiritual purification and healing",
    "Removal of obstacles and negativity",
    "Enhanced prosperity and well-being",
    "Protection from evil forces",
    "Karmic cleansing and resolution",
    "Family harmony and peace",
    "Global expertise and authenticity",
  ],
  suitableFor: [
    "Individuals seeking spiritual transformation",
    "Families wanting divine protection",
    "Those facing life challenges",
    "Spiritual purification seekers",
    "Obstacle removal requirements",
    "Prosperity and success enhancement",
    "Traditional ceremony enthusiasts",
    "Global clients seeking authentic rituals",
  ],
  availableHomas: [
    "Aghora Homa",
    "MahaSudarshana Homa",
    "Sathyanarayana Homa",
    "Ashtakalasha Chandi Homa",
    "Vaarahi Baglamukhi Homa",
    "Prathyankara Homa",
    "ShatruSamharam Homa",
    "Ashtadhravya Ganapati Homa",
    "SanthanaGopala Homa",
    "Shoolini Bhuvaraha Homa",
    "Dhoomawati Homa",
    "Chandika Homa",
    "Sarpa Dosha Nivaarana Homa",
    "Naagara Oota Homa",
    "Dhanwanthari Homa",
    "Uddhishta Siddhi Homa",
  ],
  uniqueFeatures: [
    "Highest number of Homaas initiated worldwide",
    "Expert Tantrikas and Karmis from Kerala",
    "Global reach and authentic ceremonies",
    "Home/residence ceremony options",
    "Traditional Kerala expertise",
    "Personalized spiritual guidance",
    "Complete life rectification approach",
    "Authentic Vedic fire rituals",
  ],
};

export default function VedicHomaCeremonies() {
  return <ServiceDetail service={serviceData} />;
}