import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  User,
  Users,
  UsersRound,
  Building2,
  Home,
  Search,
  Package,
  Heart,
  Flame,
  ScrollText,
  Video,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    title: "Personal Horoscope Reading",
    description:
      "Get comprehensive insights into your life path, career prospects, health, relationships, and spiritual journey through detailed analysis of your birth chart. Dr. Poduval provides personalized guidance based on planetary positions and their influence on your destiny.",
    icon: User,
    whatsappMessage:
      "Hi Dr. Poduval, I would like to book a Personal Horoscope Reading session.",
    link: "/personal-horoscope-reading",
  },
  {
    title: "Family Horoscope Reading",
    description:
      "Understand the collective karma and destiny of your entire family unit. This comprehensive reading covers family dynamics, generational patterns, prosperity prospects, and guidance for maintaining harmony and growth within the family structure.",
    icon: Home,
    whatsappMessage:
      "Hi Dr. Poduval, I would like to book a Family Horoscope Reading session.",
    link: "/family-horoscope-reading",
  },
  {
    title: "Group Horoscope Consultation",
    description:
      "Perfect for business partnerships, friend circles, or community groups seeking collective guidance. This session analyzes the compatibility and combined energy of multiple individuals to provide insights for successful collaboration and mutual growth.",
    icon: UsersRound,
    link: "/group-horoscope-reading",
    whatsappMessage:
      "Hi Dr. Poduval, I would like to book a Group Horoscope Consultation session.",
  },
  {
    title: "Ashtamangala Temple Prashna",
    description:
      "Experiance the sacred ancient practice of Prashna and Ashtamangala prashna to rectify a temple or your place of worship. The divine consultation method provides precise answers to your specific questions through traditional Vedic techniques blessed by temple deities.",
    icon: Building2,
    link: "/ashamanjaka-temple-prashna",
    whatsappMessage:
      "Hi Dr. Poduval, I would like to book an Ashtamangala Temple Prashna session.",
  },
  {
    title: "Ashtamangala Kutumba Prashna",
    description:
      "A specialized family-oriented Prashna consultation that addresses family-specific concerns, ancestral influences, and generational blessings. This sacred practice helps resolve family disputes and brings prosperity to the entire lineage.",
    icon: Users,
    link: "/ashamanjaka-kutumba-prashna",
    whatsappMessage:
      "Hi Dr. Poduval, I would like to book an Ashtamangala Kutumba Prashna session.",
  },
  {
    title: "Find Your Kuladeivatha",
    description:
      "Discover your ancestral family deity and establish a divine connection that has been guiding your lineage for generations. This spiritual consultation helps you understand your family's divine protector and the proper methods of worship and reverence.",
    icon: Search,
    link: "/find-your-kuladeivatha",
    whatsappMessage:
      "Hi Dr. Poduval, I would like to find my Kuladeivatha through your guidance.",
  },
  {
    title: "Find Back Your Lost Materials or Valuables",
    description:
      "Through advanced astrological techniques and intuitive guidance, Dr. Poduval helps locate lost items, missing documents, or valuable possessions. This unique service combines Prashna Shastra with divine intuition to provide direction and hope.",
    icon: Package,
    link: "/find-back-your-lost-materials-valuables",
    whatsappMessage:
      "Hi Dr. Poduval, I need help finding my lost materials/valuables through astrology.",
  },
  {
    title: "Find Horoscope Match for Marriage",
    description:
      "Ensure marital harmony and compatibility through comprehensive horoscope matching. This detailed analysis covers Guna Milan, Mangal Dosha, planetary compatibility, and provides guidance for a prosperous and harmonious married life based on Vedic principles.",
    icon: Heart,
    link: "/find-horoscope-match-for-marriage",
    whatsappMessage:
      "Hi Dr. Poduval, I would like horoscope matching for marriage consultation.",
  },
  {
    title: "Perform Unique Homas / Homams",
    description:
      "Participate in powerful Vedic fire rituals designed to remove obstacles, attract prosperity, and invoke divine blessings. These sacred ceremonies are customized based on your specific needs and planetary positions for maximum spiritual benefit.",
    icon: Flame,
    link: "/perform-unique-homas-homams",
    whatsappMessage:
      "Hi Dr. Poduval, I would like to arrange for unique Homas/Homams ceremony.",
  },
  {
    title: "Buy Rare Unique Handwritten Yantras",
    description:
      "Acquire authentic, personally handwritten Yantras by Dr. Poduval, each crafted with specific mantras and blessed for individual needs. These powerful geometric symbols serve as spiritual tools for meditation, protection, and attracting positive energies.",
    icon: ScrollText,
    link: "/buy-rare-unique-handwritten-yantras",
    whatsappMessage:
      "Hi Dr. Poduval, I am interested in purchasing rare handwritten Yantras.",
  },
  {
    title: "Book an Online Counseling Session",
    description:
      "Connect with Dr. Poduval from anywhere in the world through secure online consultations. These virtual sessions provide the same depth of astrological guidance and spiritual counseling as in-person meetings, making wisdom accessible globally.",
    icon: Video,
    link: "/book-an-online-counseling-session",
    whatsappMessage:
      "Hi Dr. Poduval, I would like to book an online counseling session.",
  },
];
// const handleWhatsAppClick = (message: string) => {
//   const phoneNumber = "9526570250"; // Replace with actual WhatsApp number
//   const encodedMessage = encodeURIComponent(message);
//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
//   window.open(whatsappUrl, "_blank");
// };

export default function Services() {
  return (
    <section className="bg-white py-16 md:py-24" id="services">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-2 mb-6">
            <MessageCircle className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-orange-500">
              Professional Astrology Services
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-orange-500">Services</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover authentic Vedic astrology services by Dr. Shri
            Chittarabhanu K Poduval. Click on any service to connect directly
            via WhatsApp.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link to={service?.link ?? ""}>
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-orange-100 hover:border-orange-300 hover:-translate-y-2 relative overflow-hidden py-0"
                  // onClick={() => handleWhatsAppClick(service.whatsappMessage)}
                >
                  <CardContent className="p-6 text-center h-full flex flex-col relative">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                      {service.description}
                    </p>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-green-500/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-center text-white">
                        <MessageCircle className="w-12 h-12 mx-auto mb-3" />
                        <h4 className="text-xl font-bold mb-2">
                          Connect via WhatsApp
                        </h4>
                        <p className="text-green-100">
                          Click to start consultation
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
