export default function Footer() {
  return (
    <footer
      className="
        mt-auto border-t
        border-gray-200 dark:border-slate-800
        bg-white/70 dark:bg-slate-950/70
        backdrop-blur
      "
    >
      <div className="mx-auto max-w-6xl px-6 py-6 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-gray-700 dark:text-gray-300">
            ItemsApp
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
