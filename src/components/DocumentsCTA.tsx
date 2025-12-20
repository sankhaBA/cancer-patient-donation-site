import { FileCheck } from "lucide-react";

type DocumentsCTAProps = {
  docsLink: string;
};

export default function DocumentsCTA({ docsLink }: DocumentsCTAProps) {
  return (
    <section className="container mx-auto px-6 py-8">
      <div className="rounded-2xl border p-6 shadow-sm" style={{ borderColor: '#E6E6FA', background: '#E6E6FA' }}>
        <div className="flex items-center gap-3">
          <FileCheck className="h-6 w-6" style={{ color: '#7C6A9C' }} />
          <h2 className="text-xl font-semibold" style={{ color: '#7C6A9C' }}>Verified Documents</h2>
        </div>
        <p className="mt-3" style={{ color: '#7C6A9C' }}>
          View medical reports, hospital letters, and cost breakdown verified by the family.
        </p>
        <a
          href={docsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full px-5 py-3 text-white shadow-sm transition"
          style={{ background: '#7C6A9C' }}
          onMouseOver={e => (e.currentTarget.style.background = '#8B7B9B')}
          onMouseOut={e => (e.currentTarget.style.background = '#7C6A9C')}
        >
          <FileCheck className="h-5 w-5" style={{ color: '#E6E6FA' }} />
          Open Google Drive Folder
        </a>
      </div>
    </section>
  );
}
