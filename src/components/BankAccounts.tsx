import { Banknote } from "lucide-react";

type BankAccount = {
  bankName: string;
  accountName: string;
  accountNumber: string;
  branch?: string;
  swift?: string;
  notes?: string;
};

type BankAccountsProps = {
  accounts: BankAccount[];
};

export default function BankAccounts({ accounts }: BankAccountsProps) {
  return (
    <section id="bank-accounts" className="container mx-auto px-6 py-8">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <Banknote className="h-6 w-6" style={{ color: '#7C6A9C' }} />
          <h2 className="text-xl font-semibold text-zinc-900">Bank Accounts</h2>
        </div>
        <p className="mt-2 text-zinc-700">
          Please use one of the following accounts to deposit your donation.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {accounts.map((acc) => (
            <div
              key={`${acc.bankName}-${acc.accountNumber}`}
              className="rounded-xl border border-zinc-200 bg-zinc-50 p-5"
            >
              <p className="text-sm text-zinc-500">Bank</p>
              <p className="font-semibold text-zinc-900">{acc.bankName}</p>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <p className="text-sm text-zinc-500">Account Name</p>
                  <p className="font-medium text-zinc-800">{acc.accountName}</p>
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Account Number</p>
                  <p className="font-medium text-zinc-800">{acc.accountNumber}</p>
                </div>
                {acc.branch && (
                  <div>
                    <p className="text-sm text-zinc-500">Branch</p>
                    <p className="font-medium text-zinc-800">{acc.branch}</p>
                  </div>
                )}
                {acc.swift && (
                  <div>
                    <p className="text-sm text-zinc-500">SWIFT</p>
                    <p className="font-medium text-zinc-800">{acc.swift}</p>
                  </div>
                )}
              </div>
              {acc.notes && (
                <p className="mt-3 text-sm text-zinc-600">{acc.notes}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
