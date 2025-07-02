// components/SpeakersPreview.tsx
"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Linkedin,
  Twitter,
  Award,
  Building,
  MapPin,
  Users,
} from "lucide-react";

const featuredSpeakers = [
  {
    name: "Dr. Amina Hassan",
    title: "Chief Executive Officer",
    company: "AfriCorp Real Estate",
    location: "Lagos, Nigeria",
    image: "/api/placeholder/300/300",
    bio: "Leading Africa's largest real estate development firm with over $2B in completed projects across 12 countries.",
    specialties: [
      "PropTech Innovation",
      "Sustainable Development",
      "Pan-African Investment",
    ],
    social: {
      linkedin: "#",
      twitter: "#",
    },
    featured: true,
    color: "from-blue-400 to-blue-500",
  },
  {
    name: "Minister John Okafor",
    title: "Minister of Housing & Urban Development",
    company: "Federal Republic of Nigeria",
    location: "Abuja, Nigeria",
    image: "/api/placeholder/300/300",
    bio: "Spearheading Nigeria's national housing policy and infrastructure development initiatives worth $5B+.",
    specialties: [
      "Policy & Regulation",
      "Infrastructure Development",
      "Public-Private Partnerships",
    ],
    social: {
      linkedin: "#",
      twitter: "#",
    },
    featured: true,
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Prof. Kwame Asante",
    title: "Director of Sustainable Architecture",
    company: "Ghana Institute of Technology",
    location: "Accra, Ghana",
    image: "/api/placeholder/300/300",
    bio: "Pioneering sustainable building materials research and green construction practices across West Africa.",
    specialties: [
      "Sustainable Materials",
      "Green Building",
      "Research & Development",
    ],
    social: {
      linkedin: "#",
    },
    featured: true,
    color: "from-blue-300 to-blue-400",
  },
  {
    name: "Sarah Mwangi",
    title: "Managing Partner",
    company: "East Africa Property Fund",
    location: "Nairobi, Kenya",
    image: "/api/placeholder/300/300",
    bio: "Managing $800M+ in real estate investments across East Africa with focus on affordable housing.",
    specialties: [
      "Investment Strategy",
      "Affordable Housing",
      "Market Analysis",
    ],
    social: {
      linkedin: "#",
      twitter: "#",
    },
    featured: false,
    color: "from-blue-200 to-blue-300",
  },
];

// Holographic Speaker Card Component
const HolographicSpeakerCard = ({
  speaker,
  index,
}: {
  speaker: (typeof featuredSpeakers)[0];
  index: number;
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    }}
    initial={{ opacity: 0, rotateY: -30, scale: 0.8 }}
    whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
    whileHover={{
      y: -8,
      transition: { duration: 0.3 },
    }}
    className="group relative"
  >
    {/* Main card */}
    <div className="bg-black/60 backdrop-blur-lg border border-white/20 rounded-2xl p-8 h-full hover:border-blue-300/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:bg-black/70">
      {/* Speaker Avatar Section */}
      <div className="relative mb-6">
        <div className="relative">
          <div
            className={`w-16 h-16 bg-gradient-to-r ${speaker.color} rounded-xl flex items-center justify-center mx-auto shadow-2xl shadow-blue-500/30 border border-blue-400/50 group-hover:scale-110 transition-transform duration-300`}
          >
            <span className="text-xl font-bold text-white drop-shadow-lg">
              {speaker.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>

          {/* Social Icons Overlay */}
          <motion.div
            className="absolute -bottom-2 -right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
          >
            {speaker.social.linkedin && (
              <motion.a
                href={speaker.social.linkedin}
                whileHover={{ scale: 1.1 }}
                className="w-8 h-8 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-300 hover:bg-blue-500/20 transition-colors border border-blue-400/50"
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
            )}
            {speaker.social.twitter && (
              <motion.a
                href={speaker.social.twitter}
                whileHover={{ scale: 1.1 }}
                className="w-8 h-8 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-300 hover:bg-blue-500/20 transition-colors border border-blue-400/50"
              >
                <Twitter className="w-4 h-4" />
              </motion.a>
            )}
          </motion.div>
        </div>
      </div>

      {/* Speaker Details */}
      <div>
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors drop-shadow-lg">
          {speaker.name}
        </h3>
        <p className="text-blue-300 font-semibold mb-2 drop-shadow-md text-sm">
          {speaker.title}
        </p>
        <p className="text-blue-100 text-sm mb-2 flex items-center gap-1 drop-shadow-md">
          <Building className="w-4 h-4 flex-shrink-0" />
          <span className="leading-tight">{speaker.company}</span>
        </p>
        <p className="text-blue-200 text-sm mb-4 flex items-center gap-1 drop-shadow-md">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          {speaker.location}
        </p>

        <p className="text-blue-50 text-sm leading-relaxed mb-4 drop-shadow-md line-clamp-3">
          {speaker.bio}
        </p>

        {/* Specialties */}
        <div className="flex flex-wrap gap-2">
          {speaker.specialties.slice(0, 2).map((specialty, idx) => (
            <span
              key={idx}
              className="text-xs px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full border border-blue-400/50 backdrop-blur-sm"
            >
              {specialty}
            </span>
          ))}
          {speaker.specialties.length > 2 && (
            <span className="text-xs px-3 py-1 bg-white/10 text-white rounded-full border border-white/20 backdrop-blur-sm">
              +{speaker.specialties.length - 2} more
            </span>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

export function SpeakersPreview() {
  const stats = [
    { number: "12+", label: "Government Officials", icon: Users },
    { number: "25+", label: "Industry CEOs", icon: Building },
    { number: "15+", label: "Tech Innovators", icon: Award },
    { number: "18+", label: "Investment Leaders", icon: Users },
  ];

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
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="inline-block px-4 py-2 bg-black/60 backdrop-blur-lg border border-blue-300/40 text-blue-100 text-sm font-medium mb-6 shadow-2xl">
            Featured Speakers
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Visionary Leaders
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100">
              Shaping Africa
            </span>
          </h1>

          <div className="space-y-6 text-lg text-blue-50 leading-relaxed max-w-4xl">
            <p style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.8)" }}>
              Meet the industry pioneers, government officials, and thought
              leaders who are transforming Africa&apos;s construction and real
              estate landscape.
            </p>
            <p style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.8)" }}>
              Connect with visionaries driving billions in investments across
              25+ African countries while fostering sustainable urban
              development and innovation.
            </p>
          </div>
        </motion.div>

        {/* Featured Speakers Grid */}
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
          {featuredSpeakers
            .filter((speaker) => speaker.featured)
            .map((speaker, index) => (
              <HolographicSpeakerCard
                key={index}
                speaker={speaker}
                index={index}
              />
            ))}
        </motion.div>

        {/* Stats Section - Matching AboutPreview */}
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

        {/* Additional Speakers Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-12"
        >
          <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:shadow-2xl hover:shadow-blue-500/20 hover:bg-black/70 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-2xl shadow-blue-500/30 border border-blue-400/50">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 drop-shadow-lg">
                50+ Industry Leaders
              </h3>
              <p className="text-blue-50 mb-6 max-w-2xl mx-auto drop-shadow-md leading-relaxed">
                Join conversations with ministers, CEOs, architects, and
                investors from across Africa and beyond. Experience diverse
                perspectives on the future of construction and real estate.
              </p>
            </div>
          </div>
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
            <Users className="w-5 h-5" />
            Meet All Speakers
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
