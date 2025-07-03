
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Award, Heart } from "lucide-react";

const tailors = [
  {
    name: "Priya's Boutique",
    location: "Mumbai, Maharashtra",
    rating: 4.9,
    reviews: 156,
    speciality: "Traditional & Bridal Wear",
    image: "from-pink-200 to-pink-300",
    badges: ["Top Rated", "Fast Delivery"]
  },
  {
    name: "Artisan Tailors",
    location: "Delhi, NCR",
    rating: 4.8,
    reviews: 203,
    speciality: "Western & Fusion",
    image: "from-purple-200 to-purple-300",
    badges: ["Expert Fitting", "Plus Size Specialist"]
  },
  {
    name: "Meera's Creations",
    location: "Bangalore, Karnataka",
    rating: 4.9,
    reviews: 189,
    speciality: "Designer Wear",
    image: "from-blue-200 to-blue-300",
    badges: ["Creative Design", "Quality Guarantee"]
  },
  {
    name: "Royal Stitches",
    location: "Jaipur, Rajasthan",
    rating: 4.7,
    reviews: 134,
    speciality: "Ethnic & Festive",
    image: "from-amber-200 to-amber-300",
    badges: ["Heritage Crafts", "Custom Embroidery"]
  }
];

const TailorShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Meet Our <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent animate-gradient-text bg-[length:200%_200%]">Expert Tailors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Handpicked professionals who bring your fashion dreams to life with skill and passion
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {tailors.map((tailor, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/70 backdrop-blur-sm">
              {/* Profile Image */}
              <div className={`h-32 bg-gradient-to-br ${tailor.image} relative`}>
                <div className="absolute top-4 right-4 flex gap-2">
                  {tailor.badges.slice(0, 1).map((badge, i) => (
                    <span key={i} className="bg-white/90 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-full text-gray-700">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6">
                {/* Name & Location */}
                <h3 className="font-bold text-lg text-gray-800 mb-1">{tailor.name}</h3>
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  {tailor.location}
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-amber-400 fill-current" />
                    <span className="font-semibold text-gray-800 ml-1">{tailor.rating}</span>
                  </div>
                  <span className="text-gray-500 text-sm ml-2">({tailor.reviews} reviews)</span>
                </div>
                
                {/* Speciality */}
                <p className="text-sm text-gray-600 mb-4">{tailor.speciality}</p>
                
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {tailor.badges.slice(1).map((badge, i) => (
                    <span key={i} className="bg-purple-100 text-purple-600 text-xs font-medium px-2 py-1 rounded-full">
                      {badge}
                    </span>
                  ))}
                </div>
                
                {/* Action Button */}
                <Button className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white">
                  View Portfolio
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <Card className="inline-block p-8 bg-white/70 backdrop-blur-sm border-2 border-purple-200">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Award className="w-8 h-8 text-purple-500" />
              <h3 className="text-2xl font-bold text-gray-800">Join Our Network</h3>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Are you a tailor or boutique owner? Join Vastra and reach thousands of customers looking for custom outfits
            </p>
            <Button variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50">
              Become a Partner
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TailorShowcase;
