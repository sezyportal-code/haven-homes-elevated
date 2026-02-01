import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MapPin, Home, TrendingUp, Users, Star, School, ShieldCheck, Trees, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

const neighborhoods = [
  {
    id: "malibu",
    name: "Malibu",
    location: "Los Angeles County, CA",
    image: property1,
    avgPrice: "$4.2M",
    priceChange: "+8.5%",
    listings: 145,
    walkScore: 42,
    rating: 4.9,
    highlights: ["Beachfront Living", "Celebrity Enclave", "World-Class Surfing"],
    description: "An iconic coastal paradise known for stunning beaches, celebrity estates, and laid-back luxury lifestyle.",
  },
  {
    id: "manhattan",
    name: "Upper East Side",
    location: "Manhattan, NY",
    image: property2,
    avgPrice: "$2.8M",
    priceChange: "+5.2%",
    listings: 312,
    walkScore: 96,
    rating: 4.8,
    highlights: ["Museum Mile", "Central Park", "Top Schools"],
    description: "New York's most prestigious address, home to world-class museums, elegant townhouses, and tree-lined streets.",
  },
  {
    id: "cotswolds",
    name: "The Cotswolds",
    location: "Gloucestershire, UK",
    image: property3,
    avgPrice: "£1.1M",
    priceChange: "+6.8%",
    listings: 89,
    walkScore: 35,
    rating: 4.9,
    highlights: ["Historic Villages", "Rolling Hills", "Country Estates"],
    description: "Quintessential English countryside with honey-colored stone cottages, historic market towns, and pastoral landscapes.",
  },
  {
    id: "aspen",
    name: "Aspen",
    location: "Pitkin County, CO",
    image: property4,
    avgPrice: "$5.8M",
    priceChange: "+12.3%",
    listings: 78,
    walkScore: 56,
    rating: 4.9,
    highlights: ["World-Class Skiing", "Mountain Views", "Luxury Retreats"],
    description: "The crown jewel of mountain living, offering unparalleled skiing, outdoor adventures, and sophisticated alpine culture.",
  },
  {
    id: "nashville",
    name: "East Nashville",
    location: "Davidson County, TN",
    image: property5,
    avgPrice: "$650K",
    priceChange: "+9.1%",
    listings: 234,
    walkScore: 72,
    rating: 4.7,
    highlights: ["Music Scene", "Artsy Vibes", "Farm-to-Table"],
    description: "A vibrant, creative hub with indie coffee shops, live music venues, and a thriving arts community.",
  },
  {
    id: "santabarbara",
    name: "Santa Barbara",
    location: "Santa Barbara County, CA",
    image: property6,
    avgPrice: "$2.4M",
    priceChange: "+7.4%",
    listings: 167,
    walkScore: 65,
    rating: 4.8,
    highlights: ["Spanish Architecture", "Wine Country", "Beach Town"],
    description: "The American Riviera combines Mediterranean climate, stunning architecture, and wine country sophistication.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Neighborhoods = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-haven-warm">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Explore Communities</span>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground mb-6">
              Discover Your Ideal
              <span className="text-gradient-emerald"> Neighborhood</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore detailed guides for the most sought-after neighborhoods. 
              Get insights on schools, safety, lifestyle, and market trends.
            </p>
          </motion.div>

          {/* Quick Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {["All Areas", "Beachfront", "Urban", "Mountain", "Suburban", "Countryside"].map((filter, index) => (
              <button
                key={filter}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-foreground hover:bg-secondary"
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Neighborhoods Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {neighborhoods.map((neighborhood) => (
              <motion.div
                key={neighborhood.id}
                variants={itemVariants}
                className="group bg-card rounded-2xl overflow-hidden shadow-haven-md hover:shadow-haven-xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={neighborhood.image}
                    alt={neighborhood.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                        <Star className="w-3 h-3 fill-haven-gold text-haven-gold" />
                        <span className="text-xs font-medium text-white">{neighborhood.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-haven-gold/80">
                        <TrendingUp className="w-3 h-3 text-haven-charcoal" />
                        <span className="text-xs font-semibold text-haven-charcoal">{neighborhood.priceChange}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-serif font-medium text-white mb-1">
                      {neighborhood.name}
                    </h3>
                    <p className="text-sm text-white/80">{neighborhood.location}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {neighborhood.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-border">
                    <div className="text-center">
                      <p className="text-lg font-bold text-foreground font-serif">{neighborhood.avgPrice}</p>
                      <p className="text-xs text-muted-foreground">Avg. Price</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-foreground font-serif">{neighborhood.listings}</p>
                      <p className="text-xs text-muted-foreground">Listings</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-foreground font-serif">{neighborhood.walkScore}</p>
                      <p className="text-xs text-muted-foreground">Walk Score</p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {neighborhood.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-foreground"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Action */}
                  <Link to={`/neighborhood/${neighborhood.id}`}>
                    <Button className="w-full btn-secondary group/btn">
                      Explore Neighborhood
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-4">
              What's Included in Every Guide
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: School, label: "School Ratings" },
              { icon: ShieldCheck, label: "Safety Scores" },
              { icon: Trees, label: "Parks & Recreation" },
              { icon: TrendingUp, label: "Market Trends" },
              { icon: Home, label: "Housing Types" },
              { icon: Users, label: "Demographics" },
              { icon: MapPin, label: "Local Amenities" },
              { icon: Star, label: "Resident Reviews" },
            ].map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col items-center p-6 rounded-2xl bg-card"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground text-center">{feature.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Neighborhoods;
