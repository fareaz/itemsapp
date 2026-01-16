import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div>
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
            
        </div>
    );
};

export default Banner;