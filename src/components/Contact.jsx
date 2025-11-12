import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const submit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I will reach out shortly.');
  };

  return (
    <section id="contact" className="relative py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-white/80">
          <h3 className="text-white text-xl font-semibold">Let’s work together</h3>
          <p className="mt-1 text-white/70">Tell me about your project and preferred turnaround.</p>

          <form onSubmit={submit} className="mt-6 grid md:grid-cols-3 gap-4">
            <input required placeholder="Name" className="col-span-3 md:col-span-1 rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
            <input required type="email" placeholder="Email" className="col-span-3 md:col-span-1 rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
            <input placeholder="Budget (optional)" className="col-span-3 md:col-span-1 rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
            <textarea required placeholder="Describe what you need" className="col-span-3 rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 min-h-[140px]" />
            <div className="col-span-3 flex items-center justify-between">
              <button className="rounded-2xl px-5 py-3 text-sm font-semibold text-black bg-white hover:bg-white/90 transition shadow-lg">
                Send request
              </button>
              <p className="text-sm text-emerald-300/80">{status}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
