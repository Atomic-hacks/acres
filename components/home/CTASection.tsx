// components/CTASection.tsx
"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Mail, Users } from "lucide-react";
import { ReactNode } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const buttonVariants: Variants = {
  idle: {
    scale: 1,
    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
    transition: { duration: 0.3 },
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 },
  },
};

interface HolographicInfoCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

// Holographic 3D Shape Components
const HolographicInfoCard = ({ children, className = "", delay = 0 }:HolographicInfoCardProps) => (
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
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-500/15 to-blue-400/10 rounded-2xl blur-xl animate-pulse" />
    <div className="relative bg-black/60 backdrop-blur-lg border border-blue-300/40 rounded-2xl p-6 shadow-2xl">
      <div className="bg-black/40 rounded-xl h-full flex flex-col items-center justify-center backdrop-blur-sm p-4">
        {children}
      </div>
    </div>
  </motion.div>
);

export function CTASection() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effects - Matching About */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/15 to-blue-300/25" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <motion.div
              className="inline-block px-4 py-2 bg-black/60 backdrop-blur-lg border border-blue-300/40 text-blue-100 text-sm font-medium mb-6 shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Join ACRES 2025
            </motion.div>

            <motion.h2
              className="text-5xl lg:text-6xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to Shape Africa&apos;s
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100">
                Construction Future?
              </span>
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.8)" }}
            >
              Join industry leaders, innovators, and visionaries at ACRES 2025.
              Don&apos;t miss your chance to be part of Africa&apos;s premier
              construction and real estate summit.
            </motion.p>
          </motion.div>

          {/* Key Info Cards - Holographic Style */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto"
          >
            <HolographicInfoCard delay={0.2}>
              <Calendar className="w-12 h-12 text-blue-300 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3 drop-shadow-lg">Event Dates</h3>
              <p className="text-blue-100 font-medium drop-shadow-md">March 15-16, 2025</p>
            </HolographicInfoCard>

            <HolographicInfoCard delay={0.4}>
              <MapPin className="w-12 h-12 text-blue-200 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3 drop-shadow-lg">Locations</h3>
              <p className="text-blue-100 font-medium drop-shadow-md">Abuja & Port Harcourt</p>
            </HolographicInfoCard>

            <HolographicInfoCard delay={0.6}>
              <Users className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3 drop-shadow-lg">Expected</h3>
              <p className="text-blue-100 font-medium drop-shadow-md">2,000+ Professionals</p>
            </HolographicInfoCard>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            {/* Primary CTA */}
            <motion.button
              variants={buttonVariants}
              initial="idle"
              whileHover="hover"
              whileTap="tap"
              className="group relative bg-gradient-to-r from-blue-500 to-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg overflow-hidden shadow-2xl border border-blue-400/50 hover:shadow-blue-500/40 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-3">
                Register Now
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </span>
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              variants={buttonVariants}
              initial="idle"
              whileHover="hover"
              whileTap="tap"
              className="group bg-black/60 backdrop-blur-lg border-2 border-blue-300/40 text-white px-10 py-5 rounded-full font-bold text-lg hover:border-blue-300/60 hover:bg-black/70 transition-all duration-300 shadow-2xl hover:shadow-blue-500/30"
            >
              <span className="flex items-center gap-3">
                <Mail className="w-6 h-6" />
                Get Updates
              </span>
            </motion.button>
          </motion.div>

          {/* Bottom Note */}
          <motion.div
            variants={itemVariants}
            className="space-y-4"
          >
            <p className="text-blue-200/80 text-lg font-medium drop-shadow-md">
              Early bird pricing available until February 1st, 2025
            </p>
            
            {/* Additional incentive */}
            <motion.div
              className="inline-block px-6 py-3 bg-black/60 backdrop-blur-lg border border-blue-300/40 rounded-full shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-blue-100 text-sm font-semibold drop-shadow-md">
                🎉 Save up to 40% with early registration
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}