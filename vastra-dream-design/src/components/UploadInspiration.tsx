
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Instagram, Image, Sparkles } from "lucide-react";

const UploadInspiration = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Upload Your Dream
            <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent animate-gradient-text bg-[length:200%_200%]"> Inspiration</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From Pinterest boards to Instagram saves - bring your fashion inspiration to life with our AI-powered design matching
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Upload Interface */}
          <div className="space-y-6">
            <Card className="p-8 border-2 border-dashed border-pink-200 hover:border-pink-300 transition-all duration-300 bg-gradient-to-br from-pink-50/50 to-purple-50/50 backdrop-blur-sm">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-300 to-purple-300 rounded-2xl flex items-center justify-center mx-auto">
                  <Upload className="w-8 h-8 text-white" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Drop Your Inspiration Here</h3>
                  <p className="text-gray-600">Upload images from Pinterest, Instagram, or your gallery</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button className="bg-gradient-to-r from-pink-300 to-purple-300 hover:from-pink-400 hover:to-purple-400 text-white">
                    <Image className="w-4 h-4 mr-2" />
                    Browse Files
                  </Button>
                  <Button variant="outline" className="border-pink-300 text-pink-600 hover:bg-pink-50/50">
                    <Instagram className="w-4 h-4 mr-2" />
                    From Instagram
                  </Button>
                </div>
              </div>
            </Card>
            
            {/* Quick Upload Options */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="p-4 text-center hover:shadow-lg transition-all duration-300 cursor-pointer group bg-white/70 backdrop-blur-sm">
                <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-pink-200 transition-colors">
                  <Instagram className="w-4 h-4 text-pink-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">Instagram</p>
              </Card>
              
              <Card className="p-4 text-center hover:shadow-lg transition-all duration-300 cursor-pointer group bg-white/70 backdrop-blur-sm">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-red-200 transition-colors">
                  <div className="w-4 h-4 bg-red-500 rounded-sm"></div>
                </div>
                <p className="text-sm font-medium text-gray-700">Pinterest</p>
              </Card>
              
              <Card className="p-4 text-center hover:shadow-lg transition-all duration-300 cursor-pointer group bg-white/70 backdrop-blur-sm">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-blue-200 transition-colors">
                  <Image className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">Gallery</p>
              </Card>
            </div>
          </div>
          
          {/* Preview Section */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-50/70 to-pink-50/70 rounded-3xl p-8 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <Sparkles className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">AI Design Analysis</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white/70 rounded-xl backdrop-blur-sm">
                  <span className="text-gray-700">Dress Style</span>
                  <span className="font-semibold text-purple-500">A-Line Maxi</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-white/70 rounded-xl backdrop-blur-sm">
                  <span className="text-gray-700">Fabric Suggestion</span>
                  <span className="font-semibold text-purple-500">Chiffon</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-white/70 rounded-xl backdrop-blur-sm">
                  <span className="text-gray-700">Color Palette</span>
                  <div className="flex gap-2">
                    <div className="w-6 h-6 bg-pink-300 rounded-full"></div>
                    <div className="w-6 h-6 bg-purple-300 rounded-full"></div>
                    <div className="w-6 h-6 bg-blue-300 rounded-full"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-white/70 rounded-xl backdrop-blur-sm">
                  <span className="text-gray-700">Estimated Price</span>
                  <span className="font-semibold text-green-500">₹2,500 - ₹4,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadInspiration;
