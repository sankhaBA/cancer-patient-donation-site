export type Patient = {
  name: string;
  age: number;
};

export type Disease = {
  title: string;
  summary: string;
};

export type ContactDetails = {
  address: string;
  phones: string[];
  emails: string[];
};

export type HospitalInfo = {
  hospital: string;
  doctor: string;
};

export type BankAccount = {
  bankName: string;
  accountName: string;
  accountNumber: string;
  branch?: string;
  swift?: string;
  notes?: string;
};

export type TreatmentDeadline = {
  id: number;
  title: string;
  date: string; // ISO date string
  amount: number; // in currency units
  description?: string;
};

export type TreatmentPlan = {
  treatmentName: string;
  description: string;
  totalAmount: number;
  currency: string;
  deadlines: TreatmentDeadline[];
};

export type DonationSiteData = {
  patient: Patient;
  disease: Disease;
  docsLink: string;
  contact: ContactDetails;
  hospital: HospitalInfo;
  bankAccounts: BankAccount[];
  treatmentPlan: TreatmentPlan;
  parents: Parents;
};

export const dummyData: DonationSiteData = {
  patient: {
    name: "Kavindu Perera",
    age: 20,
  },
  disease: {
    title: "Advanced Cutaneous Carcinoma",
    summary:
      "Kavindu is a kind, resilient young Sri Lankan battling an aggressive form of skin cancer. Immediate multi-phase treatment is required to halt progression and protect vital functions. Your support directly funds his life-saving care.",
  },
  docsLink:
    "https://drive.google.com/drive/folders/EXAMPLE-VERIFIED-PATIENT-DOCUMENTS",
  contact: {
    address:
      "No. 123, Temple Road, Galle, Sri Lanka",
    phones: ["+94 71 123 4567", "+94 77 987 6543"],
    emails: ["help.kavindu@example.org", "family.kavindu@example.org"],
  },
  hospital: {
    hospital: "National Cancer Institute (Apeksha), Maharagama",
    doctor: "Dr. S. Jayasinghe (Consultant Oncologist)",
  },
  bankAccounts: [
    {
      bankName: "Bank of Ceylon",
      accountName: "Kavindu Perera",
      accountNumber: "123456789",
      branch: "Galle Branch",
      swift: "BCEYLKLX",
      notes: "Savings Account",
    },
    {
      bankName: "Commercial Bank",
      accountName: "Kavindu Perera",
      accountNumber: "987654321",
      branch: "Maharagama Branch",
      swift: "CCEYLKLX",
    },
  ],
  treatmentPlan: {
    treatmentName: "Targeted Immunotherapy + Radiotherapy",
    description:
      "A 6-month protocol combining targeted immunotherapy and adjunct radiotherapy sessions to control tumor growth and support recovery.",
    totalAmount: 8500000,
    currency: "LKR",
    deadlines: [
      { id: 1, title: "Phase 1", date: "2026-01-07", amount: 500000, description: "Medication procurement and session fees" },
      { id: 2, title: "Phase 2", date: "2026-01-17", amount: 500000, description: "Medication procurement and session fees" },
      { id: 3, title: "Phase 3", date: "2026-01-27", amount: 500000, description: "Medication procurement and session fees" },
      { id: 4, title: "Phase 4", date: "2026-02-06", amount: 500000, description: "Medication procurement and session fees" },
      { id: 5, title: "Phase 5", date: "2026-02-16", amount: 500000, description: "Medication procurement and session fees" },
      { id: 6, title: "Phase 6", date: "2026-02-26", amount: 500000, description: "Medication procurement and session fees" },
      { id: 7, title: "Phase 7", date: "2026-03-08", amount: 500000, description: "Medication procurement and session fees" },
      { id: 8, title: "Phase 8", date: "2026-03-18", amount: 500000, description: "Medication procurement and session fees" },
      { id: 9, title: "Phase 9", date: "2026-03-28", amount: 500000, description: "Medication procurement and session fees" },
      { id: 10, title: "Phase 10", date: "2026-04-07", amount: 500000, description: "Medication procurement and session fees" },
      { id: 11, title: "Phase 11", date: "2026-04-17", amount: 500000, description: "Medication procurement and session fees" },
      { id: 12, title: "Phase 12", date: "2026-04-27", amount: 500000, description: "Medication procurement and session fees" },
      { id: 13, title: "Phase 13", date: "2026-05-07", amount: 500000, description: "Medication procurement and session fees" },
      { id: 14, title: "Phase 14", date: "2026-05-17", amount: 500000, description: "Medication procurement and session fees" },
      { id: 15, title: "Phase 15", date: "2026-05-27", amount: 500000, description: "Medication procurement and session fees" },
      { id: 16, title: "Phase 16", date: "2026-06-06", amount: 500000, description: "Medication procurement and session fees" },
      { id: 17, title: "Phase 17", date: "2026-06-16", amount: 500000, description: "Medication procurement and session fees" },
    ],
  },
  parents: {
    mother: {
      name: "Nirmala Perera",
      address: "No. 123, Temple Road, Galle, Sri Lanka",
      occupation: "Housewife",
      phones: ["+94 71 222 3344", "+94 77 333 4455"],
    },
    father: {
      name: "Sunil Perera",
      address: "No. 123, Temple Road, Galle, Sri Lanka",
      occupation: "Manager",
      phones: ["+94 72 555 6677"],
    },
  },
};

export type Parent = {
  name: string;
  address: string;
  occupation: string;
  phones: string[];
};

export type Parents = {
  mother: Parent;
  father: Parent;
};
