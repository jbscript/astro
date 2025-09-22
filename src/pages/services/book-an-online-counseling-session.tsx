import ServiceDetail from "@/components/service-details";
import { Users } from "lucide-react";

const serviceData = {
  id: "family-astrological-counseling",
  title: "Private Family Astrological Counseling",
  description:
    "Dr. Chithrabhanu K Poduval offers specialized private astrological counseling sessions to help family members transform their mindset and behavior. Through detailed birth chart analysis and karmic pattern identification, he provides powerful guidance to influence positive changes in family relationships, encourage proper conduct, and offer life-changing advice to resolve family conflicts and behavioral issues.",
  icon: Users,
  whatsappMessage:
    "Hi Dr. Poduval, I would like to book a private astrological counseling session for family member guidance and behavior transformation.",
  duration: "60-90 minutes",
  price: "₹2,000 - ₹4,000",
  includes: [
    "Birth chart analysis of family member",
    "Karmic pattern identification",
    "Behavioral transformation guidance",
    "Mind influence techniques",
    "Family harmony solutions",
    "Personalized remedial measures",
    "Private and confidential consultation",
    "Follow-up support and guidance",
  ],
  process: [
    "Provide birth details of the family member",
    "Share specific behavioral concerns or issues",
    "Dr. Poduval analyzes birth chart and karma",
    "Identification of haunting karmic patterns",
    "Customized influence and guidance strategies",
    "Remedial measures and solutions provided",
    "Private counseling session conducted",
    "Ongoing support for implementation",
  ],
  benefits: [
    "Positive behavioral transformation",
    "Improved family relationships",
    "Enhanced communication and understanding",
    "Karmic healing and resolution",
    "Peaceful family environment",
    "Effective mind influence techniques",
    "Confidential and private guidance",
    "Long-term family harmony",
  ],
  suitableFor: [
    "Parents dealing with difficult children",
    "Spouses seeking partner transformation",
    "Siblings with relationship issues",
    "Family members with behavioral problems",
    "Those seeking family harmony",
    "Individuals wanting to influence loved ones positively",
    "Family conflict resolution needs",
    "Private counseling requirements",
  ],
  specialFeatures: [
    "Birth chart based behavioral analysis",
    "Karmic pattern identification",
    "Mind influence astrological techniques",
    "Family dynamics understanding",
    "Confidential private sessions",
    "Customized transformation strategies",
    "Haunting karma resolution",
    "Effective family counseling approach",
  ],
};

export default function FamilyAstrologicalCounseling() {
  return <ServiceDetail service={serviceData} />;
}