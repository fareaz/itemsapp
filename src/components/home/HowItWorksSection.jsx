export default function HowItWorksSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold">How it works</h2>

        <ol className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              step: "Authentication",
              desc: "Users securely log in to access personalized features.",
            },
            {
              step: "Item Exploration",
              desc: "Browse items, view details, and compare pricing.",
            },
            {
              step: "Item Management",
              desc: "Admins can add or manage items based on authorization.",
            },
          ].map((s, i) => (
            <li
              key={s.step}
              className="rounded-2xl p-6 bg-white/80 dark:bg-slate-900/80 shadow-md ring-1 ring-black/5 dark:ring-white/10"
            >
              <span className="text-sm font-semibold text-cyan-600">
                Step {i + 1}
              </span>
              <h3 className="mt-2 font-medium">{s.step}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
