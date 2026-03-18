import Image from "next/image";

export default function TrustBar() {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="container">
        <p className="text-center text-xs font-semibold text-gray-700 uppercase tracking-widest mb-8">
          Trusted by House Managers, Stakeholders &amp; Regulatory Bodies
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {[
            { src: "/images/fhs.png", alt: "FHS", height: 36 },
            { src: "/images/ministryOfHousing.png", alt: "Ministry of Housing", height: 40 },
            { src: "/images/redan.png", alt: "REDAN", height: 36 },
          ].map((logo) => (
            <div key={logo.alt}>
              <Image src={logo.src} alt={logo.alt} width={120} height={logo.height} className="object-contain h-14" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
