const IconFileText = ({ color = "#fff" }: { color?: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const IconEdit = ({ color = "#fff" }: { color?: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const IconLock = ({ color = "#fff" }: { color?: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const IconHome = ({ color = "#fff" }: { color?: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const IconZap = ({ color = "#fff" }: { color?: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const IconCheckCircle = ({ color = "#fff" }: { color?: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const WHAT_PLATFORM_DOES = [
  {
    icon: <IconFileText color="#fff" />,
    iconBg: "bg-green-600",
    title: "Draft Agreements",
    desc: "Generate legally sound tenancy and agency agreements in minutes using prebuilt, regulation-compliant templates.",
  },
  {
    icon: <IconEdit color="#fff" />,
    iconBg: "bg-cyan-600",
    title: "Sign Digitally",
    desc: "All parties sign securely online — landlords, tenants, and agents — from any device, anywhere, anytime.",
  },
  {
    icon: <IconLock color="#fff" />,
    iconBg: "bg-red-600",
    title: "Secure & Compliant NDAs",
    desc: "Protect sensitive negotiations with legally binding NDAs that comply with Nigerian real estate regulations.",
  },
  {
    icon: <IconHome color="#fff" />,
    iconBg: "bg-green-600",
    title: "Tenant Registration",
    desc: "Auto-register tenants with the relevant government bodies on agreement execution — seamless and automatic.",
  },
  {
    icon: <IconZap color="#fff" />,
    iconBg: "bg-amber-500",
    title: "Automate Rent Reminders",
    desc: "Never miss a due date. Automated reminders keep landlords and tenants on the same page, on time.",
  },
  {
    icon: <IconCheckCircle color="#fff" />,
    iconBg: "bg-indigo-600",
    title: "Streamline Dispute Resolution & Tracking",
    desc: "Built-in audit trails and verification make resolving disputes fast, fair, and fully documented.",
  },
];

export default function WhatSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-14">
          {/* <span className="pill-beta mb-4 uppercase tracking-widest">
            Features
          </span> */}
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary tracking-tight mb-4">
            What This Platform Does
          </h2>
          <p className="text-text-muted text-base max-w-xl mx-auto leading-relaxed">
            From drafting to signing, registration, and compliance — TenancyHub handles every step of the rental agreement lifecycle.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHAT_PLATFORM_DOES.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
            >
              <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center mb-5`}>
                {item.icon}
              </div>
              <h3 className="text-sm font-semibold text-secondary mb-2">{item.title}</h3>
              <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
