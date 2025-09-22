import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Main Contact Section */}
      <section className="py-16 bg-gray-50" id="contact">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              {/* Google Map */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=ASTROLOGER Dr.h.c Shri. Chithrabhanu K Poduval, Chithrayogam, Surya Junction, near Bypass, Payyanur, Kerala 670307&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dr. Poduval's Location in Payyanur, Kerala"
                ></iframe>
              </div>

              <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-100">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Getting Here
                </h4>
                <p className="text-gray-600 text-sm">
                  Payyanur is well-connected by road and rail. The nearest
                  airport is Kannur (57km) or Mangalore (114km) and the nearest
                  railway station is payyanur (3km). Local transportation is
                  readily available from the railway station and bus stand.
                </p>
              </div>
            </div>

            {/* Address & Map */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Visit Our Location
              </h2>

              {/* Address Details */}
              <Card className="mb-8 border-orange-100">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <MapPin className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Dr. Poduval's Astrology Center
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Near Bypass Road Payyanur,
                        <br />
                        Kurnji Road, Surya Junction,
                        <br />
                        Kannur District Kerala, India - 670307
                      </p>
                    </div>
                  </div>

                  <div className="border-t pt-4 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 text-orange-500" />
                      <span className="text-sm font-medium text-gray-700">
                        Landmark:
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Located in the sacred town of Payyanur, renowned globally
                      as the world hub of astrology, blessed by the divine
                      presence of Lord Ganesha and ancient temple traditions.
                    </p>
                  </div>
                  <div className="border-t pt-4 flex items-start gap-4 mb-6">
                    <MapPin className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Astro Poduval
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Lajpat Nagar New Delhi
                      </p>
                    </div>
                  </div>
                  <div className="border-t pt-4 flex items-start gap-4 mb-6">
                    <MapPin className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Astro Poduval
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Yelahanka New Town, Bengaluru
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
