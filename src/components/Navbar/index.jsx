import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
            style={{
                background: scrolled
                    ? "rgba(15, 8, 3, 0.85)"
                    : "linear-gradient(to bottom, rgba(10,5,2,0.75) 0%, transparent 100%)",
                backdropFilter: scrolled ? "blur(12px)" : "none",
                borderBottom: scrolled ? "1px solid rgba(198,161,91,0.2)" : "none",
            }}
        >
            <div
                className="flex justify-between items-center px-6 py-4 max-w-screen-xl mx-auto w-full"
                dir="rtl"
            >
                {/* Logo + Brand */}
                <div className="flex items-center gap-3" >
                    <img
                        className="w-8 md:w-12 h-8 md:h-12 object-contain drop-shadow-[0_0_8px_rgba(255,215,0,0.4)] "
                        src="src/assets/images/angel-logo1.png"
                        alt="logo"
                    />
                    <span
                        className="text-sm md:text-xl font-bold tracking-wide"
                        style={{
                            background: "linear-gradient(90deg, #fff8e1, #f5c842, #c6a15b)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            textShadow: "none",
                            filter: "drop-shadow(0 0 8px rgba(255,215,0,0.35))",
                        }}
                    >
                        فريق الملاك المسرحي
                    </span>
                </div>

                {/* Nav Links */}
                <div className="flex items-center gap-2">
                    {[
                        { label: "الرئيسية" },
                        { label: "العروض السابقة" },
                        { label: "عن الفريق" },
                    ].map(({ label }) => (
                        <button
                            key={label}
                            className="relative px-4 py-2 text-sm font-semibold rounded-md cursor-pointer transition-all duration-300 group"
                            style={{ color: "#f5e6c4" }}
                        >
                            {/* Gold underline on hover */}
                            <span
                                className="absolute bottom-1 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-4/5 transition-all duration-300 rounded-full"
                                style={{ background: "linear-gradient(90deg, transparent, #c6a15b, transparent)" }}
                            />
                            {/* Subtle glow bg on hover */}
                            <span
                                className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ background: "rgba(198,161,91,0.08)" }}
                            />
                            <span className="relative z-10">{label}</span>
                        </button>
                    ))}

                    {/* CTA Button */}
                    {/* <button
                        className="mr-2 px-5 py-2 rounded-md text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95"
                        style={{
                            background: "linear-gradient(135deg, #c6a15b, #e8c97a, #c6a15b)",
                            color: "#1a0f00",
                            boxShadow: "0 2px 16px rgba(198,161,91,0.35)",
                        }}
                    >
                        احجز تذكرتك
                    </button> */}
                </div>
            </div>
        </nav>
    );
}