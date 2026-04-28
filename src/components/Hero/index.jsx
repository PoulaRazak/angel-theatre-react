import { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router";

export default function Hero() {
    const navigate = useNavigate();

    const heroRef = useRef(null);
    const leftCurtain = useRef(null);
    const rightCurtain = useRef(null);
    const contentRef = useRef(null);
    const bgRef = useRef(null);
    const lightRef = useRef(null);

    // Phase 1 — Diocese
    const dioceseRef = useRef(null);
    // Phase 2 — Church
    const churchRef = useRef(null);

    const dustParticles = useMemo(
        () =>
            [...Array(20)].map((_, i) => ({
                id: i,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
            })),
        []
    );

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "+=2400",   // extended for 3 phases
                scrub: 1,
                pin: true,
            },
        });

        // ─── Phase 0: Open curtains + spotlight + bg parallax ───────────────
        tl.to(leftCurtain.current, {
            x: "-110%",
            rotate: -2,
            ease: "power3.out",
            duration: 1,
        })
        .to(rightCurtain.current, {
            x: "110%",
            rotate: 2,
            ease: "power3.out",
            duration: 1,
        }, "<")
        .to(lightRef.current, {
            opacity: 1,
            scale: 1.2,
            ease: "power2.out",
            duration: 1,
        }, "<")
        .to(bgRef.current, {
            scale: 1.1,
            y: 80,
            ease: "none",
            duration: 1,
        }, "<")

        // ─── Phase 1: Diocese text fades IN ──────────────────────────────────
        .fromTo(dioceseRef.current,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, ease: "power2.out", duration: 0.5 },
            "<"
        )

        // hold Phase 1 on screen for a beat
        .to({}, { duration: 0.6 })

        // Phase 1 fades OUT
        .to(dioceseRef.current, {
            opacity: 0,
            y: -30,
            ease: "power2.in",
            duration: 0.4,
        })

        // ─── Phase 2: Church text fades IN ───────────────────────────────────
        .fromTo(churchRef.current,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, ease: "power2.out", duration: 0.5 }
        )

        // hold Phase 2
        .to({}, { duration: 0.6 })

        // Phase 2 fades OUT
        .to(churchRef.current, {
            opacity: 0,
            y: -30,
            ease: "power2.in",
            duration: 0.4,
        })

        // ─── Phase 3: Original hero content ──────────────────────────────────
        .fromTo(contentRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, ease: "power2.out", duration: 0.6 }
        );

        // 🌫️ Dust particles
        gsap.to(".dust", {
            y: -20,
            opacity: 0.6,
            stagger: 0.2,
            repeat: -1,
            yoyo: true,
            duration: 3,
            ease: "sine.inOut",
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    // Shared text block styles
    const phaseBase =
        "absolute inset-0 flex flex-col items-center justify-center text-center text-[#f5e6c4] z-20 opacity-0 pointer-events-none select-none";

    return (
        <section
            ref={heroRef}
            className="relative h-screen overflow-clip bg-[#1a120b]"
        >
            {/* 🖼️ Background */}
            <img
                ref={bgRef}
                src="/images/victorian.jpg"
                className="absolute inset-0 w-full h-full object-cover opacity-40"
            />

            {/* 💡 Spotlight */}
            <div
                ref={lightRef}
                className="absolute inset-0 opacity-0 z-10 bg-[radial-gradient(circle,rgba(255,215,150,0.25)_0%,transparent_60%)]"
            />

            {/* 🌫️ Dust Particles */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                {dustParticles.map(({ id, top, left }) => (
                    <span
                        key={id}
                        className="dust absolute w-1 h-1 bg-yellow-200 rounded-full opacity-30"
                        style={{ top, left }}
                    />
                ))}
            </div>

            {/* ═══ Phase 1 — Diocese ═══════════════════════════════════════════ */}
            <div ref={dioceseRef} className={phaseBase}>
                {/* Decorative top rule */}
                <div className="flex items-center gap-4 mb-6">
                    <span className="block w-16 h-px bg-[#c6a15b] opacity-60" />
                    <span className="text-[#c6a15b] text-lg tracking-widest opacity-70">✦</span>
                    <span className="block w-16 h-px bg-[#c6a15b] opacity-60" />
                </div>

                <p className="text-sm md:text-base tracking-[0.3em] uppercase text-[#c6a15b] opacity-80 mb-3">
                    برعاية كريمة من
                </p>

                <h2 className="text-3xl md:text-5xl font-bold leading-relaxed mb-4"
                    style={{ fontFamily: "'Amiri', 'Scheherazade New', serif" }}>
                    مطرانية شبرا الخيمة وتوابعها
                </h2>

                <div className="w-24 h-px bg-[#c6a15b] opacity-40 my-4 mx-auto" />

                <p className="text-base md:text-xl text-[#e8d5a3] opacity-85 leading-loose"
                    style={{ fontFamily: "'Amiri', 'Scheherazade New', serif" }}>
                    تحت رعاية نيافة الحبر الجليل
                    <br />
                    <span className="text-[#c6a15b] font-semibold text-xl md:text-2xl">
                        الأنبا مرقس
                    </span>
                </p>

                {/* Decorative bottom rule */}
                <div className="flex items-center gap-4 mt-6">
                    <span className="block w-16 h-px bg-[#c6a15b] opacity-60" />
                    <span className="text-[#c6a15b] text-lg tracking-widest opacity-70">✦</span>
                    <span className="block w-16 h-px bg-[#c6a15b] opacity-60" />
                </div>
            </div>

            {/* ═══ Phase 2 — Church ════════════════════════════════════════════ */}
            <div ref={churchRef} className={phaseBase}>
                <div className="flex items-center gap-4 mb-6">
                    <span className="block w-16 h-px bg-[#c6a15b] opacity-60" />
                    <span className="text-[#c6a15b] text-lg tracking-widest opacity-70">✦</span>
                    <span className="block w-16 h-px bg-[#c6a15b] opacity-60" />
                </div>

                <p className="text-sm md:text-base tracking-[0.3em] uppercase text-[#c6a15b] opacity-80 mb-3">
                    يُقدَّم من
                </p>

                <h2 className="text-3xl md:text-5xl font-bold leading-relaxed mb-4"
                    style={{ fontFamily: "'Amiri', 'Scheherazade New', serif" }}>
                    كنيسة السيدة العذراء والملاك غبريال
                </h2>

                <div className="w-24 h-px bg-[#c6a15b] opacity-40 my-4 mx-auto" />

                <p className="text-base md:text-xl text-[#e8d5a3] opacity-85 leading-loose"
                    style={{ fontFamily: "'Amiri', 'Scheherazade New', serif" }}>
                    تحت رعاية أبونا المحبوب
                    <br />
                    <span className="text-[#c6a15b] font-semibold text-xl md:text-2xl">
                        يونان عطا
                    </span>
                </p>

                <div className="flex items-center gap-4 mt-6">
                    <span className="block w-16 h-px bg-[#c6a15b] opacity-60" />
                    <span className="text-[#c6a15b] text-lg tracking-widest opacity-70">✦</span>
                    <span className="block w-16 h-px bg-[#c6a15b] opacity-60" />
                </div>
            </div>

            {/* ═══ Phase 3 — Original Hero Content ════════════════════════════ */}
            <div
                ref={contentRef}
                className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#f5e6c4] z-20 opacity-0"
            >
                <div className="flex items-center gap-4 mb-6">
                    <span className="block w-12 h-px bg-[#c6a15b] opacity-50" />
                    <span className="text-[#c6a15b] opacity-60">✦</span>
                    <span className="block w-12 h-px bg-[#c6a15b] opacity-50" />
                </div>

                <h1
                    className="text-4xl md:text-6xl font-bold mb-6 leading-relaxed"
                    style={{ fontFamily: "'Amiri', 'Scheherazade New', serif" }}
                >
                    يقدم لكم <br /> فريق الملاك المسرحي
                </h1>

                <button
                    onClick={() => navigate("/old-shows")}
                    className="px-8 py-3 bg-[#c6a15b] text-black rounded-lg shadow-lg hover:scale-105 transition cursor-pointer font-semibold tracking-wide"
                >
                    مشاهدة العروض
                </button>
            </div>

            {/* 🎭 Curtain Left */}
            <div
                ref={leftCurtain}
                className="absolute top-0 left-0 w-1/2 h-full z-30"
                style={{
                    backgroundImage: "url('/images/velvet3.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "left",
                }}
            />

            {/* 🎭 Curtain Right */}
            <div
                ref={rightCurtain}
                className="absolute top-0 right-0 w-1/2 h-full z-30"
                style={{
                    backgroundImage: "url('/images/velvet3r.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "right",
                }}
            />

            {/* 🎬 Cinematic Overlay */}
            <div className="absolute inset-0 bg-black/30 z-10" />
        </section>
    );
}