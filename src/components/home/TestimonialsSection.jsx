export default function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold">Testimonials</h2>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
          Built with a focus on usability, performance, and clarity.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {[
            "Simple interface with zero confusion.",
            "Fast loading and clean architecture.",
          ].map((t, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 bg-white/80 dark:bg-slate-900/80 shadow-md ring-1 ring-black/5 dark:ring-white/10"
            >
              <p className="text-sm">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
