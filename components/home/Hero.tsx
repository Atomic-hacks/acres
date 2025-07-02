"use client";

import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  Play,
  Pause,
  Volume2,
  VolumeX,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

const heroVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.section
      variants={heroVariants}
      initial="hidden"
      animate="visible"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-14"
    >
      {/* Enhanced Video Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="relative w-full h-full">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted={isMuted}
            loop
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            style={{
              filter: "brightness(0.4) contrast(1.1)",
            }}
          >
            <source src="virtual.mp4" type="video/mp4" />
          </video>

          {/* Fallback background when video not loaded */}
          {!videoLoaded && (
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-900 via-blue-900/50 to-purple-900/30" />
          )}
        </div>
      </div>

      {/* Video Controls */}
      <div className="absolute top-6 right-6 z-30 flex gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={togglePlayPause}
          className="p-2 bg-black/50 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-black/70 transition-all duration-200"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4" />
          )}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleMute}
          className="p-2 bg-black/50 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-black/70 transition-all duration-200"
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </motion.button>
      </div>

      {/* Blue Gradient Overlay with Parallax */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-blue-400/15 to-blue-300/25"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />

      {/* Enhanced content with better contrast */}
      <div
        className="relative z-20 max-w-7xl mx-auto px-6 text-center flex flex-col items-center justify-between min-h-screen py-12"
        style={{
          transform: `translateY(${scrollY * -0.2}px)`,
        }}
      >
        {/* Top Badge with better contrast */}
        <motion.div
          variants={slideUpVariants}
          className="inline-flex items-center px-6 py-3 rounded-full bg-black/60 backdrop-blur-lg border border-blue-300/40 text-blue-100 text-sm font-medium shadow-2xl"
        >
          <Calendar className="w-4 h-4 mr-2" />
          March 15-16, 2025 • Abuja & Port Harcourt
        </motion.div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col items-center justify-center">
          {/* ACRES Title with better contrast */}
          <motion.h1
            variants={slideUpVariants}
            className="text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-black leading-none tracking-tight mb-6"
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              textShadow:
                "0 0 80px rgba(96, 165, 250, 0.6), 0 4px 20px rgba(0, 0, 0, 0.8)",
              transform: `translateY(${scrollY * -0.4}px)`,
            }}
          >
            <span className="text-white drop-shadow-2xl">ACRES</span>
          </motion.h1>

          {/* Subtitle with better contrast */}
          <motion.p
            variants={slideUpVariants}
            className="text-2xl md:text-3xl lg:text-4xl text-white font-medium mb-8 max-w-6xl leading-relaxed drop-shadow-2xl"
            style={{
              transform: `translateY(${scrollY * -0.3}px)`,
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.9)",
            }}
          >
            African Construction & Real Estate Summit
          </motion.p>

          {/* Description with better contrast */}
          <motion.p
            variants={slideUpVariants}
            className="text-lg md:text-xl text-blue-50 leading-relaxed max-w-4xl mx-auto mb-12 drop-shadow-xl"
            style={{
              transform: `translateY(${scrollY * -0.25}px)`,
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.8)",
            }}
          >
            Connecting Africa&apos;s construction and real estate leaders,
            investors, and innovators to build the continent&apos;s sustainable
            future.
          </motion.p>

          {/* Buttons with better contrast */}
          <motion.div
            variants={slideUpVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            style={{
              transform: `translateY(${scrollY * -0.2}px)`,
            }}
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold text-lg shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 flex items-center border border-blue-400/50"
            >
              Register Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border-2 border-white/40 text-white rounded-full font-semibold text-lg backdrop-blur-lg bg-black/30 hover:bg-white/20 hover:border-white/60 transition-all duration-300 shadow-xl"
            >
              View Program
            </motion.button>
          </motion.div>

          {/* Stats with better contrast */}
          <motion.div
            variants={slideUpVariants}
            className="grid grid-cols-3 gap-8 max-w-4xl mx-auto"
            style={{
              transform: `translateY(${scrollY * -0.15}px)`,
            }}
          >
            {[
              { icon: Users, label: "5000+", desc: "Attendees" },
              { icon: MapPin, label: "40+", desc: "Countries" },
              { icon: Calendar, label: "2", desc: "Days" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="flex flex-col items-center p-4 rounded-xl bg-black/60 backdrop-blur-lg border border-white/20 hover:bg-black/70 hover:border-white/30 transition-all duration-300 shadow-xl"
              >
                <stat.icon className="w-6 h-6 text-blue-300 mb-2" />
                <div className="text-xl font-bold text-white mb-1 drop-shadow-lg">
                  {stat.label}
                </div>
                <div className="text-blue-200 text-sm drop-shadow-md">
                  {stat.desc}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom section with better contrast */}
        <motion.div
          variants={slideUpVariants}
          className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl text-white text-xl md:text-2xl font-medium drop-shadow-2xl"
          style={{
            transform: `translateY(${scrollY * -0.1}px)`,
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.9)",
          }}
        >
          <div className="mb-4 md:mb-0">March 15-16, 2025</div>
          <div className="hidden md:block w-48 h-px bg-white/50 shadow-lg" />
          <div>Abuja & Port Harcourt</div>
        </motion.div>
      </div>
    </motion.section>
  );
}
