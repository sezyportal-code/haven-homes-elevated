import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { Search, SlidersHorizontal, MapPin, Grid3X3, Map, ChevronDown, Home, DollarSign, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

const rentalProperties = [
  {
    id: "r1",
    image: property2,
    title: "Luxury Downtown Loft",
    price: 4500,
    address: "555 Urban Street, Chicago, IL",
    beds: 2,
    baths: 2,
    sqft: 1800,
    type: "apartment",
    isNew: true,
  },
  {
    id: "r2",
    image: property3,
    title: "Cozy Garden Cottage",
    price: 2800,
    address: "12 Rose Lane, Portland, OR",
    beds: 2,
    baths: 1,
    sqft: 1200,
    type: "cottage",
  },
  {
    id: "r3",
    image: property1,
    title: "Beachfront Condo",
    price: 6500,
    address: "789 Ocean View, Miami, FL",
    beds: 3,
    baths: 2,
    sqft: 2100,
    type: "condo",
    isFeatured: true,
  },
  {
    id: "r4",
    image: property4,
    title: "Mountain View Cabin",
    price: 3200,
    address: "456 Pine Road, Denver, CO",
    beds: 3,
    baths: 2,
    sqft: 1600,
    type: "cabin",
    isNew: true,
  },
  {
    id: "r5",
    image: property5,
    title: "Modern Farmhouse",
    price: 4200,
    address: "890 Country Lane, Austin, TX",
    beds: 4,
    baths: 3,
    sqft: 2800,
    type: "house",
  },
  {
    id: "r6",
    image: property6,
    title: "Spanish Style Villa",
    price: 8500,
    address: "234 Sunset Blvd, Los Angeles, CA",
    beds: 5,
    baths: 4,
    sqft: 3500,
    type: "villa",
    isFeatured: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Rent = () => {
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-haven-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            >
              <Home className="w-4 h-4 text-haven-gold" />
              <span className="text-sm font-medium text-white/90">Find Your Perfect Rental</span>
            </motion.span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-6">
              Premium Rentals
              <span className="block text-haven-gold-light">Tailored to Your Lifestyle</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Discover handpicked rental properties in the most desirable neighborhoods. 
              From cozy apartments to luxury estates.
            </p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-8"
            >
              {[
                { icon: Home, value: "2,500+", label: "Rentals" },
                { icon: DollarSign, value: "$1.5K-$15K", label: "Price Range" },
                { icon: Calendar, value: "Flexible", label: "Lease Terms" },
              ].map((stat, index) => (
                <div key={stat.label} className="flex items-center gap-3 text-white/80">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-white">{stat.value}</p>
                    <p className="text-sm text-white/60">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Search & Filters Bar */}
      <section className="sticky top-20 z-30 bg-card/95 backdrop-blur-xl border-b border-border">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
            <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-secondary">
              <MapPin className="w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by location, neighborhood, or address..."
                className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
              />
              <Search className="w-5 h-5 text-primary cursor-pointer" />
            </div>

            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </Button>

            <div className="flex items-center gap-2 p-1 rounded-xl bg-secondary">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "grid" ? "bg-card shadow-sm text-primary" : "text-muted-foreground"
                }`}
              >
                <Grid3X3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("map")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "map" ? "bg-card shadow-sm text-primary" : "text-muted-foreground"
                }`}
              >
                <Map className="w-5 h-5" />
              </button>
            </div>
          </div>

          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 pt-4 border-t border-border"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {["Monthly Rent", "Beds", "Baths", "Property Type", "Pet Friendly", "Move-in Date"].map((filter) => (
                  <button
                    key={filter}
                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
                  >
                    <span className="text-sm">{filter}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Results */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">{rentalProperties.length}</span> rentals available
            </p>
            <select className="px-4 py-2 rounded-xl bg-secondary border-none text-foreground outline-none cursor-pointer">
              <option>Rent: Low to High</option>
              <option>Rent: High to Low</option>
              <option>Newest First</option>
              <option>Most Popular</option>
            </select>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {rentalProperties.map((property) => (
              <motion.div key={property.id} variants={itemVariants}>
                <PropertyCard {...property} price={property.price} />
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <Button className="btn-secondary">Load More Rentals</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rent;
