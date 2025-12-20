import { Phone, Mail, MapPin } from "lucide-react";

type ContactDetailsProps = {
  address: string;
  phones: string[];
  emails: string[];
};

export default function ContactDetails({ address, phones, emails }: ContactDetailsProps) {
  return (
    <section className="container mx-auto px-6 py-8">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-zinc-900">Contact</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <MapPin className="h-6 w-6 shrink-0" style={{ color: '#7C6A9C' }} />
            <div>
              <p className="text-sm text-zinc-500">Address</p>
              <p className="font-medium text-zinc-800">{address}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="h-6 w-6 shrink-0" style={{ color: '#7C6A9C' }} />
            <div>
              <p className="text-sm text-zinc-500">Telephone</p>
              <ul className="space-y-1">
                {phones.map((p) => (
                  <li key={p} className="font-medium text-zinc-800">{p}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="h-6 w-6 shrink-0" style={{ color: '#7C6A9C' }} />
            <div>
              <p className="text-sm text-zinc-500">Email</p>
              <ul className="space-y-1">
                {emails.map((e) => (
                  <li
                    key={e}
                    className="font-medium text-zinc-800 break-all max-w-full"
                    style={{ wordBreak: 'break-all', overflowWrap: 'break-word' }}
                  >
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
