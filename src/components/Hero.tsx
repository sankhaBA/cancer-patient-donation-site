import { HeartHandshake, FileCheck } from "lucide-react";

type HeroProps = {
  name: string;
  age: number;
  diseaseTitle: string;
  summary: string;
  docsLink: string;
};

export default function Hero({ name, age, diseaseTitle, summary, docsLink }: HeroProps) {
  // Highlight 'Pembroxin (Pembrolizumab)' in summary
  const highlight = "Pembroxin  (Pembrolizumab)";
  const parts = summary.split(highlight);
  return (
    <section className="relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #E6E6FA, #fff)' }}>
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden>
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full" style={{ background: '#E6E6FA' }} />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full" style={{ background: '#E6E6FA' }} />
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
              className="inline-flex items-center gap-2 rounded-full px-8 py-3"
              style={{ background: '#7C6A9C', color: 'white', boxShadow: '0 1px 6px 0 rgba(124,106,156,0.15)' }}
              onMouseOver={e => (e.currentTarget.style.background = '#8B7B9B')}
              onMouseOut={e => (e.currentTarget.style.background = '#7C6A9C')}
            >
              <HeartHandshake className="h-5 w-5" style={{ color: '#E6E6FA' }} />
              Donate via Bank Transfer
            </a>
            <a
              href="#view-documents"
              className="inline-flex items-center gap-2 rounded-full border bg-white px-5 py-3 transition"
              style={{ borderColor: '#E6E6FA', color: '#7C6A9C' }}
              onMouseOver={e => {
                e.currentTarget.style.borderColor = '#E6E6FA';
                e.currentTarget.style.background = '#E6E6FA';
              }}
              onMouseOut={e => {
                e.currentTarget.style.borderColor = '#E6E6FA';
                e.currentTarget.style.background = 'white';
              }}
            >
              <FileCheck className="h-5 w-5" style={{ color: '#7C6A9C' }} />
              View Verified Documents
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
