export default function PopularSection() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold">Popular items</h2>

        <p className="mt-4 max-w-3xl text-gray-600 dark:text-gray-400">
          Popular items are identified based on user interaction, view
          frequency, and engagement trends across the platform.
        </p>

     
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              title: "High Views",
              desc: "Items that receive consistently high view counts from users.",
            },
            {
              title: "Frequent Interaction",
              desc: "Items users repeatedly explore or return to.",
            },
            {
              title: "Trending Activity",
              desc: "Items that show increased engagement over recent periods.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="
                rounded-2xl p-6
                bg-white/80 dark:bg-slate-900/80
                shadow-md ring-1 ring-black/5 dark:ring-white/10
              "
            >
              <h3 className="font-medium">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        
        <p className="mt-10 max-w-2xl text-sm text-gray-500 dark:text-gray-500">
          As the platform grows, this section will dynamically highlight items
          based on real-time engagement data.
        </p>
      </div>
    </section>
  );
}
