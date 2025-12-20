import { UserRound } from "lucide-react";

type PatientInfoProps = {
  name: string;
  age: number;
};

export default function PatientInfo({ name, age }: PatientInfoProps) {
  return (
    <section className="container mx-auto px-6 py-8">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <UserRound className="h-6 w-6" style={{ color: '#7C6A9C' }} />
          <h2 className="text-xl font-semibold text-zinc-900">Patient</h2>
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-zinc-700">
          <div>
            <p className="text-sm text-zinc-500">Name</p>
            <p className="font-medium">{name}</p>
          </div>
          <div>
            <p className="text-sm text-zinc-500">Age</p>
            <p className="font-medium">{age}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
