import Link from "next/link";

// Custom SVG Icons matching the WordPress theme
const FacebookIcon = () => (
    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M1.82727 6.83333C1.14284 6.83333 1 6.96763 1 7.61111V8.77778C1 9.42126 1.14284 9.55556 1.82727 9.55556H3.48182V14.2222C3.48182 14.8657 3.62466 15 4.30909 15H5.96364C6.64807 15 6.79091 14.8657 6.79091 14.2222V9.55556H8.64871C9.1678 9.55556 9.30155 9.4607 9.44416 8.99145L9.7987 7.82478C10.043 7.02095 9.89246 6.83333 9.00326 6.83333H6.79091V4.88889C6.79091 4.45933 7.16129 4.11111 7.61818 4.11111H9.97273C10.6572 4.11111 10.8 3.97681 10.8 3.33333V1.77778C10.8 1.1343 10.6572 1 9.97273 1H7.61818C5.33373 1 3.48182 2.74111 3.48182 4.88889V6.83333H1.82727Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
);

const XIcon = () => (
    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M4.41177 0H0L5.23083 6.87316L0.334618 12.6389H2.59681L6.29998 8.27809L9.58823 12.5988H14L8.6172 5.52593L8.62673 5.53813L13.2614 0.0802914H10.9992L7.55741 4.13336L4.41177 0ZM2.43522 1.20371H3.80866L11.5648 11.395H10.1913L2.43522 1.20371Z" fill="currentColor" />
    </svg>
);

const DribbbleIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.9989 10.0113C16.2575 9.87227 15.4949 9.7998 14.7168 9.7998C10.435 9.7998 6.62665 11.9938 4.19922 15.3997M14.5997 3.39941C12.0962 6.33329 8.33416 8.19931 4.12763 8.19931C3.05145 8.19931 2.00436 8.07718 1 7.84627M11.0941 17.0005C11.2946 16.0293 11.3999 15.0235 11.3999 13.9931C11.3999 8.94036 8.86738 4.47788 5 1.80078M16.9997 8.99983C16.9997 13.418 13.418 16.9997 8.99983 16.9997C4.58165 16.9997 1 13.418 1 8.99983C1 4.58165 4.58165 1 8.99983 1C13.418 1 16.9997 4.58165 16.9997 8.99983Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
);

const InstagramIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.0586 4.94727C12.6109 4.94727 13.0586 4.49955 13.0586 3.94727C13.0586 3.39498 12.6109 2.94727 12.0586 2.94727V4.94727ZM12.0496 2.94727C11.4973 2.94727 11.0496 3.39498 11.0496 3.94727C11.0496 4.49955 11.4973 4.94727 12.0496 4.94727V2.94727ZM8 14C6.32181 14 5.16377 13.9979 4.2928 13.8808C3.45059 13.7675 3.02803 13.5636 2.73223 13.2678L1.31802 14.682C2.04735 15.4113 2.96231 15.7199 4.0263 15.8629C5.06152 16.0021 6.37835 16 8 16V14ZM0 8C0 9.62165 -0.00212373 10.9385 0.137058 11.9737C0.280107 13.0377 0.588687 13.9526 1.31802 14.682L2.73223 13.2678C2.43644 12.972 2.23246 12.5494 2.11922 11.7072C2.00212 10.8362 2 9.67819 2 8H0ZM14 8C14 9.67819 13.9979 10.8362 13.8808 11.7072C13.7675 12.5494 13.5636 12.972 13.2678 13.2678L14.682 14.682C15.4113 13.9526 15.7199 13.0377 15.8629 11.9737C16.0021 10.9385 16 9.62165 16 8H14ZM8 16C9.62165 16 10.9385 16.0021 11.9737 15.8629C13.0377 15.7199 13.9526 15.4113 14.682 14.682L13.2678 13.2678C12.972 13.5636 12.5494 13.7675 11.7072 13.8808C10.8362 13.9979 9.67819 14 8 14V16ZM8 2C9.67819 2 10.8362 2.00212 11.7072 2.11922C12.5494 2.23246 12.972 2.43644 13.2678 2.73223L14.682 1.31802C13.9526 0.588687 13.0377 0.280107 11.9737 0.137058C10.9385 -0.00212373 9.62165 0 8 0V2ZM16 8C16 6.37835 16.0021 5.06152 15.8629 4.0263C15.7199 2.96231 15.4113 2.04735 14.682 1.31802L13.2678 2.73223C13.5636 3.02803 13.7675 3.45059 13.8808 4.2928C13.9979 5.16377 14 6.32181 14 8H16ZM8 0C6.37835 0 5.06152 -0.00212373 4.0263 0.137058C2.96231 0.280107 2.04735 0.588687 1.31802 1.31802L2.73223 2.73223C3.02803 2.43644 3.45059 2.23246 4.2928 2.11922C5.16377 2.00212 6.32181 2 8 2V0ZM2 8C2 6.32181 2.00212 5.16377 2.11922 4.2928C2.23246 3.45059 2.43644 3.02803 2.73223 2.73223L1.31802 1.31802C0.588687 2.04735 0.280107 2.96231 0.137058 4.0263C-0.00212373 5.06152 0 6.37835 0 8H2ZM10.3171 8.00134C10.3171 9.28031 9.28031 10.3171 8.00134 10.3171V12.3171C10.3849 12.3171 12.3171 10.3849 12.3171 8.00134H10.3171ZM8.00134 10.3171C6.72236 10.3171 5.68555 9.28031 5.68555 8.00134H3.68555C3.68555 10.3849 5.61779 12.3171 8.00134 12.3171V10.3171ZM5.68555 8.00134C5.68555 6.72236 6.72236 5.68555 8.00134 5.68555V3.68555C5.61779 3.68555 3.68555 5.61779 3.68555 8.00134H5.68555ZM8.00134 5.68555C9.28031 5.68555 10.3171 6.72236 10.3171 8.00134H12.3171C12.3171 5.61779 10.3849 3.68555 8.00134 3.68555V5.68555ZM12.0586 2.94727H12.0496V4.94727H12.0586V2.94727Z" fill="currentColor" />
    </svg>
);

