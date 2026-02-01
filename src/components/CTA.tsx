import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";

export function CTA() {
  return (
    <section className="section-padding bg-haven-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-primary-foreground mb-6"
          >
            Ready to Find Your
            <span className="block">Dream Home?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto"
          >
            Let our expert agents guide you through every step of your real estate journey. 
            Schedule a free consultation today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="btn-gold group">
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20">
              <Phone className="w-5 h-5 mr-2" />
              <span>Call (555) 123-4567</span>
            </button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <div className="flex flex-wrap items-center justify-center gap-8 text-primary-foreground/60">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary-foreground">4.9</span>
                <span className="text-sm">★ Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary-foreground">15K+</span>
                <span className="text-sm">Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary-foreground">$2B+</span>
                <span className="text-sm">Sales Volume</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary-foreground">10+</span>
                <span className="text-sm">Years Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
