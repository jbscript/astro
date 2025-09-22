import { Button } from "@/components/ui/button";
import { Calendar, Phone, Award } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="bg-white text-gray-900 overflow-hidden relative"
      id="home"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 border border-orange-500/30 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-orange-500/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-orange-500/25 rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 border border-orange-500/15 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Credentials Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium text-orange-500">
                Certified Astrologer
              </span>
            </div>
            {/* Dr.h.c Shri. Chithrabhanu K Poduval */}
            {/* Main Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span className="text-orange-500">Dr.h.c</span>
              <br />
              <span className="text-gray-900">Shri. Chithrabhanu</span>
              <br />
              <span className="text-orange-500">K Poduval</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light">
              World’s Most Intuitive Astrologer & Spiritual Guide
            </p>

            {/* Description */}
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              With decades of experience in Vedic Astrology, with intuitive
              capabilities, Shri. Chithrabhanu K Poduval is known globally as a
              unique astrologer and as Astrologers Astrologer in curing life
              situation and circumstances. He is carrying incomparable unique
              achievements to his credit like no one , having worldwide client
              base, with his predictions, findings and revelations. With the
              blessings of Lord Ganesha he devotes and the presiding deity of
              Payyanur, Sri Subramanya Swami, he is undoubtedly the leading
              astrologer at Payyanur which is called the world hub of astrology.
              His revelations for his clients with horoscopes prashna shastra
              and added unmatched intuitive capabilities is unmatchable for
              times ahead .
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">18+</div>
                <div className="text-sm text-gray-500">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">1M</div>
                <div className="text-sm text-gray-500">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">100%</div>
                <div className="text-sm text-gray-500">Accuracy Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => {
                  const message =
                    "Hi Dr. Poduval, I would like to book an appoinment.";
                  const phoneNumber = "9526570250"; // Replace with actual WhatsApp number
                  const encodedMessage = encodeURIComponent(message);
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                  window.open(whatsappUrl, "_blank");
                }}
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book a tele consultation
              </Button>

              <a href="tel:+919526570250">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 text-lg cursor-pointer"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  In-person consultation
                </Button>
              </a>
            </div>
          </div>

          {/* Right Content - Mystical Elements */}
          <div className="relative flex justify-center lg:justify-center">
            <div className="relative">
              {/* Main Circle */}
              <div
                className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 flex items-center justify-center relative animate-spin"
                style={{ animation: "spin 20s linear infinite" }}
              >
                <img
                  src="zodiac.png"
                  alt="Astrology Circle"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
