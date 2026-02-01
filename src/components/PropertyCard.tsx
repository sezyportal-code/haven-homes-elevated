import { motion } from "framer-motion";
import { Heart, MapPin, Bed, Bath, Square, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface PropertyCardProps {
  id: string;
  image: string;
  title: string;
  price: number;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  type: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

export function PropertyCard({
  id,
  image,
  title,
  price,
  address,
  beds,
  baths,
  sqft,
  type,
  isNew,
  isFeatured,
}: PropertyCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="property-card group"
    >
      <Link to={`/property/${id}`} className="block">
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="property-card-image"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.6 }}
          />
          
          {/* Overlay Gradient */}
          <div className="image-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            {isNew && <span className="badge-new">New</span>}
            {isFeatured && <span className="badge-premium">Featured</span>}
          </div>

          {/* Actions */}
          <div className="absolute top-4 right-4 flex gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                setIsLiked(!isLiked);
              }}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                isLiked
                  ? "bg-destructive text-destructive-foreground"
                  : "bg-card/80 backdrop-blur-sm text-foreground hover:bg-card"
              }`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
            </motion.button>
          </div>

          {/* Quick View on Hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            className="absolute bottom-4 left-4 right-4"
          >
            <button className="w-full py-3 rounded-xl bg-card/90 backdrop-blur-sm text-foreground font-medium flex items-center justify-center gap-2 hover:bg-card transition-colors">
              <Eye className="w-4 h-4" />
              Quick View
            </button>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Price & Type */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl font-bold text-foreground font-serif">
              {formatPrice(price)}
            </span>
            <span className="text-sm text-muted-foreground capitalize px-3 py-1 rounded-full bg-secondary">
              {type}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
            {title}
          </h3>

          {/* Address */}
          <div className="flex items-center gap-1 text-muted-foreground mb-4">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm line-clamp-1">{address}</span>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 pt-4 border-t border-border">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Bed className="w-4 h-4" />
              <span className="text-sm font-medium">{beds}</span>
              <span className="text-xs">beds</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Bath className="w-4 h-4" />
              <span className="text-sm font-medium">{baths}</span>
              <span className="text-xs">baths</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Square className="w-4 h-4" />
              <span className="text-sm font-medium">{sqft.toLocaleString()}</span>
              <span className="text-xs">sqft</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
