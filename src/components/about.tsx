import { Card, CardContent } from "@/components/ui/card";
import {
  Globe,
  Star,
  Users,
  MapPin,
  BookOpen,
  Heart,
  Sparkles,
} from "lucide-react";
import RotatingGanesh from "./rotating-ganesh";

export default function About() {
  return (
    <div className="bg-white">
      {/* Main Content */}
      <section className="py-16" id="about">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                An Astrologer with a{" "}
                <span className="text-orange-500">Difference</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Shri Chittarabhanu K Poduval is known globally as an astrologer
                with a difference and has unique achievements to his credit.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With the blessings of Lord Ganesha and the presiding deity of
                the temple town of Payyanur — known as the world hub of
                astrology — Dr. Poduval is revered as a man of intuition and
                astrological knowledge.
              </p>

              <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg border border-orange-100">
                <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Based in Payyanur
                  </h3>
                  <p className="text-sm text-gray-600">
                    The World Hub of Astrology
                  </p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="relative bg-gradient-to-br p-8 ">
                  {/* Center Symbol */}
                  <div className="relative z-10 text-center">
                    {/* <img src="/ganesh.png" alt="Ganesha" /> */}
                    <RotatingGanesh />
                    <p className="text-muted-foreground text-sm ">
                      Lord Ganesha's Grace
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="border-orange-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Globe className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Global Recognition
                </h3>
                <p className="text-gray-600">
                  Widely popular across the world with followers and seekers in
                  every nation
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Worldwide Clientele
                </h3>
                <p className="text-gray-600">
                  Trusted by clients across the globe and in several districts
                  of India
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Sparkles className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Unique Capabilities
                </h3>
                <p className="text-gray-600">
                  A striking astrologer who possesses capabilities for which no
                  one can be an alternative
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Expertise Section */}
          <section
            className="bg-gradient-to-r from-orange-50 to-white rounded-2xl p-8 md:p-12"
            id="expertise"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Areas of <span className="text-orange-500">Expertise</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                His great revelations with Horoscope Readings, Prashna Shastra,
                and his addon capacity of intuitive blessings are widely known
                and revered.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Horoscope Readings
                </h3>
                <p className="text-gray-600">
                  Detailed and accurate horoscope analysis providing deep
                  insights into your life path
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Prashna Shastra
                </h3>
                <p className="text-gray-600">
                  Ancient Vedic technique of answering specific questions
                  through astrological analysis
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Intuitive Blessings
                </h3>
                <p className="text-gray-600">
                  Divine intuitive guidance and blessings for spiritual growth
                  and life transformation
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
