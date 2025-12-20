import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "@/components/Hero";
import PatientInfo from "@/components/PatientInfo";
import DiseaseSummary from "@/components/DiseaseSummary";
import DocumentsCTA from "@/components/DocumentsCTA";
import ContactDetails from "@/components/ContactDetails";
import HospitalDoctor from "@/components/HospitalDoctor";
import BankAccounts from "@/components/BankAccounts";
import TreatmentTimeline from "@/components/TreatmentTimeline";
import Footer from "@/components/Footer";
import ParentsDetails from "@/components/ParentsDetails";
import { dummyData } from "@/data/dummy";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const { patient, disease, docsLink, contact, hospital, bankAccounts, treatmentPlan, parents } = dummyData;
  return (
    <div className={`${geistSans.className} ${geistMono.className} bg-zinc-100 font-sans`}>
      <Head>
        <title>Help {patient.name} | Donation Request</title>
        <meta name="description" content="Support Dimanya's urgent cancer treatment with your donation." />
      </Head>
      <Hero
        name={patient.name}
        age={patient.age}
        diseaseTitle={disease.title}
        summary={disease.summary}
        docsLink={docsLink}
      />
      <main>
        <PatientInfo name={patient.name} age={patient.age} />
        <DiseaseSummary title={disease.title} summary={disease.summary} />
        <DocumentsCTA docsLink={docsLink} />
        <ContactDetails address={contact.address} phones={contact.phones} emails={contact.emails} />
        <ParentsDetails mother={parents.mother} father={parents.father} />
        <HospitalDoctor hospital={hospital.hospital} doctor={hospital.doctor} />
        <BankAccounts accounts={bankAccounts} />
        <TreatmentTimeline
          treatmentName={treatmentPlan.treatmentName}
          description={treatmentPlan.description}
          totalAmount={treatmentPlan.totalAmount}
          currency={treatmentPlan.currency}
          deadlines={treatmentPlan.deadlines}
          collectedAmount={
            typeof process.env.NEXT_PUBLIC_COLLECTED_AMOUNT !== 'undefined'
              ? Number(process.env.NEXT_PUBLIC_COLLECTED_AMOUNT)
              : 0
          }
        />
      </main>
      <Footer />
    </div>
  );
}
