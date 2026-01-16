async function getItem(id) {
  const res = await fetch(`/api/items/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export default async function ItemDetailsPage({ params }) {
  // Next.js 16 rule
  const { id } = await params;

  const item = await getItem(id);

  if (!item) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Item not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-96 object-cover mb-8 rounded"
      />

      <h1 className="text-4xl font-bold mb-4">{item.name}</h1>
      <p className="text-gray-600 mb-4">{item.description}</p>
      <p className="text-2xl font-semibold">${item.price}</p>
    </div>
  );
}
