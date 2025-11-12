import MarqueeRow from './MarqueeRow';

const thumbs1 = [
  'https://images.unsplash.com/photo-1509097387726-32739a2b5f58?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=1200&auto=format&fit=crop',
];

const thumbs2 = [
  'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1451186859696-371d9477be93?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop',
];

export default function WorkSection() {
  return (
    <section id="work" className="relative py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white/90">Recent thumbnails</h2>
          <p className="text-white/60 mt-2 max-w-2xl">A fast-moving showcase. Rows glide continuously with a soft glass glow.</p>
        </div>

        <div className="space-y-6">
          <MarqueeRow images={thumbs1} speed={22} />
          <MarqueeRow images={thumbs2} reverse speed={26} />
          <MarqueeRow images={thumbs1} speed={24} />
        </div>
      </div>
    </section>
  );
}
