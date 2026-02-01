import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { Search, SlidersHorizontal, MapPin, Grid3X3, Map, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

const allProperties = [
  {
    id: "1",
    image: property1,
    title: "Mediterranean Beachfront Villa",
    price: 4850000,
    address: "123 Ocean Drive, Malibu, CA",
    beds: 5,
    baths: 4,
    sqft: 4500,
    type: "villa",
    isNew: true,
    isFeatured: true,
  },
  {
    id: "2",
    image: property2,
    title: "Manhattan Luxury Penthouse",
    price: 8900000,
    address: "432 Park Avenue, New York, NY",
    beds: 4,
    baths: 3,
    sqft: 3200,
    type: "penthouse",
    isFeatured: true,
  },
  {
    id: "3",
    image: property3,
    title: "English Country Cottage",
    price: 1250000,
    address: "7 Rose Lane, Cotswolds, UK",
    beds: 3,
    baths: 2,
    sqft: 2100,
    type: "cottage",
    isNew: true,
  },
  {
    id: "4",
    image: property4,
    title: "Mountain Lake Retreat",
    price: 2750000,
    address: "456 Alpine Way, Aspen, CO",
    beds: 4,
    baths: 3,
    sqft: 3800,
    type: "cabin",
  },
  {
    id: "5",
    image: property5,
    title: "Modern Farmhouse Estate",
    price: 1950000,
    address: "890 Meadow Road, Nashville, TN",
    beds: 5,
    baths: 4,
    sqft: 4200,
    type: "farmhouse",
    isFeatured: true,
  },
  {
    id: "6",
    image: property6,
    title: "Spanish Revival Estate",
    price: 3450000,
    address: "234 Hacienda Blvd, Santa Barbara, CA",
    beds: 6,
    baths: 5,
    sqft: 5100,
    type: "estate",
    isNew: true,
  },
  {
    id: "7",
    image: property1,
    title: "Oceanview Paradise",
    price: 3200000,
    address: "789 Seaside Lane, San Diego, CA",
    beds: 4,
    baths: 3,
    sqft: 3600,
    type: "villa",
  },
  {
    id: "8",
    image: property2,
    title: "Downtown Loft",
    price: 1850000,
    address: "555 Urban Street, Chicago, IL",
    beds: 2,
    baths: 2,
    sqft: 1800,
    type: "loft",
    isNew: true,
  },
  {
    id: "9",
    image: property3,
    title: "Victorian Charmer",
    price: 975000,
    address: "12 Heritage Ave, San Francisco, CA",
    beds: 4,
    baths: 3,
    sqft: 2800,
    type: "house",
  },
];

const Listings = () => {
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="pt-28 pb-8 bg-haven-warm">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-4">
              Explore Properties
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover your perfect home from our curated collection of premium properties
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filters Bar */}
      <section className="sticky top-20 z-30 bg-card/95 backdrop-blur-xl border-b border-border">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
            {/* Search Input */}
            <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-secondary">
              <MapPin className="w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by location, neighborhood, or address..."
                className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
              />
              <Search className="w-5 h-5 text-primary cursor-pointer" />
            </div>

            {/* Filters Toggle */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </Button>

            {/* View Toggle */}
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

          {/* Expanded Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 pt-4 border-t border-border"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {["Price Range", "Beds", "Baths", "Property Type", "Square Feet", "More Filters"].map((filter) => (
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
          {/* Results Header */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">{allProperties.length}</span> properties found
            </p>
            <select className="px-4 py-2 rounded-xl bg-secondary border-none text-foreground outline-none cursor-pointer">
              <option>Newest First</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Most Popular</option>
            </select>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <PropertyCard {...property} />
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <Button className="btn-secondary">
              Load More Properties
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Listings;
