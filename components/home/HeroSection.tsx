import Image from "next/image";

const IconArrowRight = () => (
  <svg
  className="inline-block"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const IconPlay = () => (
  <svg className="inline-block" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

export default function HeroSection() {
  return (
    <section className="pt-28 pb-16 bg-bg-light overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="pill-accent mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              Now live — digitise your tenancy today
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary leading-[1.1] tracking-tight mb-5">
              Digitize Tenancy &<br />
              Agency Agreements.
              <br />
              <span className="text-primary">Ensure Compliance.</span>
              <br />
              Prevent Fraud.
            </h1>
            <p className="text-text-muted text-base lg:text-lg leading-relaxed mb-8 max-w-lg">
              TenancyHub is Nigeria&apos;s leading platform for creating,
              signing, and managing legally binding tenancy agreements — fully
              digital, fully compliant.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <button className="btn-primary flex items-center gap-2 text-sm shadow-md">
                <span>Get Started</span> <IconArrowRight />
              </button>
              <button className="btn-outline flex items-center gap-2 text-sm">
                <IconPlay /> Watch Demo
              </button>
            </div>
            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              {[
                { value: "12,000+", label: "Agreements signed" },
                { value: "98%", label: "Compliance rate" },
                { value: "60+", label: "Cities covered" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-xl font-bold text-secondary">{s.value}</p>
                  <p className="text-xs text-text-muted font-medium">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Right — Hero Image */}
          <div className="relative flex justify-center pt-8 lg:pt-0">
            <div className="relative w-full max-w-xl px-4 py-8 sm:px-8 sm:py-10">
              {/* Image Container */}
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-gray-100 relative">
                <Image
                  src="/images/hero_img.svg"
                  alt="TenancyHub platform preview showing a modern building"
                  width={600}
                  height={420}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Floating badge - Top Right */}
              <div className="absolute top-0 right-0 sm:top-2 sm:right-2 lg:-right-4 bg-white rounded-xl px-4 py-3 shadow-xl flex items-center gap-3 z-10 border border-gray-100 transition-transform hover:-translate-y-1">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                    <path d="M9 22v-4h6v4"></path>
                    <path d="M8 6h.01"></path>
                    <path d="M16 6h.01"></path>
                    <path d="M12 6h.01"></path>
                    <path d="M12 10h.01"></path>
                    <path d="M12 14h.01"></path>
                    <path d="M16 10h.01"></path>
                    <path d="M16 14h.01"></path>
                    <path d="M8 10h.01"></path>
                    <path d="M8 14h.01"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-secondary">20k+ Properties</p>
                  <p className="text-[10px] text-text-muted font-medium">Registered & active</p>
                </div>
              </div>

              {/* Floating badge - Bottom Left */}
              <div className="absolute bottom-0 left-0 sm:bottom-2 sm:left-2 lg:-left-6 lg:bottom-2 bg-white rounded-xl px-4 py-3 shadow-xl flex items-center gap-3 z-10 border border-gray-100 transition-transform hover:-translate-y-1">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="M9 12l2 2 4-4"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-secondary">100% Compliance</p>
                  <p className="text-[10px] text-text-muted font-medium">Government Verified</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
