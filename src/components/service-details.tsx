import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  CheckCircle,
  Star,
  MessageCircle,
  Phone,
  Users,
  Globe,
  Award,
} from "lucide-react";
import { useEffect } from "react";

interface ServiceDetailProps {
  service: {
    id: string;
    title: string;
    description: string;
    icon: any;
    whatsappMessage: string;
    duration: string;
    price: string;
    includes: string[];
    process: string[];
    benefits: string[];
    suitableFor: string[];
  };
}

const handleWhatsAppClick = (message: string) => {
  const phoneNumber = "9526570250"; // Replace with actual WhatsApp number
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
};

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const IconComponent = service.icon;
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <IconComponent className="w-10 h-10 text-white" />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {service.title}
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Quick Info */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm border-orange-200 text-orange-600"
                >
                  <Clock className="w-4 h-4 mr-2" />
                  {service.duration}
                </Badge>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3"
                  onClick={() => handleWhatsAppClick(service.whatsappMessage)}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Book via WhatsApp
                </Button>
                <a href="tel:+919526570250">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 bg-transparent"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* What's Included */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What's Included
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.includes.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Process
                </h2>
                <div className="space-y-4">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Key Benefits
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, index) => (
                    <Card key={index} className="border-orange-100">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <Star className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Booking Card */}
              <Card className="border-orange-200 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Book This Service
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">{service.duration}</span>
                    </div>

                    <div className="border-t pt-4">
                      <Button
                        className="w-full bg-green-500 hover:bg-green-600 text-white mb-3"
                        onClick={() =>
                          handleWhatsAppClick(service.whatsappMessage)
                        }
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Book via WhatsApp
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent"
                        onClick={() =>
                          handleWhatsAppClick(
                            `Hi Dr. Poduval, I would like to call about ${service.title}.`
                          )
                        }
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call to Book
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Suitable For */}
              <Card className="border-orange-100">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Perfect For
                  </h3>
                  <div className="space-y-3">
                    {service.suitableFor.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Users className="w-4 h-4 text-orange-500" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Trust Indicators */}
              <Card className="border-orange-100 bg-gradient-to-br from-orange-50 to-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Why Choose Dr. Poduval
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Award className="w-4 h-4 text-orange-500" />
                      <span className="text-gray-700 text-sm">
                        25+ Years Experience
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-4 h-4 text-orange-500" />
                      <span className="text-gray-700 text-sm">
                        Global Recognition
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-4 h-4 text-orange-500" />
                      <span className="text-gray-700 text-sm">
                        95% Accuracy Rate
                      </span>
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
