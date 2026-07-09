import type { Metadata } from "next";
import SupportClient from "@/components/SupportClient";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "SUPPORT | LUXAR",
  description: "Owner support for charging, maintenance, warranty, and software updates.",
};

export default function SupportPage() {
  return (
    <>
      <PageHeader
        eyebrow="owner support"
        title="HOW CAN WE"
        accent="HELP?"
        description="Everything you need to own, charge, and maintain your LUXAR."
      />
      <section className="reveal py-12 md:py-20 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-gutter)] container-max">
        <SupportClient />
      </section>
    </>
  );
}
