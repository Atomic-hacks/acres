"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Target,
  Eye,
  Building2,
  TrendingUp,
  Users,
  Globe,
} from "lucide-react";
import { ReactNode } from "react";

const features = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To transform Africa's construction and real estate landscape through innovation, collaboration, and sustainable development practices.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "Creating a unified platform where African real estate excellence meets global investment opportunities and cutting-edge construction technologies.",
  },
  {
    icon: Building2,
    title: "Our Impact",
    description:
      "Facilitating billions in real estate investments across Africa while fostering sustainable urban development and job creation.",
  },
];

const stats = [
  { number: "500+", label: "Industry Leaders", icon: Users },
  { number: "$2.5B+", label: "Investment Facilitated", icon: TrendingUp },
  { number: "25+", label: "African Countries", icon: Globe },
  { number: "200+", label: "Projects Showcased", icon: Building2 },
];

interface HolographicShapeProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

// Holographic 3D Shape Components
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

export function AboutPreview() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effects - Matching Hero */}
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
                About ACRES
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                Why You Absolutely Should
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100">
                  Attend ACRES Summit
                </span>
              </h1>

              <div className="space-y-6 text-lg text-blue-50 leading-relaxed">
                <p style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.8)" }}>
                  Building Africa&apos;s Future Together - Where visionary
                  leaders, innovative companies, and transformative ideas
                  converge to shape the continent&apos;s construction and real
                  estate destiny.
                </p>
                <p style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.8)" }}>
                  To transform Africa&apos;s construction and real estate
                  landscape through innovation, collaboration, and sustainable
                  development practices while creating a unified platform where
                  African real estate excellence meets global investment
                  opportunities.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side - 3D Holographic Shapes */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-8 max-w-md mx-auto">
              <HolographicShape className="h-48" delay={0.2}>
                <Target className="w-16 h-16 text-blue-300" />
              </HolographicShape>

              <HolographicShape className="h-48 mt-12" delay={0.4}>
                <Eye className="w-16 h-16 text-blue-200" />
              </HolographicShape>

              <HolographicShape className="h-48 -mt-6" delay={0.6}>
                <Building2 className="w-16 h-16 text-blue-400" />
              </HolographicShape>

              <HolographicShape className="h-48 mt-6" delay={0.8}>
                <Globe className="w-16 h-16 text-blue-100" />
              </HolographicShape>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-20"
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
          {features.map((feature, index) => (
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
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors drop-shadow-lg">
                  {feature.title}
                </h3>
                <p className="text-blue-50 leading-relaxed drop-shadow-md">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.5 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-black/60 backdrop-blur-lg rounded-xl border border-white/20 hover:shadow-2xl hover:shadow-blue-500/30 hover:bg-black/70 hover:border-white/30 transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 text-blue-300 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                {stat.number}
              </div>
              <div className="text-sm text-blue-200 font-medium drop-shadow-md">
                {stat.label}
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
            Learn More About ACRES
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
