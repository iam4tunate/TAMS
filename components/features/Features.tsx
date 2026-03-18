import Image from "next/image";

const featuresData = [
  {
    title: "Rent Now, Pay Monthly",
    description: "Through this model, TAMS provides flexible rental insurance, meaning users who qualify will be able to pay for their rental contracts on a monthly basis, ensuring more structure and stability.",
    benefits: [
      "Find your rental TAMS payment option",
      "Monthly repayments with flexible installments",
      "See your payment history and future tracking",
      "Easy access and automated system payouts",
    ],
    imagePath: "/images/feature_1.png",
  },
  {
    title: "Verified Properties Through ACCAS",
    description: "ACCAS is a secure asset registry and verification platform for lenders, property owners, and managers to register and manage assets on the blockchain ecosystem. This ensures trust and transparency for all stakeholders.",
    benefits: [
      "Verified property ownership and history",
      "Blockchain-backed security and immutability",
      "Transparent asset tracking and management",
      "Real-time asset verification through blockchain",
    ],
    imagePath: "/images/feature_2.png",
  },
  {
    title: "Maintenance Network (CYNC)",
    description: "CYNC is a network of maintenance providers and service professionals for residential property management. It ensures that every property within the ecosystem is maintained to the highest standards.",
    benefits: [
      "Direct access to verified artisans",
      "Real-time maintenance tracking",
      "Standardized service quality",
      "Flexible payment for services",
    ],
    imagePath: "/images/feature_3.png",
  },
  {
    title: "Automated Financial Operations",
    description: "Transform your financial operations with automated rental payments, insurance claims, and service provider payouts. Our platform ensures accuracy and speed in every transaction.",
    benefits: [
      "Automated rent collection and payouts",
      "Real-time financial reporting",
      "Seamless insurance management",
      "Secure and fast transactions",
    ],
    imagePath: "/images/feature_4.png",
  },
  {
    title: "Secure Digital Tenancy Documentation",
    description: "Digitalize your tenancy agreements with secure, blockchain-backed documentation. This ensures legal validity, transparency, and ease of access for both landlords and tenants.",
    benefits: [
      "Legally binding digital agreements",
      "Fast and secure digital signatures",
      "Easy access to documents",
      "Tamper-proof storage on blockchain",
    ],
    imagePath: "/images/feature_5.png",
  },
];

export default function Features() {
  return (
    <div className="w-full">
      {featuresData.map((feature, index) => {
        const isEven = index % 2 !== 0;
        return (
          <section
            key={index}
            className={`w-full py-12 lg:py-16 ${
              isEven ? "bg-white" : "bg-bg-light"
            }`}
          >
            <div
              className={`container flex flex-col ${
                isEven ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-16 lg:gap-32`}
            >
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-secondary leading-tight tracking-tight">
                  {feature.title}
                </h2>
                <p className="text-text-muted leading-relaxed mb-6 mt-4 max-w-xl">
                  {feature.description}
                </p>

                <div className="inline-block text-left w-full">
                  <h4 className="font-semibold text-secondary text-xl">
                    Key Benefits
                  </h4>
                  <ul className="flex flex-col gap-2 mt-2">
                    {feature.benefits.map((benefit, bIndex) => (
                      <li key={bIndex} className="flex items-center gap-4">
                        <span className="w-2 h-2 rounded-full bg-primary shrink-0 shadow-sm" />
                        <span className="text-gray-700 font-medium tracking-tight">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex-1 w-full flex justify-center lg:justify-end">
                <div className="w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100/50 transition-transform duration-500 hover:scale-[1.02]">
                  <Image
                    src={feature.imagePath}
                    alt={feature.title}
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
