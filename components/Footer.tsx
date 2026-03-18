import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-24 pb-12">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-20">
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-white rounded-xl flex items-end justify-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-secondary mb-0.5"
                >
                  <path
                    d="M5 21V5C5 4.5 5.5 4 6 4H18C18.5 4 19 4.5 19 5V21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 21V16C9 15.5 9.5 15 10 15H14C14.5 15 15 15.5 15 16V21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 21H3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="9" cy="9" r="1.5" fill="currentColor" />
                  <circle cx="15" cy="9" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <span className="text-3xl font-extrabold tracking-tight">
                TAMS
              </span>
            </div>

            <div className="flex gap-16 md:gap-24 pl-2">
              <div className="flex flex-col gap-5">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors font-medium"
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors font-medium"
                >
                  Blog
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors font-medium"
                >
                  FAQ
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors font-medium"
                >
                  Support
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 md:justify-start lg:pl-12">
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Follow us on social media
              </h4>
              <div className="flex flex-wrap gap-4 md:gap-6 text-sm">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors font-medium"
                >
                  Instagram
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors font-medium"
                >
                  Twitter
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors font-medium"
                >
                  LinkedIn
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors font-medium"
                >
                  Facebook
                </Link>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold text-lg mb-4">
                Subscribe to our newsletter to get updates
              </h4>
              <div className="flex flex-col lg:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 bg-white border-0 rounded-lg px-5 py-3.5 text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all font-medium"
                />
                <button className="bg-primary hover:bg-[#007a5b] text-white font-bold px-8 py-3.5 rounded-lg transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col items-center justify-center"></div>
      </div>
    </footer>
  );
}
