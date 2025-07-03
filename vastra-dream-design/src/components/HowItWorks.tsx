
import { Card } from "@/components/ui/card";
import { Upload, Search, Palette, Shirt, Star, Heart } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Inspiration",
    description: "Share your dream outfit from Pinterest, Instagram, or your gallery",
    color: "from-pink-200 to-pink-300"
  },
  {
    icon: Search,
    title: "Find Your Tailor",
    description: "Browse trusted local tailors and boutiques based on style and location",
    color: "from-purple-200 to-purple-300"
  },
  {
    icon: Palette,
    title: "Customize Details",
    description: "Choose fabrics, colors, measurements, and special modifications",
    color: "from-blue-200 to-blue-300"
  },
  {
    icon: Shirt,
    title: "Get It Made",
    description: "Sit back while your custom outfit is crafted to perfection",
    color: "from-green-200 to-green-300"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            How It <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent animate-gradient-text bg-[length:200%_200%]">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From inspiration to creation in just four simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/70 backdrop-blur-sm">
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 bg-white rounded-full border-4 border-pink-100 flex items-center justify-center shadow-sm">
                  <span className="text-sm font-bold text-gray-600">{index + 1}</span>
                </div>
              </div>
              
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                <step.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
              
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-pink-200 to-transparent"></div>
              )}
            </Card>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center space-x-8 bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-pink-400" />
              <span className="text-gray-700">Loved by 10,000+ customers</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-amber-400" />
              <span className="text-gray-700">4.9/5 average rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
