export default function Hero() {
  return (
    <section className="bg-white text-center pt-20 md:pt-32 lg:pt-40 pb-16 md:pb-20 lg:pb-32">
      <div className="container flex flex-col items-center justify-center">
        {/* <div className="pill-accent mb-4 cursor-default">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-4 h-4"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
          Platform Features
        </div> */}
        
        <h1 className="text-center text-4xl md:text-5xl lg:text-[4.5rem] font-bold text-secondary mb-6 tracking-tight leading-[1.05]">
          Infrastructure for a More
          <br className="hidden md:block" /> Trusted Rental Market
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-text-muted leading-relaxed max-w-2xl">
          Explore the powerful tools that enable secure tenancy agreements,
          transparent rental management, and regulatory compliance across the
          entire real estate ecosystem.
        </p>
      </div>
    </section>
  );
}
