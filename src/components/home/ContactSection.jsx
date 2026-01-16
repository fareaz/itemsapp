import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold">Contact</h2>

        <p className="mt-4 max-w-3xl text-gray-600 dark:text-gray-400">
          ItemsApp is continuously evolving. Whether you have feedback, feature
          ideas, or are interested in collaboration, your input helps improve
          the platform.
        </p>

        {/* Contact options */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              title: "Feedback",
              desc: "Share suggestions or report usability issues to help refine the experience.",
            },
            {
              title: "Support",
              desc: "Get help with access, account-related issues, or usage questions.",
            },
            {
              title: "Collaboration",
              desc: "Interested in extending or contributing to the project?",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="
                rounded-2xl p-6
                bg-white/80 dark:bg-slate-900/80
                shadow-md ring-1 ring-black/5 dark:ring-white/10
              "
            >
              <h3 className="font-medium">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
