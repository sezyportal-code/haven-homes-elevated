import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Search, Star, MapPin, Phone, Mail, Award, Users, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const agents = [
  {
    id: "1",
    name: "Victoria Sterling",
    title: "Luxury Property Specialist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    rating: 4.9,
    reviews: 127,
    sales: 85,
    experience: "12 years",
    specialties: ["Luxury Homes", "Waterfront", "Investment"],
    location: "Malibu, CA",
    phone: "(555) 234-5678",
    email: "victoria@havenhomes.com",
    featured: true,
  },
  {
    id: "2",
    name: "Marcus Thompson",
    title: "Senior Real Estate Advisor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    rating: 4.8,
    reviews: 98,
    sales: 72,
    experience: "10 years",
    specialties: ["First-Time Buyers", "Urban Living", "Condos"],
    location: "New York, NY",
    phone: "(555) 345-6789",
    email: "marcus@havenhomes.com",
    featured: true,
  },
  {
    id: "3",
    name: "Sarah Chen",
    title: "Residential Sales Expert",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    rating: 4.9,
    reviews: 156,
    sales: 93,
    experience: "8 years",
    specialties: ["Family Homes", "Suburbs", "Schools"],
    location: "San Francisco, CA",
    phone: "(555) 456-7890",
    email: "sarah@havenhomes.com",
    featured: true,
  },
  {
    id: "4",
    name: "James Rodriguez",
    title: "Commercial & Residential",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    rating: 4.7,
    reviews: 84,
    sales: 61,
    experience: "15 years",
    specialties: ["Commercial", "Mixed-Use", "Development"],
    location: "Miami, FL",
    phone: "(555) 567-8901",
    email: "james@havenhomes.com",
  },
  {
    id: "5",
    name: "Emily Watson",
    title: "Relocation Specialist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    rating: 4.8,
    reviews: 112,
    sales: 78,
    experience: "7 years",
    specialties: ["Relocation", "Corporate", "Rentals"],
    location: "Chicago, IL",
    phone: "(555) 678-9012",
    email: "emily@havenhomes.com",
  },
  {
    id: "6",
    name: "Michael Park",
    title: "Investment Property Expert",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    rating: 4.9,
    reviews: 143,
    sales: 105,
    experience: "14 years",
    specialties: ["Investment", "Multi-Family", "REITs"],
    location: "Los Angeles, CA",
    phone: "(555) 789-0123",
    email: "michael@havenhomes.com",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Agents = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-haven-warm">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Meet Our Experts</span>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground mb-6">
              Our Award-Winning
              <span className="text-gradient-emerald"> Agents</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Work with the best in the business. Our agents are dedicated professionals 
              with deep local knowledge and a commitment to your success.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-card shadow-haven-md">
              <MapPin className="w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search agents by name or location..."
                className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
              />
              <Button className="btn-primary">
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            {[
              { icon: Users, value: "500+", label: "Expert Agents" },
              { icon: Home, value: "15,000+", label: "Properties Sold" },
              { icon: Star, value: "4.9", label: "Average Rating" },
              { icon: Award, value: "150+", label: "Industry Awards" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground font-serif">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {agents.map((agent) => (
              <motion.div
                key={agent.id}
                variants={itemVariants}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-haven-md hover:shadow-haven-xl transition-all duration-500"
              >
                {agent.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="badge-premium">Top Agent</span>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Rating Badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm">
                    <Star className="w-4 h-4 fill-haven-gold text-haven-gold" />
                    <span className="font-semibold text-foreground">{agent.rating}</span>
                    <span className="text-sm text-muted-foreground">({agent.reviews})</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground font-serif mb-1">
                    {agent.name}
                  </h3>
                  <p className="text-sm text-primary mb-4">{agent.title}</p>

                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{agent.location}</span>
                  </div>

                  {/* Stats */}
                  <div className="flex gap-4 mb-4 pb-4 border-b border-border">
                    <div>
                      <p className="font-semibold text-foreground">{agent.sales}</p>
                      <p className="text-xs text-muted-foreground">Sales</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{agent.experience}</p>
                      <p className="text-xs text-muted-foreground">Experience</p>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {agent.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="px-3 py-1 rounded-full bg-secondary text-xs text-foreground"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Link to={`/agent/${agent.id}`} className="flex-1">
                      <Button className="w-full btn-primary">View Profile</Button>
                    </Link>
                    <a href={`tel:${agent.phone}`}>
                      <Button variant="outline" size="icon">
                        <Phone className="w-4 h-4" />
                      </Button>
                    </a>
                    <a href={`mailto:${agent.email}`}>
                      <Button variant="outline" size="icon">
                        <Mail className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="section-padding bg-haven-gradient">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-white mb-6">
              Join Our Elite Team
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Are you a passionate real estate professional? Join Haven Homes and take 
              your career to new heights with our industry-leading tools and support.
            </p>
            <Button className="btn-gold text-lg px-10 py-5">
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Agents;
