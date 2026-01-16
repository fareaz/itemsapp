export default function FeaturesSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold">Features</h2>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
          ItemsApp focuses on speed, clarity, and controlled access — without
          unnecessary complexity.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              title: "Item Browsing",
              desc: "Explore items with clean cards, fast loading, and clear pricing.",
            },
            {
              title: "Secure Access",
              desc: "Authentication-based access ensures data integrity and control.",
            },
            {
              title: "Admin Management",
              desc: "Authorized users can add and manage items with ease.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-2xl p-6 bg-white/80 dark:bg-slate-900/80 shadow-md ring-1 ring-black/5 dark:ring-white/10"
            >
              <h3 className="font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
