import Image from "next/image";

export default function PoweringSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/powering_the_fututre.svg"
          alt="Aerial city view"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gray-900/80" />
      </div>
      <div className="relative container text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-5">
          Powering the Future of Rental Governance
        </h2>
        <p className="text-gray-300 text-base max-w-2xl mx-auto mb-10 leading-relaxed">
          Join thousands of landlords, agents, and government bodies already transforming Nigeria&apos;s rental sector with TenancyHub.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="btn-primary text-sm shadow-lg">
            Get Started Free
          </button>
          <button className="border border-white/30 text-white hover:bg-white/10 font-semibold text-sm px-6 py-3 rounded-full transition-colors">
            Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
}
