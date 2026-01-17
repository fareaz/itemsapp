"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddItemForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const submit = async (e) => {
    e.preventDefault();

    await fetch("/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    router.push("/items");
    router.refresh();
  };

  return (
    <form
      onSubmit={submit}
      className="
        rounded-2xl bg-white
        p-6 shadow-lg
        ring-1 ring-gray-200
        space-y-5
      "
    >
      {/* Name */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Item Name
        </label>
        <input
          placeholder="iPhone 14 Pro"
          className="
            w-full rounded-lg border border-gray-300
            px-4 py-2
            text-gray-900
            focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30
            outline-none transition
          "
          required
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />
      </div>

      {/* Description */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          rows={3}
          placeholder="Short product description"
          className="
            w-full rounded-lg border border-gray-300
            px-4 py-2
            text-gray-900
            focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30
            outline-none transition
          "
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
        />
      </div>

      {/* Price */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Price ($)
        </label>
        <input
          type="number"
          placeholder="999"
          className="
            w-full rounded-lg border border-gray-300
            px-4 py-2
            text-gray-900
            focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30
            outline-none transition
          "
          required
          onChange={(e) =>
            setForm({ ...form, price: e.target.value })
          }
        />
      </div>

      {/* Image */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Image URL
        </label>
        <input
          placeholder="/images/iphone.jpg"
          className="
            w-full rounded-lg border border-gray-300
            px-4 py-2
            text-gray-900
            focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30
            outline-none transition
          "
          onChange={(e) =>
            setForm({ ...form, image: e.target.value })
          }
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="
          w-full rounded-xl
          bg-cyan-500 px-4 py-2.5
          text-white font-semibold
          hover:bg-cyan-600
          active:bg-cyan-700
          transition
        "
      >
        Add Item
      </button>
    </form>
  );
}
