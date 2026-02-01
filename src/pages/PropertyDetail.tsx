import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  MapPin, Bed, Bath, Square, Heart, Share2, Calendar, 
  Phone, Mail, CheckCircle2, Home, Car, Trees, Waves,
  ArrowLeft, ArrowRight, Play
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const propertyData = {
  id: "1",
  title: "Mediterranean Beachfront Villa",
  price: 4850000,
  address: "123 Ocean Drive, Malibu, CA 90265",
  description: `Experience the epitome of coastal luxury living in this stunning Mediterranean-style beachfront villa. Nestled along the pristine shores of Malibu, this architectural masterpiece offers unparalleled ocean views and direct beach access.

The main residence features soaring ceilings, walls of glass that frame the Pacific Ocean, and an open floor plan designed for both grand entertaining and intimate family gatherings. The gourmet kitchen is equipped with top-of-the-line appliances, custom cabinetry, and a center island perfect for casual dining.

The primary suite is a true retreat, offering a private terrace, spa-like bathroom with ocean views, and generous walk-in closets. Four additional bedroom suites provide ample space for family and guests, each thoughtfully designed with comfort in mind.`,
  beds: 5,
  baths: 4,
  sqft: 4500,
  yearBuilt: 2019,
  lotSize: "0.75 acres",
  type: "Single Family",
  images: [property1, property2, property3, property1, property2],
  features: [
    "Ocean Views",
    "Private Beach Access",
    "Infinity Pool",
    "Home Theater",
    "Wine Cellar",
    "Smart Home System",
    "Heated Floors",
    "Solar Panels",
    "EV Charging",
    "Security System",
  ],
  agent: {
    name: "Victoria Sterling",
    title: "Luxury Property Specialist",
    phone: "(555) 234-5678",
    email: "victoria@havenhomes.com",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
  },
};

const PropertyDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % propertyData.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? propertyData.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Image Gallery */}
      <section className="pt-20">
        <div className="relative h-[60vh] md:h-[70vh]">
          <motion.img
            key={currentImageIndex}
            src={propertyData.images[currentImageIndex]}
            alt={propertyData.title}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Virtual Tour Button */}
          <button className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-white/90 backdrop-blur-sm flex items-center gap-2 hover:bg-white transition-colors">
            <Play className="w-5 h-5 text-primary" />
            <span className="font-medium">Virtual Tour</span>
          </button>

          {/* Image Dots */}
          <div className="absolute bottom-6 right-6 flex gap-2">
            {propertyData.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentImageIndex 
                    ? "bg-white w-8" 
                    : "bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="absolute top-24 right-6 flex gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsLiked(!isLiked)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                isLiked 
                  ? "bg-destructive text-white" 
                  : "bg-white/90 text-foreground hover:bg-white"
              }`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
            </motion.button>
            <button className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Property Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="badge-premium">Featured</span>
                  <span className="badge-new">New Listing</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-3">
                  {propertyData.title}
                </h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-5 h-5" />
                  <span>{propertyData.address}</span>
                </div>
              </motion.div>

              {/* Price & Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-border"
              >
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Price</p>
                  <p className="text-3xl font-bold text-foreground font-serif">
                    {formatPrice(propertyData.price)}
                  </p>
                </div>
                <div className="h-12 w-px bg-border" />
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Bed className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">{propertyData.beds}</p>
                      <p className="text-xs text-muted-foreground">Beds</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">{propertyData.baths}</p>
                      <p className="text-xs text-muted-foreground">Baths</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">{propertyData.sqft.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">Sq Ft</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-serif font-medium text-foreground mb-4">
                  About This Property
                </h2>
                <div className="prose prose-lg text-muted-foreground whitespace-pre-line">
                  {propertyData.description}
                </div>
              </motion.div>

              {/* Property Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-serif font-medium text-foreground mb-4">
                  Property Details
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: Home, label: "Type", value: propertyData.type },
                    { icon: Calendar, label: "Year Built", value: propertyData.yearBuilt },
                    { icon: Trees, label: "Lot Size", value: propertyData.lotSize },
                    { icon: Car, label: "Garage", value: "3 Cars" },
                  ].map((detail) => (
                    <div key={detail.label} className="p-4 rounded-xl bg-secondary">
                      <detail.icon className="w-5 h-5 text-primary mb-2" />
                      <p className="text-sm text-muted-foreground">{detail.label}</p>
                      <p className="font-semibold text-foreground">{detail.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-2xl font-serif font-medium text-foreground mb-4">
                  Features & Amenities
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {propertyData.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                {/* Agent Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="p-6 rounded-2xl bg-card shadow-haven-lg mb-6"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={propertyData.agent.image}
                      alt={propertyData.agent.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-foreground">{propertyData.agent.name}</h3>
                      <p className="text-sm text-muted-foreground">{propertyData.agent.title}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <a
                      href={`tel:${propertyData.agent.phone}`}
                      className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{propertyData.agent.phone}</span>
                    </a>
                    <a
                      href={`mailto:${propertyData.agent.email}`}
                      className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{propertyData.agent.email}</span>
                    </a>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full btn-primary">
                      Schedule a Tour
                    </Button>
                    <Button className="w-full btn-secondary">
                      Request Info
                    </Button>
                  </div>
                </motion.div>

                {/* Mortgage Calculator Preview */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="p-6 rounded-2xl bg-secondary"
                >
                  <h3 className="font-semibold text-foreground mb-4">Estimated Monthly Payment</h3>
                  <p className="text-3xl font-bold text-foreground font-serif mb-2">$22,450</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Based on 20% down, 30-year fixed at 6.5% APR
                  </p>
                  <Button variant="outline" className="w-full">
                    View Full Calculator
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
