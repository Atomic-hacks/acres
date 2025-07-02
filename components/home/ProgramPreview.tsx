/* eslint-disable @typescript-eslint/no-explicit-any */
// components/ProgramPreview.tsx
"use client";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Users,
  ArrowRight,
  Award,
  Handshake,
} from "lucide-react";

const programHighlights = [
  {
    day: "Day 1",
    date: "March 15, 2024",
    theme: "Innovation & Technology",
    icon: Award,
    color: "from-blue-400 to-blue-500",
    events: [
      {
        time: "09:00 AM",
        title: "Opening Keynote: The Future of African Construction",
        speaker: "Dr. Amina Hassan",
        type: "Keynote",
      },
      {
        time: "11:30 AM",
        title: "PropTech Revolution: Digital Transformation in Real Estate",
        speaker: "Panel Discussion",
        type: "Panel",
      },
      {
        time: "02:00 PM",
        title: "Sustainable Building Materials: African Innovations",
        speaker: "Prof. Kwame Asante",
        type: "Workshop",
      },
    ],
  },
  {
    day: "Day 2",
    date: "March 16, 2024",
    theme: "Investment & Partnerships",
    icon: Handshake,
    color: "from-blue-300 to-blue-400",
    events: [
      {
        time: "09:00 AM",
        title: "Mega Projects: Infrastructure Development Across Africa",
        speaker: "Minister John Okafor",
        type: "Keynote",
      },
      {
        time: "11:00 AM",
        title: "Real Estate Investment Trusts (REITs) in Africa",
        speaker: "Financial Experts Panel",
        type: "Panel",
      },
      {
        time: "03:00 PM",
        title: "Networking & Deal-Making Sessions",
        speaker: "All Attendees",
        type: "Networking",
      },
    ],
  },
];

const eventTypeStyles = {
  Keynote: "bg-blue-500/20 text-blue-200 border-blue-400/50",
  Panel: "bg-blue-400/20 text-blue-100 border-blue-300/50",
  Workshop: "bg-blue-300/20 text-blue-50 border-blue-200/50",
  Networking: "bg-blue-600/20 text-blue-300 border-blue-500/50",
};

// Holographic Program Card Component
const HolographicProgramCard = ({
  day,
  dayIndex,
}: {
  day: any;
  dayIndex: number;
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, x: dayIndex === 0 ? -50 : 50 },
      visible: { opacity: 1, x: 0 },
    }}
    initial={{ opacity: 0, rotateY: -30, scale: 0.8 }}
    whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: dayIndex * 0.2, duration: 0.8, ease: "easeOut" }}
    whileHover={{
      rotateY: dayIndex === 0 ? 15 : -15,
      rotateX: 10,
      scale: 1.02,
      y: -8,
      transition: { duration: 0.3 },
    }}
    className="group"
  >
    {/* Holographic glow effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-500/15 to-blue-400/10 rounded-3xl blur-xl animate-pulse group-hover:blur-2xl transition-all duration-500" />

    {/* Main card */}
    <div className="relative bg-black/60 backdrop-blur-lg border border-blue-300/40 rounded-3xl p-1 shadow-2xl hover:shadow-blue-500/30 transition-all duration-500">
      <div className="bg-black/40 rounded-3xl h-full p-6 sm:p-8 backdrop-blur-sm border border-white/10 hover:border-blue-300/50 transition-all duration-300">
        {/* Day Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
          <div
            className={`w-16 h-16 bg-gradient-to-br ${day.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-blue-500/30 border border-blue-400/50 flex-shrink-0`}
          >
            <day.icon className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors drop-shadow-lg">
              {day.day}
            </h3>
            <p className="text-blue-100 flex items-center gap-2 mt-1 drop-shadow-md">
              <Calendar className="w-4 h-4" />
              {day.date}
            </p>
          </div>
        </div>

        {/* Theme */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-blue-300 mb-2 drop-shadow-lg">
            Theme:
          </h4>
          <p className="text-xl sm:text-2xl text-white font-medium drop-shadow-lg">
            {day.theme}
          </p>
        </div>

        {/* Events Timeline */}
        <div className="space-y-4 sm:space-y-6">
          {day.events.map((event: any, eventIndex: number) => (
            <motion.div
              key={eventIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * eventIndex }}
              className="flex flex-col sm:flex-row gap-4 group/event hover:bg-white/5 p-3 sm:p-4 rounded-xl transition-all duration-300 border border-transparent hover:border-blue-400/30"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-blue-400/30">
                  <Clock className="w-5 h-5 text-blue-300" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-blue-200 drop-shadow-md">
                    {event.time}
                  </span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full border ${
                      eventTypeStyles[
                        event.type as keyof typeof eventTypeStyles
                      ]
                    } backdrop-blur-sm w-fit`}
                  >
                    {event.type}
                  </span>
                </div>
                <h5 className="font-semibold text-white mb-1 group-hover/event:text-blue-300 transition-colors drop-shadow-lg text-sm sm:text-base leading-tight">
                  {event.title}
                </h5>
                <p className="text-sm text-blue-100 flex items-center gap-1 drop-shadow-md">
                  <Users className="w-3 h-3 flex-shrink-0" />
                  <span className="truncate">{event.speaker}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

export function ProgramPreview() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden py-12 sm:py-20">
      {/* Background Effects - Matching AboutPreview */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/15 to-blue-300/25" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block px-4 py-2 bg-black/60 backdrop-blur-lg border border-blue-300/40 text-blue-100 text-sm font-medium mb-6 shadow-2xl">
            Event Program
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Two Days of
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100">
              Excellence
            </span>
          </h2>

          <p
            className="text-lg sm:text-xl text-blue-50 max-w-4xl mx-auto leading-relaxed px-4"
            style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.8)" }}
          >
            Immerse yourself in cutting-edge discussions, workshops, and
            networking opportunities designed to accelerate Africa&apos;s
            construction and real estate future.
          </p>
        </motion.div>

        {/* Program Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-16"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3, delayChildren: 0.2 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {programHighlights.map((day, dayIndex) => (
            <HolographicProgramCard
              key={dayIndex}
              day={day}
              dayIndex={dayIndex}
            />
          ))}
        </motion.div>

        {/* Program CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 border border-blue-400/50"
          >
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="hidden sm:inline">View Full Program</span>
            <span className="sm:hidden">Full Program</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
