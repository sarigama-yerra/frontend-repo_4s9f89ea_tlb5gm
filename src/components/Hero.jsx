import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[640px] w-full overflow-hidden">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient + glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 backdrop-blur-xl text-white/80 text-xs mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300 animate-pulse" />
              Liquid glass portfolio — Thumbnail Designer
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-fuchsia-200 to-cyan-200 drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]">
              Thumbnails that click. Designs that convert.
            </h1>
            <p className="mt-5 text-white/70 max-w-xl">
              I craft scroll-stopping YouTube thumbnails with a modern, immersive aesthetic. Transparent liquid glass, chrome vibes, and bold typography that makes people tap.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#contact" className="rounded-2xl px-5 py-3 text-sm font-semibold text-black bg-white hover:bg-white/90 transition shadow-lg">
                Get a Quote
              </a>
              <a href="#work" className="rounded-2xl px-5 py-3 text-sm font-semibold text-white/90 ring-1 ring-white/20 hover:bg-white/10 backdrop-blur-xl">
                See Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
