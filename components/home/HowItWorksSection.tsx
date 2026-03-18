import Image from "next/image";

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Create Account",
    desc: "Sign up in seconds as a landlord, agency, or tenant and verify your identity.",
    img: "/images/sign_digitally.svg",
  },
  {
    step: "02",
    title: "Build Profile",
    desc: "Add your properties, agency details, and compliance preferences to customise your workspace.",
    img: "/images/verify_parties.svg",
  },
  {
    step: "03",
    title: "Pre-Draft",
    desc: "Pick a government-approved template and auto-fill agreement details in a few clicks.",
    img: "/images/auto-register.svg",
  },
  {
    step: "04",
    title: "E-Signature Automation",
    desc: "All parties receive a signing link and execute the agreement digitally — instant and binding.",
    img: "/images/sign_digitally.svg",
  },
  {
    step: "05",
    title: "Submit & Store",
    desc: "Executed documents are submitted to regulators automatically and stored securely on your dashboard.",
    img: "/images/manage&Monitor.svg",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-14">
          {/* <span className="pill-beta mb-4 uppercase tracking-widest">
            How It Works
          </span> */}
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary tracking-tight mb-4">
            From Sign-Up to Signed Agreement
          </h2>
          <p className="text-text-muted text-sm max-w-lg mx-auto leading-relaxed">
            Only takes minutes. Follow these simple steps to get your first agreement executed.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {HOW_IT_WORKS.map((step, i) => (
            <div key={step.step} className="flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="w-16 h-16 rounded-2xl bg-bg-light border-2 border-[#d1fae5] overflow-hidden flex items-center justify-center">
                  <Image src={step.img} alt={step.title} width={48} height={48} className="object-contain" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center">
                  {i + 1}
                </div>
              </div>
              <p className="text-[10px] font-bold text-primary tracking-widest mb-1">{step.step}</p>
              <h3 className="text-xs font-semibold text-secondary mb-1.5">{step.title}</h3>
              <p className="text-xs text-text-muted leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
