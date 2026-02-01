import { motion } from "framer-motion";
import { Home, Shield, Users, TrendingUp, MapPin, HeartHandshake } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem } from "./AnimationWrappers";

const features = [
  {
    icon: Home,
    title: "Premium Listings",
    description: "Access thousands of verified luxury properties with detailed information and virtual tours.",
  },
  {
    icon: Shield,
    title: "Secure Transactions",
    description: "Industry-leading security protocols protect your data and ensure safe property transactions.",
  },
  {
    icon: Users,
    title: "Expert Agents",
    description: "Work with top-rated real estate professionals who understand your unique needs.",
  },
  {
    icon: TrendingUp,
    title: "Market Insights",
    description: "Get real-time market data, price trends, and neighborhood analytics to make informed decisions.",
  },
  {
    icon: MapPin,
    title: "Neighborhood Guides",
    description: "Explore detailed guides about schools, amenities, safety scores, and local attractions.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Service",
    description: "Receive tailored recommendations and dedicated support throughout your home journey.",
  },
];

export function Features() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <FadeInView className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-2 tracking-wider uppercase">
            Why Choose Haven Homes
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-4">
            The Smarter Way to
            <span className="text-gradient-emerald"> Find Your Home</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We combine cutting-edge technology with personalized service to deliver 
            an unmatched real estate experience.
          </p>
        </FadeInView>

        {/* Features Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="feature-card group h-full"
              >
                <motion.div 
                  className="w-14 h-14 rounded-2xl bg-haven-gradient flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-3 font-serif">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
