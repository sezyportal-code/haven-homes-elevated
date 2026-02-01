import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  Home, DollarSign, Camera, Users, TrendingUp, Award, 
  CheckCircle2, ArrowRight, Play, Star, Clock, Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";

import heroImage from "@/assets/hero-home.jpg";

const steps = [
  {
    icon: Home,
    title: "List Your Property",
    description: "Share your property details, upload photos, and set your price with our easy listing tool.",
  },
  {
    icon: Camera,
    title: "Professional Photography",
    description: "Our team captures stunning photos and creates virtual tours to showcase your home.",
  },
  {
    icon: Users,
    title: "Connect with Buyers",
    description: "We market your listing to qualified buyers and schedule viewings at your convenience.",
  },
  {
    icon: DollarSign,
    title: "Close the Deal",
    description: "Our experts guide you through negotiations and paperwork for a smooth closing.",
  },
];

const benefits = [
  { icon: TrendingUp, title: "Top Dollar Results", description: "Our sellers get 12% more on average" },
  { icon: Clock, title: "Fast Sales", description: "Average time on market: 21 days" },
  { icon: Shield, title: "Full Support", description: "Dedicated agent from start to finish" },
  { icon: Award, title: "Expert Marketing", description: "Premium listings, social ads & more" },
];

const testimonials = [
  {
    name: "David Park",
    role: "Sold in Beverly Hills",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "Haven Homes sold our property 25% above asking price in just 2 weeks. Incredible service!",
    stars: 5,
  },
  {
    name: "Jennifer Liu",
    role: "Sold in Manhattan",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    content: "The photography and virtual tour they created was stunning. Multiple offers within days!",
    stars: 5,
  },
];

const Sell = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Luxury home" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>

        <div className="container-custom relative z-10 pt-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <TrendingUp className="w-4 h-4 text-haven-gold" />
                <span className="text-sm font-medium text-white/90">Sell for Top Dollar</span>
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-6 leading-tight">
                Your Home Deserves
                <span className="block text-haven-gold-light">The Best Price</span>
              </h1>

              <p className="text-lg text-white/80 mb-8">
                Partner with Haven Homes and experience the difference. Our expert agents, 
                cutting-edge marketing, and personalized service deliver exceptional results.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button className="btn-gold group">
                  Get Your Free Valuation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button className="btn-secondary bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Success Stories
                </Button>
              </div>

              {/* Trust Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex gap-8 mt-10 pt-8 border-t border-white/20"
              >
                {[
                  { value: "$2B+", label: "Sales Volume" },
                  { value: "98%", label: "Client Satisfaction" },
                  { value: "21 Days", label: "Avg. Time to Sell" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl md:text-3xl font-bold text-white font-serif">{stat.value}</p>
                    <p className="text-sm text-white/60">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-haven-warm">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block text-sm font-medium text-primary mb-2 tracking-wider uppercase">
              Simple Process
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-4">
              How Selling Works
              <span className="text-gradient-emerald"> With Us</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                )}
                
                <div className="feature-card text-center">
                  <div className="relative inline-flex mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-haven-gradient flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-haven-gold text-haven-charcoal text-sm font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 font-serif">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-sm font-medium text-primary mb-2 tracking-wider uppercase">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-6">
                Sell Smarter,
                <span className="text-gradient-emerald"> Not Harder</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our proven approach combines local expertise, innovative marketing, 
                and white-glove service to maximize your home's value.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="p-6 rounded-2xl bg-card shadow-haven-md"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-haven-gold text-haven-gold" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-haven-gradient">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-white mb-6">
              Ready to Sell Your Home?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Get a free, no-obligation home valuation from our experts. 
              Discover what your property is worth in today's market.
            </p>
            <Button className="btn-gold text-lg px-10 py-5">
              Get Your Free Valuation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sell;
