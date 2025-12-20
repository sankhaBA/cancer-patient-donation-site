import { FileCheck } from "lucide-react";

type DocumentsCTAProps = {
  docsLink: string;
};

export default function DocumentsCTA({ docsLink }: DocumentsCTAProps) {
  return (
    <section className="container mx-auto px-6 py-8">
      <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <FileCheck className="h-6 w-6 text-rose-700" />
          <h2 className="text-xl font-semibold text-rose-900">Verified Documents</h2>
        </div>
        <p className="mt-3 text-rose-800">
          View medical reports, hospital letters, and cost breakdown verified by the family.
        </p>
        <a
          href={docsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-rose-600 px-5 py-3 text-white shadow-sm transition hover:bg-rose-700"
        >
          <FileCheck className="h-5 w-5" />
          Open Google Drive Folder
        </a>
      </div>
    </section>
  );
}
