import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { useRef } from "react";
import { FadeInView, FloatingElement } from "./AnimationWrappers";

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  const bgY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);

  return (
    <section ref={sectionRef} className="section-padding bg-haven-gradient relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY }}
      >
        <FloatingElement amplitude={20} duration={6} className="absolute top-20 left-[10%]">
          <div className="w-32 h-32 rounded-full bg-white/5 blur-2xl" />
        </FloatingElement>
        <FloatingElement amplitude={15} duration={8} className="absolute bottom-20 right-[15%]">
          <div className="w-48 h-48 rounded-full bg-white/5 blur-3xl" />
        </FloatingElement>
        <FloatingElement amplitude={25} duration={7} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-64 h-64 rounded-full bg-haven-gold/10 blur-3xl" />
        </FloatingElement>
      </motion.div>

      {/* Decorative circles */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <motion.div style={{ opacity }} className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInView>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-primary-foreground mb-6">
              Ready to Find Your
              <span className="block">Dream Home?</span>
            </h2>
          </FadeInView>

          <FadeInView delay={0.1}>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              Let our expert agents guide you through every step of your real estate journey. 
              Schedule a free consultation today.
            </p>
          </FadeInView>

          <FadeInView delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button 
                className="btn-gold group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button 
                className="btn-secondary bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-5 h-5 mr-2" />
                <span>Call (555) 123-4567</span>
              </motion.button>
            </div>
          </FadeInView>

          {/* Trust Badges */}
          <FadeInView delay={0.4}>
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="flex flex-wrap items-center justify-center gap-8 text-primary-foreground/60">
                {[
                  { value: "4.9", label: "★ Rating" },
                  { value: "15K+", label: "Happy Clients" },
                  { value: "$2B+", label: "Sales Volume" },
                  { value: "10+", label: "Years Experience" },
                ].map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <span className="text-2xl font-bold text-primary-foreground">{stat.value}</span>
                    <span className="text-sm">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeInView>
        </div>
      </motion.div>
    </section>
  );
}
