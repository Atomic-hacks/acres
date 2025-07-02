// components/VenuePreview.tsx
"use client";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Users,
  Car,
  Plane,
  Hotel,
  ArrowRight,
  Navigation,
  Clock,
  Building2,
} from "lucide-react";
import { ReactNode } from "react";

const venues = [
  {
    city: "Abuja",
    country: "Nigeria",
    venue: "Transcorp Hilton Abuja",
    address: "1 Aguiyi Ironsi Street, Maitama District",
    date: "March 15-16, 2024",
    capacity: "2,000+ Attendees",
    features: [
      "World-class conference facilities",
      "5-star accommodation",
      "Central business district location",
      "International airport access",
    ],
    logistics: {
      airport: "Nnamdi Azikiwe International (45 min)",
      hotels: "15+ Partner Hotels Nearby",
      transport: "Complimentary Shuttle Service",
      parking: "500+ Parking Spaces",
    },
    isPrimary: true,
  },
  {
    city: "Port Harcourt",
    country: "Nigeria",
    venue: "Obi Wali International Conference Centre",
    address: "Rumuola Road, GRA Phase II",
    date: "March 22-23, 2024",
    capacity: "1,500+ Attendees",
    features: [
      "Modern conference technology",
      "Exhibition spaces",
      "Cultural heritage proximity",
      "Oil & gas industry hub access",
    ],
    logistics: {
      airport: "Port Harcourt International (25 min)",
      hotels: "10+ Recommended Hotels",
      transport: "Airport Transfer Available",
      parking: "300+ Secure Parking",
    },
    isPrimary: false,
  },
];

const accommodationPartners = [
  { name: "Transcorp Hilton", discount: "25% Off", rating: "5★" },
  { name: "Sheraton Abuja", discount: "20% Off", rating: "5★" },
  { name: "Four Points Sheraton", discount: "20% Off", rating: "4★" },
  { name: "Chelsea Hotel", discount: "15% Off", rating: "4★" },
];

const travelInfo = [
  {
    icon: Plane,
    title: "International Travel",
    items: [
      "Visa assistance available",
      "Airport pickup services",
      "Multiple airline partners",
      "Group booking discounts",
    ],
  },
  {
    icon: Navigation,
    title: "Local Transportation",
    items: [
      "Complimentary shuttle service",
      "Partner taxi services",
      "Car rental discounts",
      "Public transport guides",
    ],
  },
  {
    icon: Clock,
    title: "Event Logistics",
    items: [
      "Registration from 7:00 AM",
      "Welcome reception included",
      "Networking lunch provided",
      "Evening gala dinner",
    ],
  },
];

interface HolographicShapeProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

