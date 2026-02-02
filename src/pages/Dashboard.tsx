import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { 
  Heart, Calendar, Home, Settings, LogOut, User, 
  Bell, Search, TrendingUp, Clock 
} from "lucide-react";

import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

interface Profile {
  full_name: string | null;
  email: string;
  avatar_url: string | null;
}

const Dashboard = () => {
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        const { data } = await supabase
          .from("profiles")
          .select("full_name, email, avatar_url")
          .eq("user_id", user.id)
          .maybeSingle();
        
        if (data) {
          setProfile(data);
        }
      }
    };
    fetchProfile();
  }, [user]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  // Mock saved properties (would come from favorites table in production)
  const savedProperties = [
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
    },
  ];

  const stats = [
    { label: "Saved Properties", value: "12", icon: Heart, color: "text-red-500" },
    { label: "Scheduled Tours", value: "3", icon: Calendar, color: "text-blue-500" },
    { label: "Viewed This Week", value: "24", icon: TrendingUp, color: "text-green-500" },
    { label: "Saved Searches", value: "5", icon: Search, color: "text-purple-500" },
  ];

  const recentActivity = [
    { action: "Viewed property", property: "Manhattan Luxury Penthouse", time: "2 hours ago" },
    { action: "Saved property", property: "Mediterranean Beachfront Villa", time: "Yesterday" },
    { action: "Scheduled tour", property: "Modern Farmhouse Estate", time: "2 days ago" },
    { action: "Contacted agent", property: "Spanish Revival Estate", time: "3 days ago" },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-8 bg-haven-warm">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-haven-gradient flex items-center justify-center text-white text-2xl font-serif">
                {profile?.full_name?.[0] || user?.email?.[0]?.toUpperCase() || "U"}
              </div>
              <div>
                <h1 className="text-2xl font-serif font-medium text-foreground">
                  Welcome back, {profile?.full_name?.split(" ")[0] || "User"}
                </h1>
                <p className="text-muted-foreground">{user?.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
              <Button variant="outline" onClick={handleSignOut}>
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl p-6 shadow-elegant border border-border sticky top-28">
                <nav className="space-y-2">
                  {[
                    { id: "overview", label: "Overview", icon: Home },
                    { id: "saved", label: "Saved Properties", icon: Heart },
                    { id: "tours", label: "Scheduled Tours", icon: Calendar },
                    { id: "searches", label: "Saved Searches", icon: Search },
                    { id: "profile", label: "Edit Profile", icon: User },
                    { id: "settings", label: "Settings", icon: Settings },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${
                        activeTab === item.id
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-secondary"
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-2xl p-6 shadow-elegant border border-border"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-4 ${stat.color}`}>
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Saved Properties */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-serif font-medium text-foreground">
                    Saved Properties
                  </h2>
                  <Link to="/listings" className="text-primary text-sm hover:underline">
                    Browse More
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {savedProperties.map((property) => (
                    <PropertyCard key={property.id} {...property} />
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <h2 className="text-xl font-serif font-medium text-foreground mb-6">
                  Recent Activity
                </h2>
                <div className="bg-card rounded-2xl shadow-elegant border border-border overflow-hidden">
                  {recentActivity.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 border-b border-border last:border-b-0"
                    >
                      <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                        <Clock className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="text-foreground">
                          {activity.action}{" "}
                          <span className="font-medium">{activity.property}</span>
                        </p>
                        <p className="text-sm text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;
