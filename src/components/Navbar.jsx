import Link from "next/link";
import { getUser } from "@/lib/auth";
import { logout } from "@/lib/actions";

export default async function Navbar() {
  const user = await getUser();

  return (
    <nav
      className="
        sticky top-0 z-50
        border-b border-gray-200 dark:border-slate-800
        bg-white/70 dark:bg-slate-950/70
        backdrop-blur
      "
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <Link
          href="/"
          className="text-lg font-semibold text-gray-900 dark:text-gray-100"
        >
          ItemsApp
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6 text-sm">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition"
          >
            Home
          </Link>

          <Link
            href="/items"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition"
          >
            Items
          </Link>

          {user ? (
            <>
              <Link
                href="/add-item"
                className="
                  rounded-lg px-3 py-1.5
                  bg-cyan-500 text-white
                  hover:bg-cyan-600
                  transition
                "
              >
                Add Item
              </Link>

              <form action={logout}>
                <button
                  type="submit"
                  className="
                    text-sm font-medium
                    text-red-500 hover:text-red-600
                    transition
                  "
                >
                  Logout
                </button>
              </form>
            </>
          ) : (
            <Link
              href="/login"
              className="
                rounded-lg px-4 py-1.5
                border border-gray-300 dark:border-slate-700
                text-gray-700 dark:text-gray-200
                hover:bg-gray-100 dark:hover:bg-slate-800
                transition
              "
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
