"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, Lightbulb, Target, Users, Plane, Trophy, Star, Briefcase, Mic,
  Megaphone, DollarSign, Building, Utensils, PieChart, Calendar, MapPin, Mail, Camera
} from "lucide-react";
import React, { useRef } from "react";

// Torn Edge SVG Definition Component
const TornEdgeSVG = () => (
  <svg width="0" height="0" className="absolute hidden">
    <defs>
      <filter id="torn-edge" x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G" />
      </filter>
      <filter id="torn-edge-light" x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="2" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>
  </svg>
);

const CutoutLetter = ({ char, rot, bg, textCol, delay, yOffset = 0 }: { char: string, rot: number, bg: string, textCol: string, delay: number, yOffset?: number }) => (
  <motion.div 
    initial={{ scale: 0, rotateZ: -180, opacity: 0, y: 50 }}
    animate={{ scale: 1, rotateZ: rot, opacity: 1, y: yOffset }}
    transition={{ type: "spring", stiffness: 200, damping: 15, delay: delay }}
    whileHover={{ scale: 1.2, rotateZ: 0, zIndex: 50, y: 0 }}
    className={`inline-block flex-shrink-0 ${bg} ${textCol} font-marker filter-torn text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl px-3 py-2 md:px-4 md:py-2 mx-0.5 md:mx-1 shadow-[4px_4px_0px_rgba(0,0,0,0.1)] cursor-pointer`}
  >
    {char}
  </motion.div>
);

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  
  // Gallery 3D sequence refs and transforms
  const galleryRef = useRef(null);
  const { scrollYProgress: galleryProgress } = useScroll({
    target: galleryRef,
    offset: ["start start", "end end"]
  });

  const g1Scale = useTransform(galleryProgress, [0, 0.2, 0.4], [0.5, 1, 5]);
  const g1Opacity = useTransform(galleryProgress, [0, 0.1, 0.3, 0.4], [0, 1, 1, 0]);
  const g1Rotate = useTransform(galleryProgress, [0, 0.4], [-10, 10]);

  const g2Scale = useTransform(galleryProgress, [0.15, 0.35, 0.6], [0.5, 1, 5]);
  const g2Opacity = useTransform(galleryProgress, [0.15, 0.25, 0.45, 0.6], [0, 1, 1, 0]);
  const g2Rotate = useTransform(galleryProgress, [0.15, 0.6], [15, -15]);

  const g3Scale = useTransform(galleryProgress, [0.35, 0.55, 0.8], [0.5, 1, 5]);
  const g3Opacity = useTransform(galleryProgress, [0.35, 0.45, 0.65, 0.8], [0, 1, 1, 0]);
  const g3Rotate = useTransform(galleryProgress, [0.35, 0.8], [-20, 5]);

  const g4Scale = useTransform(galleryProgress, [0.55, 0.75, 1], [0.5, 1, 5]);
  const g4Opacity = useTransform(galleryProgress, [0.55, 0.65, 0.85, 1], [0, 1, 1, 0]);
  const g4Rotate = useTransform(galleryProgress, [0.55, 1], [5, -20]);

  const gTextScale = useTransform(galleryProgress, [0.8, 1], [0.5, 1]);
  const gTextOpacity = useTransform(galleryProgress, [0.8, 0.9, 1], [0, 1, 1]);
  
  // Parallax and 3D transforms
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroY = useTransform(scrollYProgress, [0, 0.3], ["0%", "15%"]);
  const heroRotateX = useTransform(scrollYProgress, [0, 0.3], [0, 15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  
  const doodle1Y = useTransform(scrollYProgress, [0, 1], ["0px", "600px"]);
  const doodle1Rotate = useTransform(scrollYProgress, [0, 1], [-12, 180]);
  
  const doodle2Y = useTransform(scrollYProgress, [0, 1], ["0px", "-400px"]);
  const doodle2Rotate = useTransform(scrollYProgress, [0, 1], [12, -90]);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const fadeIn3D: any = {
    hidden: { opacity: 0, y: 50, rotateX: -45, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 } 
    }
  };

  return (
    <main className="min-h-screen text-slate-800 overflow-x-hidden relative">
      <TornEdgeSVG />

      {/* Decorative Grid Lines - Parallax */}
      <motion.div className="fixed inset-0 pointer-events-none z-[-1]" style={{
        backgroundImage: "linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        opacity: 0.4,
        y: bgY
      }} />

      {/* NAVIGATION */}
      <motion.nav 
        initial={{ y: -100 }} animate={{ y: 0 }} transition={{ type: "spring", stiffness: 100 }}
        className="fixed w-full z-50 bg-[#fdfbf7]/90 backdrop-blur-md border-b-4 border-slate-300 border-dashed shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 flex items-center gap-4">
              <img src="/fulshear-logo.png" alt="Fulshear High School" className="h-14 w-auto object-contain filter-torn bg-white p-1" />
              <img src="/deca-logo.png" alt="DECA Logo" className="h-12 w-auto object-contain bg-white p-1 rounded-sm shadow-sm border border-slate-200 filter-torn" />
              <span className="font-heading font-black text-3xl md:text-4xl tracking-tight hidden sm:block text-deca-navy pl-4 border-l-4 border-slate-300 border-dotted ml-2">Fulshear DECA</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8 font-gochi text-3xl md:text-4xl text-slate-700">
                <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
                <a href="#competitions" className="hover:text-blue-600 transition-colors">Competitions</a>
                <a href="#officers" className="hover:text-blue-600 transition-colors">Officers</a>
                <a href="#join" className="bg-deca-gold text-slate-900 font-sans text-sm md:text-base hover:bg-yellow-400 px-6 py-2.5 rounded-sm font-bold shadow-[4px_4px_0px_#0f2040] transition-all transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_#0f2040]">Join Now</a>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* 1. HERO SECTION - INSANE SCRAPBOOK EXPLOSION */}
      <section ref={heroRef} className="relative min-h-[120vh] w-full flex items-center justify-center overflow-hidden bg-slate-900" style={{ perspective: "1200px" }}>
        {/* Dark Grid Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        
        {/* Massive Background Doodles */}
        <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, 800]), rotateZ: 15 }} className="absolute top-10 left-[-10vw] text-slate-700 opacity-50 font-marker text-[25vw] whitespace-nowrap pointer-events-none z-0">MARKETING</motion.div>
        <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, -600]), rotateZ: -10 }} className="absolute bottom-20 right-[-5vw] text-slate-800 opacity-50 font-marker text-[20vw] whitespace-nowrap pointer-events-none z-0">FINANCE</motion.div>

        {/* Floating Polaroids Background Layer */}
        <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, -400]) }} className="absolute top-[10%] left-[5%] rotate-[-15deg] w-48 md:w-72 sticker bg-white p-3 shadow-2xl z-0 border-2 border-slate-200">
           <div className="washi-tape top-[-15px] left-1/2 -translate-x-1/2 washi-pink" />
           <img src="/gallery-1.jpg" className="w-full filter-torn-light" />
        </motion.div>

        <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, 500]) }} className="absolute bottom-[20%] left-[10%] rotate-[20deg] w-56 md:w-80 sticker bg-white p-3 shadow-2xl z-0 border-2 border-slate-200 hidden md:block">
           <div className="washi-tape top-[-15px] left-1/2 -translate-x-1/2 washi-yellow" />
           <img src="/gallery-3.jpg" className="w-full filter-torn-light" />
        </motion.div>

        <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, -300]) }} className="absolute top-[20%] right-[5%] rotate-[10deg] w-64 md:w-96 sticker bg-white p-3 shadow-2xl z-0 border-2 border-slate-200 hidden sm:block">
           <div className="washi-tape top-[-15px] right-4 washi-blue" />
           <div className="washi-tape bottom-[-15px] left-4 washi-pink" />
           <img src="/gallery-4.jpg" className="w-full filter-torn-light" />
        </motion.div>

        <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, 600]) }} className="absolute top-[60%] right-[10%] rotate-[-25deg] w-48 md:w-72 sticker bg-white p-3 shadow-2xl z-0 border-2 border-slate-200 hidden lg:block">
           <div className="washi-tape top-[-15px] left-1/2 -translate-x-1/2 washi-yellow" />
           <img src="/gallery-5.jpg" className="w-full filter-torn-light" />
        </motion.div>

        {/* Floating Logos Layer */}
        <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, 250]) }} className="absolute top-[12%] right-[5%] md:right-[18%] rotate-[-12deg] w-32 md:w-48 sticker bg-white p-2 shadow-[10px_10px_0px_rgba(0,0,0,0.5)] z-10 border-4 border-slate-200 pointer-events-none hidden sm:block">
           <div className="washi-tape top-[-15px] left-1/2 -translate-x-1/2 washi-pink" />
           <img src="/fulshear-logo.png" className="w-full h-auto object-contain filter-torn-light" />
        </motion.div>

        <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }} className="absolute bottom-[35%] left-[2%] md:left-[10%] rotate-[18deg] w-40 md:w-64 sticker bg-white p-2 shadow-[10px_10px_0px_rgba(0,0,0,0.5)] z-10 border-4 border-slate-200 pointer-events-none hidden sm:block">
           <div className="washi-tape top-[-15px] right-8 washi-blue" />
           <img src="/deca-logo.png" className="w-full h-auto object-contain filter-torn-light" />
        </motion.div>

        {/* Central Exploding Typography */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 pointer-events-none mt-20 md:mt-0">
            
            {/* Pinned Note */}
            <motion.div initial={{ scale: 0, rotateZ: 45 }} animate={{ scale: 1, rotateZ: -12 }} transition={{ type: "spring", delay: 0.2 }} className="absolute top-[-80px] md:top-[-150px] left-[5%] md:left-[20%] bg-yellow-300 px-8 py-6 shadow-[8px_8px_0px_rgba(0,0,0,0.3)] filter-torn border-2 border-yellow-400 z-30 pointer-events-auto hover:rotate-0 hover:scale-110 transition-transform">
               <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-5xl">📌</span>
               <span className="font-gochi text-4xl md:text-5xl text-slate-900 block text-center leading-none">Chapter<br/>2025-2026</span>
            </motion.div>

            {/* FULSHEAR overlapping tight */}
            <div className="flex justify-center items-center flex-wrap md:flex-nowrap mb-2 relative z-20 w-full" style={{ perspective: "1000px" }}>
               {[
                 {c:"F", r:-15, y:20, col:"bg-blue-600"}, {c:"U", r:5, y:-10, col:"bg-blue-500"}, 
                 {c:"L", r:-8, y:15, col:"bg-blue-600"}, {c:"S", r:20, y:-5, col:"bg-blue-500"}, 
                 {c:"H", r:-12, y:25, col:"bg-blue-600"}, {c:"E", r:8, y:-15, col:"bg-blue-500"}, 
                 {c:"A", r:-20, y:10, col:"bg-blue-600"}, {c:"R", r:15, y:-20, col:"bg-blue-500"}
               ].map((char, i) => (
                 <motion.div 
                    key={i} initial={{ scale: 0, opacity: 0, y: 200, rotateZ: char.r * 3 }}
                    animate={{ scale: 1, opacity: 1, y: char.y, rotateZ: char.r }}
                    transition={{ type: "spring", stiffness: 150, damping: 12, delay: i * 0.05 + 0.3 }}
                    whileHover={{ scale: 1.2, rotateZ: 0, zIndex: 50, y: 0 }}
                    className={`inline-block ${char.col} text-white font-marker filter-torn text-6xl sm:text-7xl md:text-8xl lg:text-9xl px-4 py-2 md:px-6 md:py-4 -mx-1 md:-mx-4 shadow-[8px_8px_0px_rgba(0,0,0,0.3)] cursor-pointer border-2 border-blue-300 pointer-events-auto`}
                 >
                   {char.c}
                 </motion.div>
               ))}
            </div>

            {/* DECA Massive Overlap */}
            <div className="flex justify-center items-center relative z-10 -mt-10 md:-mt-20" style={{ perspective: "1000px" }}>
               {[
                 {c:"D", r:10, y:0}, {c:"E", r:-15, y:30}, {c:"C", r:5, y:-10}, {c:"A", r:-8, y:20}
               ].map((char, i) => (
                 <motion.div 
                    key={i} initial={{ scale: 0, opacity: 0, rotateZ: char.r * 2 }}
                    animate={{ scale: 1, opacity: 1, y: char.y, rotateZ: char.r }}
                    transition={{ type: "spring", stiffness: 100, damping: 10, delay: i * 0.1 + 0.8 }}
                    whileHover={{ scale: 1.1, rotateZ: 0, zIndex: 50 }}
                    className="inline-block bg-yellow-400 text-slate-900 font-marker filter-torn text-[100px] sm:text-[150px] md:text-[200px] lg:text-[250px] px-4 py-2 -mx-4 md:-mx-8 shadow-[12px_12px_0px_rgba(0,0,0,0.4)] cursor-pointer border-4 border-yellow-200 pointer-events-auto leading-none"
                 >
                   {char.c}
                 </motion.div>
               ))}
            </div>
            
            {/* Floating Banner */}
            <motion.div 
              initial={{ x: "100vw", rotateZ: 20 }} animate={{ x: 0, rotateZ: -4 }} transition={{ type: "spring", damping: 15, delay: 1.5 }}
              className="absolute bottom-[-100px] md:bottom-[-50px] right-[-5%] md:right-[5%] bg-pink-500 text-white px-10 md:px-20 py-4 md:py-6 filter-torn shadow-[15px_15px_0px_rgba(0,0,0,0.4)] z-40 pointer-events-auto hover:rotate-0 transition-transform"
            >
              <div className="washi-tape top-[-20px] left-10 washi-yellow scale-150" />
              <div className="washi-tape top-[-20px] right-10 washi-blue scale-150" />
              <span className="font-gochi text-3xl md:text-6xl font-bold">&quot;Future Leaders in Marketing &amp; Finance&quot;</span>
            </motion.div>
        </div>
        
        {/* Massive Actions */}
        <div className="absolute bottom-16 md:bottom-24 left-4 md:left-[10%] z-50 flex flex-col md:flex-row gap-8">
            <motion.a 
              initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2.0, type: "spring" }}
              href="#join" className="group bg-white text-slate-900 font-marker text-3xl md:text-5xl px-8 md:px-12 py-4 md:py-6 filter-torn shadow-[10px_10px_0px_#d4af37] border-4 border-slate-900 transform rotate-3 hover:rotate-0 hover:scale-110 transition-all flex items-center gap-4"
            >
              <div className="washi-tape top-[-15px] left-1/2 -translate-x-1/2 washi-blue scale-125" />
              JOIN NOW <ArrowRight className="w-8 h-8 md:w-10 md:h-10 group-hover:translate-x-2 transition-transform" />
            </motion.a>
        </div>

        {/* Torn Edge Transition to next section */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-[#fdfbf7] filter-torn translate-y-1/2 z-50"></div>
      </section>

      {/* 2. COMPETITIONS SECTION - Scrapbook Upgrade */}
      <section id="competitions" className="py-32 relative overflow-hidden bg-[#fdfbf7]">
        
        {/* Floating background doodles for Competitions */}
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0.3, 0.7], ["0px", "300px"]), rotateZ: 15 }}
          className="absolute top-40 left-10 text-yellow-300 opacity-60 font-marker text-9xl select-none z-0"
        >
          *
        </motion.div>
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0.3, 0.7], ["0px", "-200px"]), rotateZ: -10 }}
          className="absolute bottom-40 right-10 text-blue-300 opacity-40 font-marker text-9xl select-none z-0"
        >
          +
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 50, rotateX: 20 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-24 relative"
          >
            {/* Highlighter blob behind text */}
            <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-[400px] md:w-[800px] h-32 bg-pink-200 opacity-60 mix-blend-multiply filter-torn z-0 transform -rotate-2"></div>
            <h2 className="text-6xl md:text-8xl font-marker text-slate-800 mb-6 relative z-10 transform -rotate-1" style={{textShadow: "6px 6px 0px white"}}>Competitive Events</h2>
            <p className="font-gochi text-5xl text-blue-600 mt-6 relative z-10">Over 50+ events to choose from!</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12" style={{ perspective: "1000px" }}>
            {[
              { icon: Megaphone, title: "Marketing", color: "text-blue-600", bg: "bg-blue-100", border: "border-blue-400", desc: "Pitch creative campaigns and brand strategies." },
              { icon: DollarSign, title: "Finance", color: "text-emerald-600", bg: "bg-emerald-100", border: "border-emerald-400", desc: "Solve real-world business cases under pressure." },
              { icon: Lightbulb, title: "Entrepreneurship", color: "text-amber-600", bg: "bg-amber-100", border: "border-amber-400", desc: "Develop innovative startups and business plans." },
              { icon: Utensils, title: "Hospitality", color: "text-orange-600", bg: "bg-orange-100", border: "border-orange-400", desc: "Manage hotels, execute events, and optimize tourism." },
              { icon: Building, title: "Business Mgmt", color: "text-purple-600", bg: "bg-purple-100", border: "border-purple-400", desc: "Lead teams, solve HR challenges, and strategize." },
              { icon: PieChart, title: "Financial Lit.", color: "text-pink-600", bg: "bg-pink-100", border: "border-pink-400", desc: "Master personal money management and wealth building." }
            ].map((category, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn3D} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ delay: idx * 0.15 }}
                whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5, zIndex: 50 }}
                className={`relative bg-white p-8 shadow-[12px_12px_0px_rgba(0,0,0,0.15)] border-t-[10px] ${category.border} border-x-4 border-b-4 border-slate-200 transition-transform duration-300 filter-torn-light`}
              >
                {/* Washi Tape */}
                <div className={`washi-tape top-[-20px] left-1/2 -translate-x-1/2 scale-125 ${idx % 2 === 0 ? 'washi-pink' : 'washi-yellow'}`} />

                {/* Giant watermark icon */}
                <category.icon className={`absolute -bottom-8 -right-8 w-56 h-56 ${category.color} opacity-10 transform -rotate-12 pointer-events-none z-0`} />

                {/* Torn paper Icon Badge */}
                <div className={`w-28 h-28 flex items-center justify-center ${category.bg} filter-torn border-4 border-dashed ${category.border} mb-8 transform -rotate-3 relative z-10`}>
                  <category.icon className={`w-14 h-14 ${category.color} stroke-[2.5px]`} />
                </div>

                <h3 className="text-4xl font-marker text-slate-800 mb-4 relative z-10">{category.title}</h3>
                <p className="text-slate-700 font-gochi text-3xl leading-relaxed relative z-10">{category.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OFFICER TEAM SECTION - 3D Stickers */}
      <section id="officers" className="py-32 relative overflow-hidden bg-blue-50/50 border-y-4 border-dashed border-slate-300">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply blur-3xl opacity-50 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateZ: -10 }} whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }} viewport={{ once: true }}
            className="text-center mb-32 relative"
          >
            <h2 className="font-gochi text-6xl text-pink-500 mb-4 relative z-10 -rotate-3">Meet Our</h2>
            <h2 className="text-6xl md:text-8xl font-black font-marker text-slate-800 inline-block relative z-10 bg-white px-8 py-4 border-8 border-slate-800 shadow-[12px_12px_0px_#cbd5e1] rotate-1">OFFICER TEAM</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-32" style={{ perspective: "1200px" }}>
            {[
              { role: "President", name: "Aubrie Richter", img: "/officer-aubrie.jpg", rot: -3, tape: "washi-blue" },
              { role: "Competition VP", name: "Haley Zhang", img: "/officer-haley.jpg", rot: 3, tape: "washi-pink" },
              { role: "Treasurer", name: "Shivank Kanagala", img: "/officer-shivank.jpg", rot: -2, tape: "washi-yellow" },
              { role: "Hospitality VP", name: "Michael Reyes", img: "/officer-michael.jpg", rot: 4, tape: "washi-blue" },
              { role: "Public Relations VP", name: "Brandon Le", img: "/officer-brandon.jpg", rot: -4, tape: "washi-yellow" }
            ].map((officer, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn3D} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} transition={{ delay: idx * 0.15 }}
                className="relative flex flex-col items-center"
                style={{ rotateZ: officer.rot }}
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotateY: 10, rotateX: -10, rotateZ: 0 }} transition={{ type: "spring" }}
                  className="sticker bg-white w-full max-w-[340px] aspect-[3/4] z-10 relative shadow-[14px_14px_30px_rgba(0,0,0,0.2)] border-4 border-slate-200 cursor-grab active:cursor-grabbing"
                >
                  <div className={`washi-tape top-[-20px] left-1/2 -translate-x-1/2 scale-125 ${officer.tape}`} />
                  <img src={officer.img} alt={officer.name} className="w-full h-full object-cover filter-torn-light pointer-events-none" />
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.1, y: 10 }}
                  className="absolute -bottom-16 bg-[#fdfbf7] filter-torn px-10 py-6 shadow-[8px_8px_20px_rgba(0,0,0,0.15)] z-20 w-[115%] max-w-[420px] text-center border-4 border-slate-300 transform rotate-2 cursor-pointer"
                >
                  <div className="text-blue-600 font-bold text-base uppercase tracking-widest mb-2 font-sans border-b-4 border-dashed border-blue-200 pb-2">{officer.role}</div>
                  <div className="text-slate-800 font-gochi text-5xl mt-4">{officer.name}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GALLERY SECTION - 3D FLY-THROUGH SCROLL ANIMATION */}
      <section ref={galleryRef} className="h-[400vh] relative bg-slate-900 border-y-8 border-slate-800 w-full mt-10 shadow-inner">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center" style={{ perspective: "2000px" }}>
          
          {/* Background grid zooming */}
          <motion.div style={{ scale: useTransform(galleryProgress, [0, 1], [1, 3]), backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '50px 50px' }} className="absolute inset-0 opacity-20 pointer-events-none"></motion.div>

          <div className="absolute top-10 left-0 w-full text-center z-50">
             <h2 className="text-4xl md:text-6xl font-marker text-white tracking-widest opacity-50 uppercase">Scroll to dive in ↓</h2>
          </div>

          {/* Intro Text */}
          <motion.div style={{ opacity: useTransform(galleryProgress, [0, 0.1], [1, 0]), scale: useTransform(galleryProgress, [0, 0.1], [1, 5]) }} className="absolute z-10 text-center pointer-events-none">
             <h2 className="text-6xl md:text-9xl font-black font-marker text-white transform -rotate-2" style={{textShadow: "6px 6px 0px #e11d48"}}>THE DECA<br/>EXPERIENCE</h2>
          </motion.div>

          {/* Polaroid 1 */}
          <motion.div style={{ scale: g1Scale, opacity: g1Opacity, rotateZ: g1Rotate }} className="absolute z-20 w-[80vw] max-w-2xl sticker bg-white p-6 shadow-[20px_20px_50px_rgba(0,0,0,0.5)] border-4 border-slate-200 flex flex-col items-center">
             <div className="washi-tape top-[-20px] left-1/2 -translate-x-1/2 scale-150 washi-blue" />
             <img src="/gallery-1.jpg" className="w-full h-auto border-4 border-slate-100 filter-torn-light pointer-events-none" />
             <p className="font-gochi text-center mt-6 text-5xl text-slate-800 bg-yellow-200 px-6 py-2 filter-torn transform -rotate-1">HTX Sign Trip!</p>
          </motion.div>

          {/* Polaroid 2 */}
          <motion.div style={{ scale: g2Scale, opacity: g2Opacity, rotateZ: g2Rotate }} className="absolute z-30 w-[80vw] max-w-2xl sticker bg-white p-6 shadow-[20px_20px_50px_rgba(0,0,0,0.5)] border-4 border-slate-200 flex flex-col items-center">
             <div className="washi-tape top-[-20px] left-10 scale-150 washi-pink" />
             <div className="washi-tape bottom-[-20px] right-10 scale-150 washi-yellow" />
             <img src="/gallery-2.jpg" className="w-full h-auto border-4 border-slate-100 filter-torn-light pointer-events-none" />
             <p className="font-gochi text-center mt-6 text-5xl text-slate-800 bg-pink-200 px-6 py-2 filter-torn transform rotate-2">SCDC State Conference</p>
          </motion.div>

          {/* Polaroid 3 */}
          <motion.div style={{ scale: g3Scale, opacity: g3Opacity, rotateZ: g3Rotate }} className="absolute z-40 w-[80vw] max-w-2xl sticker bg-white p-6 shadow-[20px_20px_50px_rgba(0,0,0,0.5)] border-4 border-slate-200 flex flex-col items-center">
             <div className="washi-tape top-[-20px] right-1/2 scale-150 washi-yellow" />
             <img src="/gallery-3.jpg" className="w-full h-auto border-4 border-slate-100 filter-torn-light pointer-events-none" />
             <p className="font-gochi text-center mt-6 text-5xl text-slate-800 bg-blue-200 px-6 py-2 filter-torn transform -rotate-3">Astros Game Memories</p>
          </motion.div>

          {/* Polaroid 4 */}
          <motion.div style={{ scale: g4Scale, opacity: g4Opacity, rotateZ: g4Rotate }} className="absolute z-50 w-[80vw] max-w-2xl sticker bg-white p-6 shadow-[20px_20px_50px_rgba(0,0,0,0.5)] border-4 border-slate-200 flex flex-col items-center">
             <div className="washi-tape top-[-20px] left-1/4 scale-150 washi-blue" />
             <img src="/gallery-5.jpg" className="w-full h-auto border-4 border-slate-100 filter-torn-light pointer-events-none" />
             <p className="font-gochi text-center mt-6 text-5xl text-slate-800 bg-emerald-200 px-6 py-2 filter-torn transform rotate-1">Winning Medals!</p>
          </motion.div>

          {/* Outro Text */}
          <motion.div style={{ scale: gTextScale, opacity: gTextOpacity }} className="absolute z-50 text-center bg-yellow-300 p-10 border-4 border-slate-900 shadow-[15px_15px_0px_#e11d48] filter-torn transform rotate-3">
             <h2 className="text-5xl md:text-7xl font-marker text-slate-900 leading-tight">These could be<br/>YOUR memories.</h2>
          </motion.div>
        </div>
      </section>

      {/* 5. JOIN CTA & FOOTER */}
      <section id="join" className="py-40 relative overflow-hidden text-center bg-pink-100 border-b-8 border-slate-800" style={{ perspective: "1000px" }}>
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0.8, 1], ["0px", "-200px"]), rotateZ: 12 }}
          className="absolute top-20 right-20 text-pink-300 font-gochi text-7xl opacity-50 select-none z-0"
        >
          Join Us!
        </motion.div>
        
        <motion.div 
          initial={{ scale: 0.8, rotateX: 45, opacity: 0 }} whileInView={{ scale: 1, rotateX: 0, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring" }}
          className="max-w-4xl mx-auto px-4 relative z-10"
        >
          <h2 className="font-gochi text-7xl text-blue-600 mb-6 transform -rotate-3">Ready to join?</h2>
          <h3 className="text-5xl md:text-8xl font-marker text-slate-800 mb-16 uppercase" style={{textShadow: "6px 6px 0px white"}}>Become part of the family!</h3>
          <motion.a 
            whileHover={{ scale: 1.1, rotateZ: 0 }}
            href="#" className="inline-block bg-yellow-400 text-slate-900 font-marker text-5xl px-16 py-6 shadow-[10px_10px_0px_#1e293b] border-4 border-slate-800 transition-all transform -rotate-2"
          >
            Sign Up Now!
          </motion.a>
        </motion.div>
      </section>

      <footer className="bg-deca-navy text-white pt-24 pb-16 text-center relative mt-20">
        <div className="absolute top-0 left-0 w-full h-6 bg-yellow-400"></div>
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-16">
            <img src="/fulshear-logo.png" className="h-24 w-auto object-contain filter-torn bg-white p-2 transform -rotate-3 shadow-md" />
            <span className="font-marker text-4xl md:text-5xl text-yellow-400 tracking-wider">Fulshear High School DECA</span>
            <img src="/deca-logo.png" className="h-20 w-auto object-contain filter-torn bg-white p-2 transform rotate-2 shadow-md" />
          </div>
          <div className="flex justify-center gap-12 mb-16 font-bold font-sans text-xl md:text-2xl tracking-widest uppercase">
            <a href="https://www.instagram.com/fulsheardeca/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 hover:underline underline-offset-4">Instagram</a>
            <a href="https://texasdeca.org" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 hover:underline underline-offset-4">Texas DECA</a>
            <a href="https://deca.org" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 hover:underline underline-offset-4">National DECA</a>
          </div>
          <p className="text-blue-300 font-gochi text-3xl">
            &copy; {new Date().getFullYear()} Fulshear High School DECA. Built with ❤️ for future leaders.
          </p>
        </div>
      </footer>
    </main>
  );
}
