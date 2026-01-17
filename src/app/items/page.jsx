import Link from "next/link";

export default async function ItemsPage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/items`,
    { cache: "no-store" }
  );

  const items = await res.json();

  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Items</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map(item => (
          <Link
            key={item._id}
            href={`/items/${item._id}`}
            className="bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <img
              src={item.image || "https://via.placeholder.com/400"}
              className="h-48 w-full object-cover rounded-t-xl"
            />

            <div className="p-4">
              <h2 className="font-semibold text-lg">
                {item.name}
              </h2>

              <p className="text-sm text-gray-600 line-clamp-2">
                {item.description}
              </p>

              <p className="mt-2 font-bold text-cyan-600">
                ${item.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
