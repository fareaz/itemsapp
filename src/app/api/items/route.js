import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    const client = await clientPromise;
    const db = client.db("itemsDB");

    if (id) {
      const item = await db
        .collection("items")
        .findOne({ _id: new ObjectId(id) });

      return NextResponse.json(item);
    }

    const items = await db
      .collection("items")
      .find()
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(items);
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, description, price, image } = body;

    if (!name || !price) {
      return NextResponse.json(
        { error: "Name and price required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("itemsDB");

    const result = await db.collection("items").insertOne({
      name,
      description,
      price: Number(price),
      image,
      createdAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      id: result.insertedId,
    });
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
