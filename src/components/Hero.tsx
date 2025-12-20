import { HeartHandshake, FileCheck } from "lucide-react";

type HeroProps = {
  name: string;
  age: number;
  diseaseTitle: string;
  summary: string;
  docsLink: string;
};

export default function Hero({ name, age, diseaseTitle, summary, docsLink }: HeroProps) {
  // Highlight 'Keytruda (Pembrolizumab)' in summary
  const highlight = "Keytruda (Pembrolizumab)";
  const parts = summary.split(highlight);
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-rose-50 to-white">
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden>
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-rose-100 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-rose-100 blur-3xl" />
      </div>
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
            Help Save {name}
          </h1>
          <p className="mt-2 text-zinc-600">Age {age} · {diseaseTitle}</p>
          <p className="mt-6 text-lg leading-8 text-zinc-700">
            {parts[0]}
            <strong>{highlight}</strong>
            {parts[1]}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#bank-accounts"
              className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-5 py-3 text-white shadow-sm transition hover:bg-rose-700"
            >
              <HeartHandshake className="h-5 w-5" />
              Donate via Bank Transfer
            </a>
            <a
              href={docsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white px-5 py-3 text-rose-700 transition hover:border-rose-300 hover:bg-rose-50"
            >
              <FileCheck className="h-5 w-5" />
              View Verified Documents
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
