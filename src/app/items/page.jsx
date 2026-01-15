import Link from "next/link";

export default async function ItemsPage() {
  const res = await fetch("http://localhost:5000/items", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch items");
  }

  const items = await res.json();

  return (
    <div
      className="
        min-h-screen px-6 py-20
        bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200
        dark:from-slate-900 dark:via-slate-950 dark:to-black
      "
    >
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-10 text-3xl font-semibold text-gray-900 dark:text-gray-100">
          Items
        </h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.id}
              href={`/items/${item.id}`}
              className="
                group rounded-2xl
                bg-white/80 backdrop-blur
                dark:bg-slate-900/80
                shadow-md hover:shadow-xl
                ring-1 ring-black/5 dark:ring-white/10
                transition
              "
            >
              {/* Image */}
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    h-48 w-full object-cover
                    transition-transform duration-300
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {item.name}
                </h2>

                <p className="mt-1 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-cyan-600">
                    ${item.price}
                  </span>

                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-cyan-600 transition">
                    View →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
