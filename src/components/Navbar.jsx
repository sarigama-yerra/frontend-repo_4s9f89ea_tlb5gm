import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-[0_0_1px_0_rgba(255,255,255,0.25)_inset,0_24px_80px_-40px_rgba(0,0,0,0.6)]">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-400/60 via-cyan-300/60 to-blue-400/60 ring-1 ring-white/30 shadow-inner" />
              <span className="text-white/90 font-semibold tracking-wide">LiquidGlass Thumbnails</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
              <a href="#work" className="hover:text-white transition">Work</a>
              <a href="#services" className="hover:text-white transition">Services</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
            </nav>
            <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 text-white/80">
              <Menu size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
