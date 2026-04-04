import label from "daisyui/components/label";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { Icon } from "@iconify/react";
import { gsap } from "gsap";
import { useRef } from "react";

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const iconRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        if (!iconRef.current) return;

        if (menuOpen) {
            // 🎭 → ❌
            gsap.to(iconRef.current, {
                rotate: 180,
                scale: 0.8,
                duration: 0.6,
                ease: "power3.inOut",
            });

            gsap.fromTo(
                menuRef.current.children,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                    duration: 0.6,
                    ease: "power3.out",
                }
            );
        } else {
            // ❌ → 🎭
            gsap.to(iconRef.current, {
                rotate: 0,
                scale: 1,
                duration: 0.5,
                ease: "power3.inOut",
            });
        }
    }, [menuOpen]);

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
                <a href="/" className="flex items-center gap-3" >
                    <img
                        className="w-9 md:w-12 h-9 md:h-12 object-contain drop-shadow-[0_0_8px_rgba(255,215,0,0.4)] "
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
                </a>

                {/* Nav Links */}
                <div className="flex items-center gap-2">
                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-2">
                        {[
                            { label: "الرئيسية", to: "/" },
                            { label: "العروض السابقة", to: "/old-shows" },
                            { label: "الورش المسرحية", to: "/workshops" },
                            { label: "عن الفريق", to: "/about-us" },
                        ].map(({ label, to }) => (
                            <button
                                key={label}
                                className="relative px-4 py-2 text-sm font-semibold rounded-md cursor-pointer transition-all duration-300 group"
                                style={{ color: "#f5e6c4" }}
                            >
                                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-4/5 transition-all duration-300 rounded-full"
                                    style={{ background: "linear-gradient(90deg, transparent, #c6a15b, transparent)" }}
                                />
                                <span className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{ background: "rgba(198,161,91,0.08)" }}
                                />
                                <NavLink to={to} className={({ isActive }) => isActive ? "text-[#c6a15b] relative z-10" : "relative z-10"}>
                                    {label}
                                </NavLink>
                            </button>
                        ))}
                    </div>

                    {/* Mobile: First 2 links */}
                    <div className="flex md:hidden items-center gap-6">
                        {[
                            { label: "الرئيسية", to: "/" },
                            { label: "العروض السابقة", to: "/old-shows" },
                        ].map(({ label, to }) => (
                            <NavLink to={to} className={({ isActive }) => isActive ? "text-[#c6a15b] relative z-10" : "text-[#f5e6c4] relative z-10"}>
                                {label}
                            </NavLink>
                        ))}
                    </div>

                    {/* 🎭 Theatre Icon */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden w-6 h-6 flex items-center justify-center"
                    >
                        <div ref={iconRef} className="transition-all">
                            <Icon
                                icon={menuOpen ? "mdi:close" : "fa6-solid:masks-theater"}
                                width="28"
                                className="text-[#c6a15b] drop-shadow-[0_0_6px_rgba(198,161,91,0.5)]"
                            />
                        </div>
                    </button>

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
                {menuOpen && (
                    <div
                        ref={menuRef}
                        className={`md:hidden absolute top-full left-0 w-full bg-[#0f0803]/95 backdrop-blur-lg border-t border-[#c6a15b]/20 py-6 flex flex-col items-center gap-5 ${menuOpen ? "block" : "hidden"
                            }`}
                    >
                        {[
                            { label: "الورش المسرحية", to: "/workshops" },
                            { label: "عن الفريق", to: "/about-us" },
                        ].map(({ label, to }) => (
                            <NavLink
                                key={label}
                                to={to}
                                onClick={() => setMenuOpen(false)}
                                className="text-[#f5e6c4] text-lg hover:text-[#c6a15b] transition"
                            >
                                {label}
                            </NavLink>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}