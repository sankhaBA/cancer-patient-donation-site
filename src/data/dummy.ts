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
    deadlines: Array.from({ length: 17 }).map((_, idx) => ({
      id: idx + 1,
      title: `Phase ${idx + 1}`,
      date: new Date(2026, 0, 7 + idx * 10).toISOString().slice(0, 10),
      amount: 500000,
      description: "Medication procurement and session fees",
    })),
  },
  parents: {
    mother: {
      name: "Nirmala Perera",
      address: "No. 123, Temple Road, Galle, Sri Lanka",
      occupation: "Garment Factory Worker",
      phones: ["+94 71 222 3344", "+94 77 333 4455"],
    },
    father: {
      name: "Sunil Perera",
      address: "No. 123, Temple Road, Galle, Sri Lanka",
      occupation: "Three-Wheeler Driver",
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
