import Link from "next/link";
import { headers } from "next/headers";

export default async function ItemsPage() {
  const headersList = await headers();
  const host = headersList.get("host");

  const res = await fetch(`http://${host}/api/items`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch items");
  }

  const items = await res.json();

  return (
    <div className="min-h-screen px-6 py-20 bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-10 text-3xl font-semibold text-gray-900">
          Items
        </h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.id}
              href={`/items/${item.id}`}
              className="group rounded-2xl bg-white shadow-md hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-48 w-full object-cover rounded-t-2xl"
              />

              <div className="p-5">
                <h2 className="text-lg font-semibold">
                  {item.name}
                </h2>

                <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                  {item.description}
                </p>

                <p className="mt-4 text-lg font-bold text-cyan-600">
                  ${item.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
