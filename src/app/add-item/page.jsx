"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function AddItemPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const item = {
      name: form.name.value,
      description: form.description.value,
      price: Number(form.price.value),
      image: form.image.value,
    };

    try {
      const res = await fetch("/api/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });

      if (!res.ok) throw new Error();

      toast.success("Item added successfully");
      router.push("/items");
      router.refresh();
    } catch {
      toast.error("Failed to add item");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="
      flex min-h-screen items-center justify-center px-4
      bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200
      dark:from-slate-900 dark:via-slate-950 dark:to-black
    ">
      <div className="
        w-full max-w-lg rounded-2xl p-8
        bg-white/80 backdrop-blur-xl
        dark:bg-slate-900/80
        shadow-xl ring-1 ring-black/5 dark:ring-white/10
      ">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Add new item
        </h1>
        <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
          Fill in the details below
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-600 dark:text-gray-400">
              Item name
            </label>
            <input
              name="name"
              required
              placeholder="MacBook Pro"
              className="
                w-full rounded-lg px-4 py-2.5 text-sm
                bg-white dark:bg-slate-800
                border border-gray-300 dark:border-slate-700
                text-gray-900 dark:text-gray-100
                focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500
                outline-none
              "
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-600 dark:text-gray-400">
              Description
            </label>
            <input
              name="description"
              required
              placeholder="Short description"
              className="
                w-full rounded-lg px-4 py-2.5 text-sm
                bg-white dark:bg-slate-800
                border border-gray-300 dark:border-slate-700
                text-gray-900 dark:text-gray-100
                focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500
                outline-none
              "
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-600 dark:text-gray-400">
                Price
              </label>
              <input
                name="price"
                type="number"
                required
                placeholder="1200"
                className="
                  w-full rounded-lg px-4 py-2.5 text-sm
                  bg-white dark:bg-slate-800
                  border border-gray-300 dark:border-slate-700
                  text-gray-900 dark:text-gray-100
                  focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500
                  outline-none
                "
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-600 dark:text-gray-400">
                Image URL
              </label>
              <input
                name="image"
                required
                placeholder="https://..."
                className="
                  w-full rounded-lg px-4 py-2.5 text-sm
                  bg-white dark:bg-slate-800
                  border border-gray-300 dark:border-slate-700
                  text-gray-900 dark:text-gray-100
                  focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500
                  outline-none
                "
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="
              mt-4 w-full rounded-lg py-2.5 text-sm font-medium text-white
              bg-cyan-500 hover:bg-cyan-600
              transition disabled:opacity-60
            "
          >
            {loading ? "Adding item..." : "Add item"}
          </button>
        </form>
      </div>
    </div>
  );
}
