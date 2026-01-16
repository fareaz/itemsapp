export default function AboutSection() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold">About ItemsApp</h2>
        <p className="mt-4 max-w-3xl text-gray-600 dark:text-gray-400">
          ItemsApp is a modern full-stack application built using Next.js and
          Express. The goal is to demonstrate clean UI design, scalable
          architecture, and real-world authentication flows.
        </p>
        <p className="mt-4 max-w-3xl text-gray-600 dark:text-gray-400">
          The platform prioritizes maintainability and clarity over unnecessary
          abstractions or visual noise.
        </p>
      </div>
    </section>
  );
}
