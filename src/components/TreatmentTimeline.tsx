import { CalendarDays } from "lucide-react";

type Deadline = {
  id: number;
  title: string;
  date: string;
  amount: number;
  description?: string;
};

type TreatmentTimelineProps = {
  treatmentName: string;
  description: string;
  totalAmount: number;
  currency: string;
  deadlines: Deadline[];
};

export default function TreatmentTimeline({
  treatmentName,
  description,
  totalAmount,
  currency,
  deadlines,
}: TreatmentTimelineProps) {
  const formatter = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  });

  return (
    <section className="container mx-auto px-6 py-8">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <CalendarDays className="h-6 w-6 text-rose-600" />
          <h2 className="text-xl font-semibold text-zinc-900">Treatment Costs Timeline</h2>
        </div>
        <div className="mt-4">
          <p className="text-sm text-zinc-500">Treatment</p>
          <p className="font-medium text-zinc-800">{treatmentName}</p>
          <p className="mt-2 text-zinc-700">{description}</p>
          <div className="mt-4 rounded-xl bg-rose-50 p-4">
            <p className="text-sm text-rose-700">Total Needed</p>
            <p className="text-2xl font-bold text-rose-900">{formatter.format(totalAmount)}</p>
          </div>
        </div>
        <div className="mt-6">
          <ol className="relative border-l border-zinc-200 pl-6">
            {deadlines.map((d) => (
              <li key={d.id} className="mb-8 ml-2">
                <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-rose-300 bg-rose-600" />
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-semibold text-zinc-900">
                    {d.title} · {new Date(d.date).toLocaleDateString()}
                  </p>
                  <p className="font-semibold text-rose-700">{formatter.format(d.amount)}</p>
                </div>
                {d.description && (
                  <p className="mt-2 text-zinc-700">{d.description}</p>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
