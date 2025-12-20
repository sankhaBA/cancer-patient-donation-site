import { Activity } from "lucide-react";

type DiseaseSummaryProps = {
  title: string;
  summary: string;
};

export default function DiseaseSummary({ title, summary }: DiseaseSummaryProps) {
  // Highlight 'Keytruda (Pembrolizumab)' in summary
  const highlight = "Keytruda (Pembrolizumab)";
  const parts = summary.split(highlight);
  return (
    <section className="container mx-auto px-6 py-8">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <Activity className="h-6 w-6" style={{ color: '#7C6A9C' }} />
          <h2 className="text-xl font-semibold text-zinc-900">Diagnosis</h2>
        </div>
        <div className="mt-4">
          <p className="text-sm text-zinc-500">Disease</p>
          <p className="font-medium text-zinc-800">{title}</p>
          <p className="mt-3 text-zinc-700 leading-7">
            {parts[0]}
            <strong>{highlight}</strong>
            {parts[1]}
          </p>
        </div>
      </div>
    </section>
  );
}
