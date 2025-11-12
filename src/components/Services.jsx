export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-black to-black/95">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'YouTube Thumbnails',
              desc: 'Optimized for CTR with bold composition, lighting, and typography.'
            },
            {
              title: 'Channel Branding',
              desc: 'Cohesive visual systems: banners, icons, templates, and motion.'
            },
            {
              title: 'Express Delivery',
              desc: 'Fast turnaround with 2-3 concept options and revision cycles.'
            },
          ].map((c, i) => (
            <div key={i} className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-white/80">
              <h3 className="text-white text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-white/70">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