// Holographic 3D Shape Components (matching AboutPreview)
const HolographicShape = ({
  children,
  className = "",
  delay = 0,
}: HolographicShapeProps) => (
  <motion.div
    className={`relative ${className}`}
    initial={{ opacity: 0, rotateY: -30, scale: 0.8 }}
    whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 1, ease: "easeOut" }}
    whileHover={{
      rotateY: 15,
      rotateX: 10,
      scale: 1.05,
      transition: { duration: 0.3 },
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-500/15 to-blue-400/10 rounded-xl blur-xl animate-pulse" />
    <div className="relative bg-black/60 backdrop-blur-lg border border-blue-300/40 rounded-xl p-1 shadow-2xl">
      <div className="bg-black/40 rounded-lg h-full flex items-center justify-center backdrop-blur-sm">
        {children}
      </div>
    </div>
  </motion.div>
);

export function VenuePreview() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effects - Matching AboutPreview */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/15 to-blue-300/25" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 py-20">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Side - Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-black/60 backdrop-blur-lg border border-blue-300/40 text-blue-100 text-sm font-medium mb-6 shadow-2xl">
                Event Venues
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                World-Class Venues
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100">
                  Across Nigeria
                </span>
              </h1>

              <div className="space-y-6 text-lg text-blue-50 leading-relaxed">
                <p style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.8)" }}>
                  Experience ACRES in premium locations designed for networking,
                  learning, and deal-making in the heart of Africa&apos;s
                  largest economy.
                </p>
                <p style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.8)" }}>
                  From the political capital of Abuja to the oil hub of Port
                  Harcourt, each venue offers unparalleled access to industry
                  leaders and investment opportunities.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side - 3D Holographic Shapes */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-8 max-w-md mx-auto">
              <HolographicShape className="h-48" delay={0.2}>
                <Building2 className="w-16 h-16 text-blue-300" />
              </HolographicShape>

              <HolographicShape className="h-48 mt-12" delay={0.4}>
                <MapPin className="w-16 h-16 text-blue-200" />
              </HolographicShape>

              <HolographicShape className="h-48 -mt-6" delay={0.6}>
                <Users className="w-16 h-16 text-blue-400" />
              </HolographicShape>

              <HolographicShape className="h-48 mt-6" delay={0.8}>
                <Calendar className="w-16 h-16 text-blue-100" />
              </HolographicShape>
            </div>
          </div>
        </div>

        {/* Venue Cards */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 mb-20"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.3 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {venues.map((venue, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-8 h-full border border-white/20 hover:border-blue-300/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:bg-black/70">
                {venue.isPrimary && (
                  <div className="absolute -top-4 left-8">
                    <span className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-2xl shadow-blue-500/30">
                      PRIMARY VENUE
                    </span>
                  </div>
                )}

                {/* Venue Header */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors drop-shadow-lg">
                      {venue.city}
                    </h3>
                    <p className="text-blue-200 text-lg font-semibold mb-1 drop-shadow-md">
                      {venue.venue}
                    </p>
                    <p className="text-blue-50 flex items-center gap-2 drop-shadow-md">
                      <MapPin className="w-4 h-4" />
                      {venue.address}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-blue-100 flex items-center gap-2 mb-2 drop-shadow-md">
                      <Calendar className="w-4 h-4" />
                      {venue.date}
                    </div>
                    <div className="text-blue-100 flex items-center gap-2 drop-shadow-md">
                      <Users className="w-4 h-4" />
                      {venue.capacity}
                    </div>
                  </div>
                </div>

                {/* Venue Features */}
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-4 drop-shadow-lg">
                    Venue Features
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {venue.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-blue-50 text-sm drop-shadow-md"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full shadow-sm"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Logistics Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(venue.logistics).map(([key, value], idx) => {
                    const icons = {
                      airport: Plane,
                      hotels: Hotel,
                      transport: Car,
                      parking: Car,
                    };
                    const Icon = icons[key as keyof typeof icons];

                    return (
                      <div
                        key={idx}
                        className="bg-black/40 rounded-xl p-4 border border-blue-300/20 backdrop-blur-sm"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className="w-4 h-4 text-blue-300" />
                          <span className="text-white text-sm font-medium capitalize drop-shadow-md">
                            {key}
                          </span>
                        </div>
                        <p className="text-blue-50 text-sm drop-shadow-md">
                          {value}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Accommodation Partners */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">
              Accommodation Partners
            </h3>
            <p className="text-blue-50 max-w-2xl mx-auto drop-shadow-md">
              Exclusive discounts at premium hotels. Book through ACRES for
              special rates and guaranteed availability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accommodationPartners.map((hotel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                className="bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-300/50 transition-all duration-300 text-center hover:shadow-2xl hover:shadow-blue-500/20 hover:bg-black/70"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-2xl shadow-blue-500/30 border border-blue-400/50">
                  <Hotel className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2 drop-shadow-lg">
                  {hotel.name}
                </h4>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-blue-200 text-sm">{hotel.rating}</span>
                  <span className="text-blue-100 text-sm">•</span>
                  <span className="text-blue-300 text-sm font-medium">
                    {hotel.discount}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-lg shadow-blue-500/30 border border-blue-400/50"
                >
                  Book Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Travel Information */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-20"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.5 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {travelInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-8 h-full border border-white/20 hover:border-blue-300/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:bg-black/70">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-blue-500/30 border border-blue-400/50">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors drop-shadow-lg">
                  {info.title}
                </h3>
                <ul className="space-y-2">
                  {info.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-blue-50 text-sm flex items-center gap-2 drop-shadow-md"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full shadow-sm"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 border border-blue-400/50"
          >
            <MapPin className="w-5 h-5" />
            View Detailed Venue Information
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
