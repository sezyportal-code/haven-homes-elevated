import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Building, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const offices = [
  {
    city: "New York",
    address: "350 Fifth Avenue, Suite 4500",
    phone: "(212) 555-0100",
    email: "nyc@havenhomes.com",
    hours: "Mon-Fri: 9AM-7PM",
  },
  {
    city: "Los Angeles",
    address: "9601 Wilshire Blvd, Suite 500",
    phone: "(310) 555-0200",
    email: "la@havenhomes.com",
    hours: "Mon-Fri: 9AM-7PM",
  },
  {
    city: "Miami",
    address: "1111 Brickell Avenue, Suite 2000",
    phone: "(305) 555-0300",
    email: "miami@havenhomes.com",
    hours: "Mon-Fri: 9AM-7PM",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <MessageSquare className="w-4 h-4 text-haven-gold" />
              <span className="text-sm font-medium text-white/90">Get in Touch</span>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-6">
              We'd Love to
              <span className="block text-haven-gold-light">Hear From You</span>
            </h1>
            <p className="text-lg text-white/80">
              Whether you're buying, selling, or just have questions, our team is here to help. 
              Reach out and let's start a conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-medium text-foreground mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground outline-none focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="buying">Buying a Property</option>
                      <option value="selling">Selling a Property</option>
                      <option value="renting">Renting</option>
                      <option value="agent">Become an Agent</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>

                <Button type="submit" className="btn-primary w-full sm:w-auto">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-serif font-medium text-foreground mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {[
                    { icon: Phone, label: "Call Us", value: "(555) 123-4567", href: "tel:+15551234567" },
                    { icon: Mail, label: "Email Us", value: "hello@havenhomes.com", href: "mailto:hello@havenhomes.com" },
                    { icon: Clock, label: "Business Hours", value: "Mon-Fri: 9AM-7PM EST", href: null },
                  ].map((item) => (
                    <motion.div
                      key={item.label}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="font-medium text-foreground hover:text-primary transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium text-foreground">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-2xl bg-haven-gradient text-white cursor-pointer"
                >
                  <Building className="w-8 h-8 mb-3" />
                  <h4 className="font-semibold mb-1">Visit an Office</h4>
                  <p className="text-sm text-white/80">Schedule an in-person meeting</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-2xl bg-haven-gold text-haven-charcoal cursor-pointer"
                >
                  <Users className="w-8 h-8 mb-3" />
                  <h4 className="font-semibold mb-1">Find an Agent</h4>
                  <p className="text-sm text-haven-charcoal/80">Connect with a local expert</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-4">
              Our Offices
            </h2>
            <p className="text-muted-foreground">Visit us at any of our locations nationwide</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card shadow-haven-md"
              >
                <h3 className="text-xl font-semibold text-foreground font-serif mb-4">
                  {office.city}
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 mt-1 text-primary" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-primary" />
                    <a href={`tel:${office.phone}`} className="hover:text-primary transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-primary" />
                    <a href={`mailto:${office.email}`} className="hover:text-primary transition-colors">
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{office.hours}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
