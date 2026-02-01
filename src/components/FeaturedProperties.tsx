import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PropertyCard } from "./PropertyCard";
import { FadeInView, StaggerContainer, StaggerItem } from "./AnimationWrappers";

import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

const properties = [
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
];

export function FeaturedProperties() {
  return (
    <section className="section-padding bg-haven-warm">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <FadeInView>
            <span className="inline-block text-sm font-medium text-primary mb-2 tracking-wider uppercase">
              Featured Listings
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground">
              Discover Our Finest
              <span className="block text-gradient-emerald">Properties</span>
            </h2>
          </FadeInView>
          
          <FadeInView direction="right">
            <Link
              to="/listings"
              className="group inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all"
            >
              View All Listings
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInView>
        </div>

        {/* Property Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <StaggerItem key={property.id}>
              <PropertyCard {...property} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
