import { motion } from 'framer-motion';

const variants = {
  animate: {
    x: [0, -1030],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 20,
        ease: 'linear',
      },
    },
  },
};

export default function MarqueeRow({ images = [], reverse = false, speed = 20 }) {
  const dir = reverse ? -1 : 1;
  const totalWidth = 1030; // pixel width of one sequence (approx)

  return (
    <div className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />

      <motion.div
        className="flex gap-6 py-4"
        animate={{ x: [0, dir * -totalWidth] }}
        transition={{
          x: { repeat: Infinity, repeatType: 'loop', duration: speed, ease: 'linear' },
        }}
      >
        {[...images, ...images].map((src, i) => (
          <div key={i} className="flex-none w-[320px] h-[180px] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 backdrop-blur-xl">
            <img src={src} alt="thumb" className="w-full h-full object-cover" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
