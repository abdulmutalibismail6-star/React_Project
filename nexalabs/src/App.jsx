import React from 'react';
import { Sparkles, ArrowRight, Code, Cpu, Layout } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0914] text-white selection:bg-purple-500 selection:text-white overflow-x-hidden font-sans">
      
      {/* HEADER / NAVBAR */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl tracking-wider">
          <span className="bg-white text-black px-2 py-0.5 rounded font-black">LEE</span>
          <span>Mr. Lee labs</span>
        </div>

      <nav className="w-full py-4 border-b border-white/10 px-4">
        <div className="flex justify-center items-center gap-6 text-sm text-slate-300">
        <a href="#home" className="hover:text-white transition-colors">Home</a>
        <a href="#services" className="hover:text-white transition-colors">Services</a>
        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        </div>
      </nav>
        <button className="bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-2 rounded-full border border-white/10 transition">
          Let's to Lee
        </button>
      </header>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-xs text-purple-300">
            <Sparkles size={14} />
            YOUR DIGITAL GROWTH PARTNER
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-none">
            Mr. Lee turn big ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">digital reality.</span>
          </h1>
          
          <p className="text-gray-400 text-lg max-w-xl">
            Mr. Lee design beautiful websites, build powerful software, and create digital experiences that help businesses grow.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button className="bg-white text-black hover:bg-gray-200 font-medium px-6 py-3 rounded-full flex items-center gap-2 transition group">
              Explore our Works/Services  
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 font-medium px-6 py-3 rounded-full transition">
              What we do
            </button>
          </div>

          <div className="pt-8 flex items-center gap-4 border-t border-white/10 max-w-md">
            <div className="bg-purple-600/20 p-2.5 rounded-full border border-purple-500/30 text-purple-400">
              <Sparkles size={20} />
            </div>
            <div>
              <h4 className="text-sm font-semibold">Where innovative ideas meet existing technology to build the future.</h4>
              <p className="text-xs text-gray-400">Mr. Lee build for what comes next.</p>
            </div>
          </div>
        </div>

        {/* HERO CARD GRAPHIC (Matching Reference Screenshot Exactly) */}
        <div className="lg:col-span-5 relative flex justify-center items-center py-16">
          <div className="relative w-full max-w-[420px]">

            {/* FLOATING TOP-RIGHT BADGE */}
            <div className="absolute -top-6 right-0 z-30 bg-[#16122b]/95 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-2xl text-xs flex items-center gap-2.5 text-purple-200 shadow-2xl">
              <Sparkles size={14} className="text-purple-400 fill-purple-400" /> 
              <span className="font-medium tracking-wide">Creative ideas</span>
            </div>

            {/* BACK CARD (Stacked & Tilted Background Card) */}
            <div className="absolute -top-10 -left-10 right-10 bottom-10 bg-[#f3f0ea] border border-white/10 rounded-[2.5rem] -rotate-12 scale-95 p-8 flex flex-col justify-between opacity-60 pointer-events-none shadow-2xl">
              <div className="text-xs font-mono text-red-400/100">01 /</div>
            </div>

            {/* MAIN FRONT CARD */}
            <div className="relative z-20 bg-gradient-to-b from-[#18132d] via-[#120e24] to-[#0c091a] border border-white/15 rounded-[2.5rem] p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden backdrop-blur-2xl">
              
              {/* Card Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 text-xs font-medium tracking-wider text-gray-300">
                  <span className="w-5 h-5 rounded-md bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-xs font-bold shadow-[0_0_10px_rgba(16,185,129,0.3)]">✳</span>
                  <span className="font-semibold text-white tracking-normal">Mr. Lee labs</span>
                </div>
                <div className="flex gap-1 text-gray-500 tracking-widest font-bold">
                  <span>•</span><span>•</span><span>•</span>
                </div>
              </div>

              {/* Glowing Circle Icon */}
              <div className="my-8 flex justify-center">
                <div className="relative w-32 h-32 rounded-full flex items-center justify-center p-[2px] bg-gradient-to-b from-transparent via-purple-500 to-indigo-600 shadow-[0_0_40px_rgba(168,85,247,0.3)]">
                  <div className="w-full h-full bg-[#0b0817] rounded-full flex items-center justify-center shadow-inner">
                    <span className="text-4xl font-extrabold text-white tracking-tight">LEE</span>
                  </div>
                </div>
              </div>

              {/* Content Text */}
              <div className="text-center space-y-1.5 mb-10">
                <h3 className="text-2xl font-bold tracking-tight text-white">Mr. Lee Built for the future.</h3>
                <p className="text-xs text-gray-400 font-normal">Creative thinking. Smart technology.</p>
              </div>

              {/* Progress / Status Bar */}
              <div className="space-y-2">
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-500 via-indigo-400 to-purple-300 h-full rounded-full w-[70%] shadow-[0_0_12px_rgba(168,85,247,0.8)]"></div>
                </div>
                <div className="flex justify-between items-center text-[11px] text-gray-400 font-mono tracking-wider pt-1">
                  <span className="uppercase font-medium text-[10px]">CREATIVITY</span>
                  <span className="text-gray-300 font-bold">100%</span>
                </div>
              </div>

            </div>

            {/* FLOATING BOTTOM-LEFT BADGE */}
            <div className="absolute -bottom-6 -left-6 z-30 bg-[#16122b]/95 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-2xl text-xs flex items-center gap-2.5 text-purple-200 shadow-2xl">
              <span className="text-purple-400 font-mono text-sm font-bold">↗</span>
              <span className="font-medium tracking-wide">Digital solutions</span>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION DIVIDER LABEL */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <span className="text-xs font-mono text-gray-500 tracking-widest">01 — BUILDING WHAT'S NEXT</span>
      </div>

      {/* WHAT WE DO SECTION */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <span className="text-xs font-semibold text-purple-400 tracking-wider uppercase">What we do</span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-2">Good ideas deserve <br />great execution.</h2>
          <p className="text-gray-400 text-sm mt-3 max-w-md">From the first sketch to the final product, we help you bring your vision to life.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#141026] border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-purple-500/50 transition group">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="bg-white/5 p-3 rounded-xl border border-white/10 text-purple-400">
                  <Code size={24} />
                </div>
                <span className="text-xs font-mono text-gray-500">01</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Fast, responsive and beautiful websites that turn visitors into customers.
              </p>
            </div>
            <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between text-xs font-mono tracking-wider text-gray-400 group-hover:text-white transition">
              <span>WEBSITES & WEB APPS</span>
              <ArrowRight size={14} />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#141026] border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-purple-500/50 transition group">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="bg-white/5 p-3 rounded-xl border border-white/10 text-purple-400">
                  <Cpu size={24} />
                </div>
                <span className="text-xs font-mono text-gray-500">02</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Software Solutions</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Smart digital tools that simplify your work and solve real business problems.
              </p>
            </div>
            <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between text-xs font-mono tracking-wider text-gray-400 group-hover:text-white transition">
              <span>CUSTOM SOFTWARE</span>
              <ArrowRight size={14} />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#141026] border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-purple-500/50 transition group">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="bg-white/5 p-3 rounded-xl border border-white/10 text-purple-400">
                  <Layout size={24} />
                </div>
                <span className="text-xs font-mono text-gray-500">03</span>
              </div>
              <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Thoughtful user-friendly designs that make every digital interaction feel easy.
              </p>
            </div>
            <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between text-xs font-mono tracking-wider text-gray-400 group-hover:text-white transition">
              <span>DESIGN & EXPERIENCE</span>
              <ArrowRight size={14} />
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED WORK SECTION */}
      <section id="work" className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold text-purple-400 tracking-wider uppercase">Selected Work</span>
            <h2 className="text-3xl lg:text-5xl font-bold mt-2">Small details.<br />Big impact.</h2>
          </div>
          <p className="text-gray-400 text-sm max-w-xs mt-4 md:mt-0">
            A few concept projects showing how thoughtful design and technology can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-gradient-to-br from-[#1a1432] to-[#120f24] border border-white/10 rounded-3xl p-8 flex flex-col justify-between h-96 relative group overflow-hidden">
            <div className="flex items-center justify-between text-xs font-mono text-gray-400">
              <span>01 / 02</span>
              <span className="text-purple-400">WEB APPLICATION</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-105 transition duration-500">
              <span className="text-9xl font-black text-white/10">F.</span>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold">Finora Finance</h3>
              <p className="text-sm text-gray-400 mt-1">A cleaner way to manage your money.</p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gradient-to-br from-[#12261e] to-[#0f1f18] border border-white/10 rounded-3xl p-8 flex flex-col justify-between h-96 relative group overflow-hidden">
            <div className="flex items-center justify-between text-xs font-mono text-gray-400">
              <span>02 / 02</span>
              <span className="text-emerald-400">DIGITAL MARKETPLACE</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-105 transition duration-500">
              <span className="text-9xl font-black text-white/10">H.</span>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold">Harvest Hub</h3>
              <p className="text-sm text-gray-400 mt-1">Connecting producers with new opportunities.</p>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500 text-center mt-6">✦ These are concept projects created for demonstration.</p>
      </section>

      {/* CALL TO ACTION FOOTER */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <span className="text-xs font-semibold text-purple-400 tracking-wider uppercase">Mr. Lee 🫱🏼‍🫲🏽 Have an idea?</span>
        <h2 className="text-4xl lg:text-6xl font-extrabold mt-3 mb-8">Let's build something <br />remarkable.</h2>
        <button className="bg-white text-black hover:bg-gray-200 font-medium px-8 py-4 rounded-full inline-flex items-center gap-2 transition group shadow-xl">
          Start a conversation
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </section>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-6 py-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
        <div className="flex items-center gap-2 font-bold text-white text-base">
          <span className="bg-white text-black px-1.5 py-0.5 rounded text-xs font-black">n</span>
          <span>Mr. Lee.</span>
        </div>
        <p>Creative minds. Meaningful technology.</p>
        <p>© 2026 Mr. Lee Digital. All rights reserved.</p>
      </footer>

    </div>
  );
}