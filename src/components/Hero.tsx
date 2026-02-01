import { motion } from "framer-motion";
import { Search, MapPin, Home, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="Luxury home exterior"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-haven-gold animate-pulse" />
            <span className="text-sm font-medium text-white/90">
              Discover 10,000+ Premium Properties
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-white mb-6 leading-tight"
          >
            Find Your Perfect
            <span className="block text-gradient-gold">Place to Call Home</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
          >
            Explore curated luxury homes, modern apartments, and exclusive estates 
            in the most sought-after neighborhoods.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glass-card-strong max-w-3xl mx-auto p-2 rounded-2xl"
          >
            <div className="flex flex-col md:flex-row gap-2">
              {/* Location Input */}
              <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-secondary/50 transition-colors cursor-pointer">
                <MapPin className="w-5 h-5 text-primary" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Location</p>
                  <input 
                    type="text" 
                    placeholder="Search by city, neighborhood..."
                    className="text-foreground font-medium bg-transparent border-none outline-none w-full placeholder:text-muted-foreground"
                  />
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px bg-border" />

              {/* Property Type */}
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-secondary/50 transition-colors cursor-pointer">
                <Home className="w-5 h-5 text-primary" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Property Type</p>
                  <p className="text-foreground font-medium">Any Type</p>
                </div>
              </div>

              {/* Search Button */}
              <button className="btn-primary flex items-center justify-center gap-2 min-w-[140px]">
                <Search className="w-5 h-5" />
                <span>Search</span>
              </button>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-12"
          >
            {[
              { value: "10K+", label: "Properties" },
              { value: "5K+", label: "Happy Clients" },
              { value: "500+", label: "Expert Agents" },
              { value: "100+", label: "Cities" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-white font-serif">
                  {stat.value}
                </p>
                <p className="text-sm text-white/60">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-sm">Scroll to explore</span>
          <ArrowRight className="w-4 h-4 rotate-90" />
        </motion.div>
      </motion.div>
    </section>
  );
}
