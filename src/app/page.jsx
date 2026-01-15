import Link from "next/link";

export default function HomePage() {
  return (
    <div className="text-gray-900 dark:text-gray-100">
      {/* Hero */}
      <section
        className="
          py-28
          bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200
          dark:from-slate-900 dark:via-slate-950 dark:to-black
        "
      >
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="max-w-3xl text-5xl font-semibold leading-tight">
            Manage and explore items with clarity
          </h1>
          <p className="mt-6 max-w-xl text-lg text-gray-600 dark:text-gray-400">
            ItemsApp helps you browse, manage, and organize items through a
            fast, secure, and minimal interface.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/items"
              className="
                rounded-lg bg-cyan-500 px-6 py-3
                text-sm font-medium text-white
                hover:bg-cyan-600 transition
              "
            >
              Browse items
            </Link>

            <Link
              href="/login"
              className="
                rounded-lg border border-gray-300 dark:border-slate-700
                px-6 py-3 text-sm font-medium
                text-gray-700 dark:text-gray-200
                hover:bg-gray-100 dark:hover:bg-slate-800 transition
              "
            >
              Get started
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold">Features</h2>
          <p className="mt-4 max-w-xl text-gray-600 dark:text-gray-400">
            Everything you need, nothing you don’t.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              "Browse items easily",
              "Fast and secure access",
              "Admin-controlled management",
            ].map((text) => (
              <div
                key={text}
                className="
                  rounded-2xl p-6
                  bg-white/80 dark:bg-slate-900/80
                  shadow-md ring-1 ring-black/5 dark:ring-white/10
                "
              >
                <p className="font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 bg-gray-50 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold">About</h2>
          <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
            ItemsApp is built with Next.js and Express, focusing on performance,
            simplicity, and maintainable architecture.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold">How it works</h2>

          <ol className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              "Login securely",
              "Browse and view items",
              "Add items if authorized",
            ].map((step, i) => (
              <li
                key={step}
                className="
                  rounded-2xl p-6
                  bg-white/80 dark:bg-slate-900/80
                  shadow-md ring-1 ring-black/5 dark:ring-white/10
                "
              >
                <span className="text-sm font-semibold text-cyan-600">
                  Step {i + 1}
                </span>
                <p className="mt-2 font-medium">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Popular */}
      <section className="py-24 bg-gray-50 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold">Popular items</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Frequently viewed and highly interacted items.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold">Testimonials</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Trusted for its simplicity and performance.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 bg-gray-50 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold">Contact</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Have feedback or ideas? We’d like to hear from you.
          </p>
        </div>
      </section>
    </div>
  );
}
