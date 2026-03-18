import Image from "next/image";

const IconCheck = ({ color = "#d97706" }: { color?: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const LEGAL_BENEFITS = [
  "All agreements are legally binding and government-backed",
  "Digital signatures meet Nigerian e-signature laws",
  "Tamper-evident audit logs for every agreement",
  "Instant notifications for regulatory compliance deadlines",
];

export default function LegalSection() {
  return (
    <section className="py-20 bg-linear-to-br from-amber-500 to-orange-500 overflow-hidden relative">
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-white/10 pointer-events-none" />
      <div className="absolute -left-16 -bottom-16 w-56 h-56 rounded-full bg-white/5 pointer-events-none" />
      <div className="container relative">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold text-amber-900 bg-amber-100 rounded-full px-3 py-1 mb-4 uppercase tracking-widest">
            Trust &amp; Compliance
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
            Built for Legal Certainty &amp; Trust
          </h2>
          <p className="text-amber-100 text-sm max-w-xl mx-auto leading-relaxed">
            Every agreement on TenancyHub is legally enforceable, tamper-evident, and backed by Nigeria&apos;s regulatory framework.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-4">
            {LEGAL_BENEFITS.map((b) => (
              <div key={b} className="flex items-start gap-3 bg-white/10 backdrop-blur rounded-xl px-5 py-4">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5">
                  <IconCheck color="#d97706" />
                </div>
                <p className="text-white text-sm font-medium leading-snug">{b}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl max-w-md w-full">
              <Image
                src="/images/security&compliance.svg"
                alt="Legal signing and compliance illustration"
                width={500}
                height={350}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
