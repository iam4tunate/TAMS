export default function Hero() {
  return (
    <section className="bg-white text-center pt-20 md:pt-32 lg:pt-40 pb-16 md:pb-20 lg:pb-32">
      <div className="container flex flex-col items-center justify-center">
        <div className="pill-accent mb-4 cursor-default">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.0001 1.04169C14.9442 1.04169 18.9584 5.05585 18.9584 10C18.9584 14.9442 14.9442 18.9584 10.0001 18.9584C5.05591 18.9584 1.04175 14.9442 1.04175 10C1.04175 5.05585 5.05591 1.04169 10.0001 1.04169ZM10.0001 2.29169C5.74591 2.29169 2.29175 5.74585 2.29175 10C2.29175 14.2542 5.74591 17.7084 10.0001 17.7084C14.2542 17.7084 17.7084 14.2542 17.7084 10C17.7084 5.74585 14.2542 2.29169 10.0001 2.29169Z"
              fill="#066858"
            />
            <path
              d="M10.0001 14.6874C10.4603 14.6874 10.8334 14.3143 10.8334 13.8541C10.8334 13.3938 10.4603 13.0208 10.0001 13.0208C9.53984 13.0208 9.16675 13.3938 9.16675 13.8541C9.16675 14.3143 9.53984 14.6874 10.0001 14.6874Z"
              fill="#066858"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.9585 6.35411L9.37516 11.3541C9.37516 11.6991 9.65516 11.9791 10.0002 11.9791C10.3452 11.9791 10.6252 11.6991 10.6252 11.3541L11.0418 6.35411C11.0418 6.00911 10.8335 5.31244 10.0002 5.31244C9.16683 5.31244 8.9585 6.00911 8.9585 6.35411Z"
              fill="#066858"
            />
          </svg>
          Platform Features
        </div>

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
