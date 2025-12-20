import { Hospital, Stethoscope } from "lucide-react";

type HospitalDoctorProps = {
  hospital: string;
  doctor: string;
};

export default function HospitalDoctor({ hospital, doctor }: HospitalDoctorProps) {
  return (
    <section className="container mx-auto px-6 py-8">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <Hospital className="h-6 w-6 text-rose-600" />
          <h2 className="text-xl font-semibold text-zinc-900">Hospital & Consultant</h2>
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-zinc-700">
          <div>
            <p className="text-sm text-zinc-500">Hospital</p>
            <p className="font-medium">{hospital}</p>
          </div>
          <div>
            <p className="text-sm text-zinc-500">Doctor</p>
            <p className="font-medium flex items-center gap-2">
              <Stethoscope className="h-5 w-5 text-rose-600" />
              {doctor}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
