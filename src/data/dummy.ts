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
  isCompleted: boolean;
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
    name: "Mindulee Premalal",
    age: 20,
  },
  disease: {
    title: "Malignant Melanoma Cancer",
    summary:
      "Mindulee is a kind, resilient young Sri Lankan battling an aggressive form of skin cancer, currently at stage III. An immunotherapy course of Pembroxin  (Pembrolizumab) is required to improve her chances of remission and long-term survival.Your support can make a life-changing difference in her fight against this disease.",
  },
  docsLink:
    "https://drive.google.com/drive/folders/1Qvv_ZOpmq06cf0wz8RRJaILQ0WU-VZp6?usp=sharing",

  contact: {
    address:
      "'Manjula', Wallahagoda, Gampola, Sri Lanka",
    phones: ["+94 70 119 3111", "+94 70 119 3100"],
    emails: ["careforcure.donations@gmail.com", "sahanruwansara2000@gmail.com"],
  },
  hospital: {
    hospital: "National Cancer Institute Sri Lanka (Apeksha Hospital), Maharagama",
    doctor: "Dr. Wasantha Rathnayake (Consultant Clinical Oncologist)",
  },
  bankAccounts: [
    {
      bankName: "Bank of Ceylon",
      accountName: "U.S.R Premalal",
      accountNumber: "89356551",
      branch: "Nuwaraeliya",
      // swift: "BCEYLKLX",
      // notes: "Savings Account",
    },
    // {
    //   bankName: "Commercial Bank",
    //   accountName: "Kavindu Perera",
    //   accountNumber: "987654321",
    //   branch: "Maharagama Branch",
    //   swift: "CCEYLKLX",
    // },
  ],
  treatmentPlan: {
    treatmentName: "Targeted Immunotherapy with Pembroxin (Pembrolizumab)",
    description:
      "A 1 year protocol combining targeted immunotherapy sessions to control cancer growth and support recovery.",
    totalAmount: 5888000,
    currency: "LKR",
    deadlines: [
      { id: 1, title: "Phase 1", date: "2025-12-23", amount: 658000, description: "Medication procurement and session fees", isCompleted: true },
      { id: 2, title: "Phase 2", date: "2026-01-13", amount: 330000, description: "Medication procurement and session fees", isCompleted: true },
      { id: 3, title: "Phase 3", date: "2026-02-03", amount: 330000, description: "Medication procurement and session fees", isCompleted: false },
      { id: 4, title: "Phase 4", date: "2026-02-24", amount: 330000, description: "Medication procurement and session fees", isCompleted: false },
      { id: 5, title: "Phase 5", date: "2026-03-17", amount: 330000, description: "Medication procurement and session fees", isCompleted: false },
      { id: 6, title: "Phase 6", date: "2026-04-07", amount: 330000, description: "Medication procurement and session fees", isCompleted: false },
      { id: 7, title: "Phase 7", date: "2026-04-28", amount: 330000, description: "Medication procurement and session fees", isCompleted: false },
      { id: 8, title: "Phase 8", date: "2026-05-19", amount: 330000, description: "Medication procurement and session fees", isCompleted: false },
      { id: 9, title: "Phase 9", date: "2026-06-09", amount: 330000, description: "Medication procurement and session fees", isCompleted: false },
      { id: 10, title: "Phase 10", date: "2026-06-30", amount: 330000, description: "Medication procurement and session fees", isCompleted: false },
      { id: 11, title: "Phase 11", date: "2026-07-21", amount: 330000, description: "Medication procurement and session fees", isCompleted: false },
      { id: 12, title: "Phase 12", date: "2026-08-11", amount: 330000, description: "Medication procurement and session fees", isCompleted: false },
      { id: 13, title: "Phase 13", date: "2026-09-01", amount: 330000, description: "Medication procurement and session fees", isCompleted: false },
      { id: 14, title: "Phase 14", date: "2026-09-22", amount: 330000, description: "Medication procurement and session fees", isCompleted: false },
      { id: 15, title: "Phase 15", date: "2026-10-13", amount: 330000, description: "Medication procurement and session fees", isCompleted: false },
      { id: 16, title: "Phase 16", date: "2026-11-03", amount: 330000, description: "Medication procurement and session fees", isCompleted: false },
      { id: 17, title: "Phase 17", date: "2026-11-24", amount: 330000, description: "Medication procurement and session fees", isCompleted: false },
    ],
  },
  parents: {
    mother: {
      name: "Gayana Kumari",
      address: "'Manjula', Wallahagoda, Gampola, Sri Lanka",
      occupation: "Housewife",
      phones: ["+94 77 900 4975"],
    },
    father: {
      name: "Senaka Premalal",
      address: "'Manjula', Wallahagoda, Gampola, Sri Lanka",
      occupation: "Opthalmic Technologist",
      phones: ["+94 70 119 3111"],
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
