import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#07070e] text-slate-100 font-sans selection:bg-purple-500 selection:text-white">
      
      {/* 1. TOP HEADER & NAVBAR */}
      <header className="w-full border-b border-white/10 bg-[#07070e]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-extrabold tracking-tight text-white">nexa.</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          </nav>

          <a
            href="#contact"
            className="px-4 py-2 text-xs font-medium bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all border border-white/10"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Navigation Links */}
        <div className="flex md:hidden justify-center items-center gap-6 py-2 border-t border-white/5 text-xs text-slate-300">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 space-y-24 py-12">
        
        {/* 2. HERO SECTION */}
        <section id="home" className="flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium tracking-wider text-slate-200">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            YOUR DIGITAL GROWTH PARTNER
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            We turn big ideas into <span className="text-purple-400">digital reality.</span>
          </h1>

          <p className="text-slate-400 text-base leading-relaxed max-w-xl">
            We design beautiful websites, build powerful software, and create digital experiences that help businesses grow.
          </p>

          <div className="flex flex-row items-center gap-4 w-full pt-2">
            <a
              href="#projects"
              className="px-6 py-3.5 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-xl flex items-center justify-center gap-2 text-sm transition-all shadow-lg shadow-purple-500/25"
            >
              Explore our work <span>↗</span>
            </a>
            <a
              href="#services"
              className="px-6 py-3.5 border border-white/10 hover:border-white/20 bg-white/5 text-white font-medium rounded-xl flex items-center justify-center text-sm transition-all"
            >
              What we do
            </a>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white text-lg">
              ✳
            </div>
            <div>
              <h4 className="text-white font-medium text-sm">Ideas meet innovation.</h4>
              <p className="text-slate-400 text-xs">We build for what comes next.</p>
            </div>
          </div>
        </section>

        {/* 3. HERO APP PREVIEW CARDS */}
        <section className="relative w-full py-6 flex justify-center">
          <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl border border-white/10 bg-gradient-to-b from-purple-900/20 to-slate-900/40 p-6 flex flex-col justify-between shadow-2xl overflow-hidden backdrop-blur-xl">
            <div className="flex justify-between items-center text-xs text-slate-400">
              <span className="font-bold text-white flex items-center gap-1">✦ nexa.</span>
              <span className="border border-white/10 px-2 py-0.5 rounded-full bg-white/5">✦ NEXT-GEN APP</span>
            </div>

            <div className="my-auto flex flex-col items-center text-center py-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-purple-500/30 mb-4">
                N
              </div>
              <h3 className="text-xl font-bold text-white">Built for the future.</h3>
              <p className="text-xs text-slate-400 mt-1">Seamless interaction across all devices.</p>
            </div>

            <div className="flex justify-between items-center text-xs text-slate-400 pt-4 border-t border-white/5">
              <span>✦ High Performance</span>
              <span className="text-purple-400 font-medium">100% →</span>
            </div>
          </div>
        </section>

        {/* 4. WHAT WE DO / SERVICES SECTION */}
        <section id="services" className="space-y-8 pt-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-purple-400">WHAT WE DO</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              Good ideas deserve <br />
              <span className="text-purple-400">great execution.</span>
            </h2>
            <p className="text-slate-400 text-sm mt-3 max-w-lg">
              From initial design to final launch, we help bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                ⚛
              </div>
              <h3 className="text-lg font-bold text-white">UI/UX Design</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Thoughtful, user-friendly designs that make every digital interaction feel easy.
              </p>
              <div className="pt-2 text-xs text-slate-500 flex items-center justify-between border-t border-white/5">
                <span>Tailored Experiences</span>
                <span>↗</span>
              </div>
            </div>
          </div>
        </section>

        {/* 5. SELECTED WORK SECTION */}
        <section id="projects" className="space-y-8 pt-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-purple-400">SELECTED WORK</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              Small details. <br />
              <span className="text-purple-400">Big impact.</span>
            </h2>
            <p className="text-slate-400 text-sm mt-3 max-w-lg">
              A showcase of projects created through thoughtful design and technology that work together.
            </p>
          </div>

          {/* Project Card 1 */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-purple-950/30 to-slate-900/20 p-6 space-y-6">
            <div className="flex justify-between items-center text-xs text-slate-400">
              <span>01 / 02</span>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 space-y-2">
              <span className="text-[10px] uppercase tracking-wider text-purple-400">FINTECH PLATFORM</span>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-white">Finora Finance</h3>
                <span className="text-slate-400">↗</span>
              </div>
              <p className="text-xs text-slate-400">A modern way to manage smart banking.</p>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-emerald-950/20 to-slate-900/20 p-6 space-y-6">
            <div className="flex justify-between items-center text-xs text-slate-400">
              <span>02 / 02</span>
            </div>
            <div className="h-32 rounded-xl bg-gradient-to-br from-emerald-800/40 to-teal-900/40 border border-emerald-500/20 flex items-center justify-center">
              <span className="text-5xl font-black text-emerald-300">H.</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-wider text-emerald-400">AGTECH MARKETPLACE</span>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-white">Harvest Hub</h3>
                <span className="text-slate-400">↗</span>
              </div>
              <p className="text-xs text-slate-400">Connecting local growers directly with buyers.</p>
            </div>
          </div>
        </section>

        {/* 6. CALL TO ACTION & FOOTER */}
        <section id="contact" className="text-center py-12 space-y-6 border-t border-white/10">
          <span className="text-xs font-semibold uppercase tracking-widest text-purple-400">HAVE AN IDEA?</span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            Let's build <br />
            something <br />
            <span className="text-purple-400">remarkable.</span>
          </h2>

          <a
            href="mailto:contact@nexalabs.com"
            className="inline-block px-8 py-4 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-xl text-sm transition-all shadow-lg shadow-purple-500/25"
          >
            Start a conversation
          </a>

          <footer className="pt-16 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <div className="text-left">
              <span className="text-base font-extrabold text-white">nexa.</span>
            </div>
            <p>© {new Date().getFullYear()} Nexa. All rights reserved.</p>
          </footer>
        </section>

      </main>
    </div>
  );
}