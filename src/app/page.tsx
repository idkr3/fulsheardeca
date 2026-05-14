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

const CutoutLetter = ({ char, rot, bg, textCol, delay }: { char: string, rot: number, bg: string, textCol: string, delay: number }) => (
  <motion.div 
    initial={{ scale: 0, rotateZ: -180, opacity: 0 }}
    animate={{ scale: 1, rotateZ: rot, opacity: 1 }}
    transition={{ type: "spring", stiffness: 200, damping: 15, delay: delay }}
    whileHover={{ scale: 1.2, rotateZ: 0, zIndex: 50 }}
    className={`inline-block flex-shrink-0 ${bg} ${textCol} font-marker filter-torn text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl px-3 py-2 md:px-4 md:py-2 mx-0.5 md:mx-1 shadow-[4px_4px_0px_rgba(0,0,0,0.1)] cursor-pointer`}
  >
    {char}
  </motion.div>
);

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  
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
    <main className="min-h-screen text-slate-800 overflow-x-hidden relative" style={{ perspective: "1200px" }}>
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

      {/* 1. HERO SECTION - 3D Scroll */}
      <section ref={heroRef} className="relative pt-32 pb-20 px-4 flex flex-col items-center justify-center min-h-[90vh]" style={{ transformStyle: "preserve-3d" }}>
        
        {/* Floating background doodles */}
        <motion.div style={{ y: doodle1Y, rotateZ: doodle1Rotate }} className="absolute top-40 right-20 text-blue-300 opacity-60 font-gochi text-6xl select-none z-0">DECA = FUN!</motion.div>
        <motion.div style={{ y: doodle2Y, rotateZ: doodle2Rotate }} className="absolute bottom-40 left-10 text-pink-300 opacity-60 font-gochi text-5xl text-center select-none z-0">Business<br/>Leaders</motion.div>
        
        <motion.div 
          style={{ y: heroY, rotateX: heroRotateX, opacity: heroOpacity }}
          className="relative max-w-5xl mx-auto w-full paper-card p-8 md:p-16 rotate-1 mt-10 bg-white z-10 shadow-[10px_10px_30px_rgba(0,0,0,0.1)] border-2 border-slate-200"
        >
          <div className="washi-tape top-[-15px] left-1/2 -translate-x-1/2 washi-blue" />
          <div className="washi-tape top-[-15px] right-10 rotate-[10deg] washi-yellow" />
          <div className="washi-tape bottom-[-15px] left-10 -rotate-[15deg] washi-pink" />
          
          <div className="text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="inline-block mb-8 px-6 py-2 border-4 border-dashed border-blue-400 bg-blue-50 text-blue-800 font-marker text-2xl -rotate-2 shadow-sm hover:rotate-0 transition-transform">
              Chapter 2025-2026
            </motion.div>
            
            <div className="flex justify-center flex-wrap sm:flex-nowrap gap-1 mb-4 perspective-[1000px]">
               {["F","U","L","S","H","E","A","R"].map((char, i) => (
                 <CutoutLetter key={i} char={char} rot={Math.floor(Math.random()*8)-4} bg="bg-blue-600" textCol="text-white" delay={0.1 * i} />
               ))}
            </div>

            <div className="flex justify-center flex-wrap sm:flex-nowrap gap-1 mb-10 perspective-[1000px]">
               {["D","E","C","A"].map((char, i) => (
                 <CutoutLetter key={i} char={char} rot={Math.floor(Math.random()*8)-4} bg="bg-yellow-400" textCol="text-slate-900" delay={0.8 + (0.1 * i)} />
               ))}
            </div>
            
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5, type: "spring" }} className="inline-block mt-4 mb-10 bg-pink-100 px-8 py-4 transform rotate-2 shadow-sm filter-torn border border-pink-200 hover:scale-110 transition-transform">
              <span className="font-gochi text-4xl md:text-5xl text-pink-700">&quot;Future Leaders in Marketing &amp; Finance&quot;</span>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8 }} className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#join" className="px-10 py-5 bg-deca-navy text-white font-marker text-2xl md:text-3xl shadow-[8px_8px_0px_#d4af37] hover:translate-y-1 hover:shadow-[3px_3px_0px_#d4af37] transition-all flex items-center justify-center gap-2 group transform -rotate-1 border-4 border-deca-navy">
                Join DECA <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#competitions" className="px-10 py-5 bg-white border-4 border-slate-800 text-slate-800 font-marker text-2xl md:text-3xl shadow-[8px_8px_0px_#cbd5e1] hover:translate-y-1 hover:shadow-[3px_3px_0px_#cbd5e1] transition-all flex items-center justify-center transform rotate-1">
                Explore Events!
              </a>
            </motion.div>
          </div>
          
          {/* Parallax Polaroids on Hero */}
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 0.3], [0, -100]) }}
            className="hidden xl:block absolute -right-32 top-20 rotate-6 sticker bg-white w-72 shadow-2xl hover:z-50 hover:scale-110 transition-transform z-0"
          >
             <div className="washi-tape top-[-15px] left-1/2 -translate-x-1/2 washi-pink" />
             <img src="/gallery-1.jpg" className="w-full h-auto border-4 border-slate-100 filter-torn-light pointer-events-none" />
             <p className="font-gochi text-center py-5 text-3xl text-slate-700">Astros Game!</p>
          </motion.div>
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 0.3], [0, -80]) }}
            className="hidden xl:block absolute -left-32 bottom-10 -rotate-6 sticker bg-white w-80 shadow-2xl hover:z-50 hover:scale-110 transition-transform z-0"
          >
             <div className="washi-tape top-[-15px] left-1/2 -translate-x-1/2 washi-yellow" />
             <img src="/gallery-2.jpg" className="w-full h-auto border-4 border-slate-100 filter-torn-light pointer-events-none" />
             <p className="font-gochi text-center py-5 text-3xl text-slate-700">SCDC &apos;26</p>
          </motion.div>
        </motion.div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 perspective-[1000px]">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-32 perspective-[1200px]">
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

      {/* 4. GALLERY SECTION - 3D Parallax */}
      <section className="py-32 mt-10 bg-[#e8e4d9] border-y-8 border-slate-800 relative shadow-inner">
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0.6, 1], ["0px", "300px"]), rotateZ: -12 }}
          className="absolute top-10 left-10 text-slate-500 font-gochi text-6xl opacity-40 select-none z-0"
        >
          Snapshots!
        </motion.div>
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50, rotateX: 30 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true }}
            className="text-center mb-32"
          >
            <h2 className="text-6xl md:text-8xl font-marker text-slate-800 mb-2 transform -rotate-1" style={{textShadow: "6px 6px 0px white"}}>Chapter Memories</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 perspective-[1500px]">
            {[
              { src: "/gallery-1.jpg", desc: "HTX sign trip", rot: 3, tape: "washi-blue", yOffset: 0 },
              { src: "/gallery-2.jpg", desc: "SCDC 2026", rot: -2, tape: "washi-pink", yOffset: 30 },
              { src: "/gallery-3.jpg", desc: "Astros game selfie", rot: 1, tape: "washi-yellow", yOffset: -20 },
              { src: "/gallery-4.jpg", desc: "DECA Day at Daikin Park", rot: -4, tape: "washi-blue", yOffset: 40 },
              { src: "/gallery-5.jpg", desc: "Texas DECA Medals!", rot: 4, tape: "washi-yellow", yOffset: -10 },
              { src: "/gallery-6.jpg", desc: "Bus rides", rot: -1, tape: "washi-pink", yOffset: 20 },
              { src: "/gallery-7.jpg", desc: "Advisor & Members", rot: 2, tape: "washi-blue", yOffset: -30 },
              { src: "/gallery-8.jpg", desc: "Evening bus back", rot: -3, tape: "washi-yellow", yOffset: 10 },
              { src: "/gallery-9.jpg", desc: "Districts staircase", rot: 1, tape: "washi-pink", yOffset: 0 }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.5, rotateY: 45, y: 100 }} 
                whileInView={{ opacity: 1, scale: 1, rotateY: 0, y: item.yOffset }} 
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 80, damping: 15, delay: (idx % 3) * 0.1 }}
                whileHover={{ scale: 1.15, rotateZ: 0, rotateX: 5, rotateY: -5, zIndex: 50, y: item.yOffset - 20 }}
                style={{ rotateZ: item.rot }}
                className="sticker bg-white p-4 md:p-6 group relative shadow-[14px_14px_30px_rgba(0,0,0,0.15)] cursor-crosshair border-4 border-slate-300"
              >
                <div className={`washi-tape top-[-25px] left-1/2 -translate-x-1/2 scale-125 ${item.tape}`} />
                <img src={item.src} className="w-full aspect-square object-cover border-4 border-slate-100 filter-torn-light pointer-events-none" />
                <div className="p-6 text-center bg-yellow-50 mt-4 filter-torn border-2 border-yellow-200">
                  <p className="font-gochi text-3xl text-slate-800">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. JOIN CTA & FOOTER */}
      <section id="join" className="py-40 relative overflow-hidden text-center bg-pink-100 border-b-8 border-slate-800 perspective-[1000px]">
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
            <img src="/fulshear-logo.png" className="h-24 filter brightness-0 invert" />
            <span className="font-marker text-4xl md:text-5xl text-yellow-400 tracking-wider">Fulshear High School DECA</span>
            <img src="/deca-logo.png" className="h-16 filter brightness-0 invert" />
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
