const IconFileText = ({ color = "#16a34a" }: { color?: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const IconShield = ({ color = "#2563eb" }: { color?: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconAlertTriangle = ({ color = "#d97706" }: { color?: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const IconUsers = ({ color = "#7c3aed" }: { color?: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconEdit = ({ color = "#0891b2" }: { color?: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const IconDatabase = ({ color = "#16a34a" }: { color?: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const WHY_CARDS = [
  {
    icon: <IconFileText color="#16a34a" />,
    bg: "bg-green-50",
    title: "Eliminate paper-based tenancy agreements",
    desc: "Say goodbye to lost documents, costly printouts, and messy filing. Everything lives securely in the cloud.",
  },
  {
    icon: <IconShield color="#2563eb" />,
    bg: "bg-blue-50",
    title: "Standardise agreements nationwide",
    desc: "Use government-compliant templates that protect landlords, agencies, and tenants under the law.",
  },
  {
    icon: <IconAlertTriangle color="#d97706" />,
    bg: "bg-amber-50",
    title: "Reduce rental fraud & disputes",
    desc: "Verified digital signatures and tamper-evident records mean every party is held accountable.",
  },
  {
    icon: <IconUsers color="#7c3aed" />,
    bg: "bg-purple-50",
    title: "Empower agents and landlords",
    desc: "Manage multiple properties from one dashboard with real-time visibility into every agreement.",
  },
  {
    icon: <IconEdit color="#0891b2" />,
    bg: "bg-cyan-50",
    title: "Accelerate the signing process",
    desc: "Close deals in minutes, not weeks. Sign from anywhere — no more waiting for in-person appointments.",
  },
  {
    icon: <IconDatabase color="#16a34a" />,
    bg: "bg-green-50",
    title: "Maintain a verifiable audit trail",
    desc: "Every action, timestamp, and change is logged so you always have proof of what was agreed.",
  },
];

export default function WhySection() {
  return (
    <section id="mission" className="py-20 bg-bg-light">
      <div className="container">
        <div className="text-center mb-14">
          {/* <span className="pill-beta mb-4 uppercase tracking-widest">
            Our Mission
          </span> */}
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary tracking-tight mb-4">
            Why This Platform Exists
          </h2>
          <p className="text-text-muted text-base max-w-xl mx-auto leading-relaxed">
            The Nigerian rental market is plagued by fraud, inefficiency, and a lack of legal certainty. TenancyHub solves all of that.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <div className={`w-10 h-10 rounded-xl ${card.bg} flex items-center justify-center mb-4`}>
                {card.icon}
              </div>
              <h3 className="text-sm font-semibold text-secondary mb-2 leading-snug">{card.title}</h3>
              <p className="text-xs text-text-muted leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
