import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  const { id } = params;

  const items = [
    {
      id: "1",
      name: "Laptop",
      description: "High performance laptop",
      price: 1200,
      image: "https://via.placeholder.com/300",
    },
    {
      id: "2",
      name: "Phone",
      description: "Latest smartphone",
      price: 800,
      image: "https://via.placeholder.com/300",
    },
  ];

  const item = items.find((i) => i.id === id);

  if (!item) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(item);
}
