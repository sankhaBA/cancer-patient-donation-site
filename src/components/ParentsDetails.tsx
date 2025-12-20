import { Users, MapPin, Briefcase, Phone } from "lucide-react";

type Parent = {
  name: string;
  address: string;
  occupation: string;
  phones: string[];
};

type ParentsDetailsProps = {
  mother: Parent;
  father: Parent;
};

function ParentCard({ label, parent }: { label: string; parent: Parent }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
      <p className="text-sm text-zinc-500">{label}</p>
      <p className="mt-1 text-lg font-semibold text-zinc-900">{parent.name}</p>
      <div className="mt-3 space-y-2 text-zinc-800">
        <div className="flex items-start gap-2">
          <MapPin className="h-5 w-5" style={{ color: '#7C6A9C' }} />
          <span>{parent.address}</span>
        </div>
        <div className="flex items-start gap-2">
          <Briefcase className="h-5 w-5" style={{ color: '#7C6A9C' }} />
          <span>{parent.occupation}</span>
        </div>
        <div className="flex items-start gap-2">
          <Phone className="h-5 w-5" style={{ color: '#7C6A9C' }} />
          <div>
            {parent.phones.map((p) => (
              <p key={p} className="leading-6">
                <a
                  href={`tel:${p.replace(/[^\d+]/g, '')}`}
                  className="hover:underline text-zinc-800"
                >
                  {p}
                </a>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ParentsDetails({ mother, father }: ParentsDetailsProps) {
  return (
    <section className="container mx-auto px-6 py-8">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <Users className="h-6 w-6" style={{ color: '#7C6A9C' }} />
          <h2 className="text-xl font-semibold text-zinc-900">Parents</h2>
        </div>
        <p className="mt-2 text-zinc-700">
          For any clarifications or verification, you may contact Dimanya's parents.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ParentCard label="Mother" parent={mother} />
          <ParentCard label="Father" parent={father} />
        </div>
      </div>
    </section>
  );
}