export default function Footer() {
    const quickLinks = [
        { label: "about", href: "#" },
        { label: "who we are", href: "#" },
        { label: "services", href: "#" },
        { label: "Projects", href: "#" },
        { label: "blog", href: "#" },
        { label: "pricing", href: "#" },
        { label: "contact us", href: "#" },
    ];

    return (
        <footer className="bg-[#1c1c1c] text-white pt-32 pb-0 overflow-hidden">

            <div className="px-6 md:px-20 lg:px-40">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                        {/* Left Column - Headline & Socials */}
                        <div className="lg:col-span-5">
                            <h4 className="text-[80px] font-bold leading-[0.95] tracking-tight mb-6">
                                Helping<br />
                                start-ups<br />
                                scale & grow.
                            </h4>

                            <div className="flex gap-3 mt-6">
                                {[
                                    { icon: <FacebookIcon />, href: "#" },
                                    { icon: <XIcon />, href: "#" },
                                    { icon: <DribbbleIcon />, href: "#" },
                                    { icon: <InstagramIcon />, href: "#" },
                                ].map((item, i) => (
                                    <Link
                                        key={i}
                                        href={item.href}
                                        className="w-8 h-8 rounded-full bg-[#2a2a2a] flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all duration-300"
                                    >
                                        {item.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Middle Column - Quick Links */}
                        <div className="lg:col-span-4">
                            <h4 className="flex items-center gap-2 mb-6 text-[18px] font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                                Quick links
                            </h4>

                            <div className="flex flex-wrap gap-2">
                                {quickLinks.map((link, i) => (
                                    <Link
                                        key={i}
                                        href={link.href}
                                        className="px-4 py-2 border border-white/20 rounded-full text-[11px] font-medium text-gray-300 hover:bg-white hover:text-black hover:border-white transition-all duration-300 uppercase tracking-wider"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Right Column - Contact */}
                        <div className="lg:col-span-3">
                            <h4 className="flex items-center gap-2 mb-5 text-[18px] font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                                Contact
                            </h4>

                            <div className="space-y-3 text-gray-400 text-[16px]">
                                <a
                                    href="mailto:agntixs@studio.com"
                                    target="_blank"
                                    className="block hover:text-white transition-colors"
                                >
                                    agntixs@studio.com
                                </a>
                                <a
                                    href="tel:+3025550107"
                                    target="_blank"
                                    className="block hover:text-white transition-colors"
                                >
                                    +(302) 555-0107
                                </a>
                                <a
                                    href="https://www.google.com/maps/"
                                    target="_blank"
                                    className="block leading-relaxed hover:text-white transition-colors"
                                >
                                    4517 Washington Ave. Manchester,<br />
                                    Kentucky 39495
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom - Massive Text */}
            <div className="w-full flex justify-end mt-24 px-6 md:px-20 lg:px-40">
                <h1 className="text-[11vw] leading-[0.8] font-bold tracking-tighter text-white text-right mb-[10px] mr-[-70px]">
                    hello@kitebe.in
                </h1>
            </div>
        </footer>
    );
}
