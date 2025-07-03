
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Ananya Sharma",
    location: "Mumbai",
    image: "from-pink-200 to-pink-300",
    rating: 5,
    text: "I found the perfect lehenga design on Pinterest and Vastra made it happen! The fit was absolutely perfect and the quality exceeded my expectations.",
    outfit: "Wedding Lehenga"
  },
  {
    name: "Kavya Patel",
    location: "Ahmedabad",
    image: "from-purple-200 to-purple-300",
    rating: 5,
    text: "As a plus-size woman, finding well-fitted clothes was always a struggle. Vastra connected me with an amazing tailor who understood my needs perfectly.",
    outfit: "Party Dress"
  },
  {
    name: "Rhea Kapoor",
    location: "Delhi",
    image: "from-blue-200 to-blue-300",
    rating: 5,
    text: "The customization options are incredible! I uploaded an Instagram photo and got the exact outfit in my favorite colors. Highly recommend!",
    outfit: "Indo-Western Suit"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-green-50 to-teal-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            What Our <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent animate-gradient-text bg-[length:200%_200%]">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from women who turned their fashion dreams into reality
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/70 backdrop-blur-sm relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-12 h-12 text-purple-600" />
              </div>
              
              {/* Profile */}
              <div className="flex items-center mb-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${testimonial.image} rounded-full mr-4`}></div>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>
              
              {/* Testimonial */}
              <p className="text-gray-600 leading-relaxed mb-4 italic">"{testimonial.text}"</p>
              
              {/* Outfit Tag */}
              <div className="inline-block bg-purple-100 text-purple-600 text-xs font-medium px-3 py-1 rounded-full">
                {testimonial.outfit}
              </div>
            </Card>
          ))}
        </div>
        
        {/* Footer CTA */}
        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Create Your Dream Outfit?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of happy customers who found their perfect fit with Vastra
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold">
              Upload Your Inspiration
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full text-lg font-semibold">
              Browse Tailors
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-8 mt-8 text-sm opacity-75">
            <span>✓ 10,000+ Happy Customers</span>
            <span>✓ 500+ Expert Tailors</span>
            <span>✓ Perfect Fit Guaranteed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
