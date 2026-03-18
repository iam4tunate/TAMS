const advantagesData = [
  {
    title: "Reduced Property Fraud",
    description: "Eliminate risk with secure asset registry and verification tools that make it impossible to fake.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Better Fraud Control",
    description: "Protect all stakeholders with robust identity and asset validation systems built-in.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Improve Compliance Transparency",
    description: "Maintain clear logs for regulatory and legal standards with automated, fault-free reporting.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
  },
  {
    title: "Simplify Document Verification",
    description: "Digital signatures and automated checks for every lease to guarantee absolute authenticity.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="m9 15 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Consolidated Asset Management (TAMS)",
    description: "A single hub for tracking every rental asset in your portfolio with complete transparency.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect width="7" height="7" x="3" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="14" rx="1" />
        <rect width="7" height="7" x="3" y="14" rx="1" />
      </svg>
    ),
  },
  {
    title: "Secure Legal Validity",
    description: "Ensure agreements are legally binding and tamper-proof for ongoing business relationships.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
];

export default function Advantages() {
  return (
    <section className="section-padding">
      <div className="container text-center">
          <div className="pill-accent cursor-default flex items-center justify-center gap-2 mb-4">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-4 h-4"
            >
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              <path d="m9 11 3 3L22 4" />
            </svg>
            Why Choose Us
          </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary mb-6 lg:mb-12 leading-tight tracking-tight">
          Key advantages<br />for all stakeholders
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto text-left">
          {advantagesData.map((adv, index) => (
            <div 
              key={index} 
              className="p-8 lg:p-10 bg-white border border-gray-200 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 flex flex-col group"
            >
              <div className="w-12 h-12 group-hover:bg-bg-light group-hover:text-primary rounded-xl flex items-center justify-center mb-10 shadow-sm border border-primary/10 bg-primary text-white transition-colors duration-300">
                {adv.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4 leading-tight tracking-tight">{adv.title}</h3>
              <p className="text-text-muted text-[15px] leading-relaxed font-medium">{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
