import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem } from "./AnimationWrappers";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "First-Time Buyer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    content: "Haven Homes made our first home purchase incredibly smooth. Our agent understood exactly what we were looking for and found us the perfect property within weeks.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Property Investor",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "The market insights and analytics tools are exceptional. I've grown my portfolio significantly thanks to the data-driven approach Haven Homes provides.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Home Seller",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "Sold my home 20% above asking price! The professional photography and virtual tour attracted so many qualified buyers. Couldn't be happier with the results.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-secondary overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <FadeInView className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-2 tracking-wider uppercase">
            Client Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-4">
            Trusted by Thousands of
            <span className="text-gradient-emerald"> Happy Homeowners</span>
          </h2>
        </FadeInView>

        {/* Testimonials Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={testimonial.name}>
              <motion.div
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 40px -15px rgba(0,0,0,0.15)",
                  transition: { duration: 0.3 }
                }}
                className="testimonial-card relative h-full"
              >
                {/* Quote Icon */}
                <motion.div 
                  className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-haven-gradient flex items-center justify-center"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 15, scale: 1.1 }}
                >
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </motion.div>

                {/* Stars with animation */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, type: "spring" }}
                    >
                      <Star className="w-5 h-5 fill-haven-gold text-haven-gold" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground/90 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <motion.img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
