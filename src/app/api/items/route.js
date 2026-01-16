import { NextResponse } from "next/server";

let items = [
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

export async function GET() {
  return NextResponse.json(items);
}

export async function POST(req) {
  const body = await req.json();

  const newItem = {
    id: Date.now().toString(),
    ...body,
  };

  items.push(newItem);

  return NextResponse.json(newItem, { status: 201 });
}
