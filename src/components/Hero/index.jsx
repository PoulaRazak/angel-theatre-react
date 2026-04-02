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

    // 🌫️ Stable dust particle positions (avoid random reposition on re-render)
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
                end: "+=900",
                scrub: true,
                pin: true,
            },
        });

        // 🎭 فتح الستارة — both curtains open simultaneously
        tl.to(leftCurtain.current, {
            x: "-110%",
            rotate: -2,
            ease: "power3.out",
            duration: 1,
        })
            .to(
                rightCurtain.current,
                {
                    x: "110%",
                    rotate: 2,
                    ease: "power3.out",
                    duration: 1,
                },
                "<" // parallel with left curtain — correct
            )

            // 💡 إضاءة المسرح — also parallel with curtain open
            .to(
                lightRef.current,
                {
                    opacity: 1,
                    scale: 1.2,
                    ease: "power2.out",
                    duration: 1,
                },
                "<" // parallel with curtains — correct
            )

            // 🖼️ Parallax للصورة — also parallel
            .to(
                bgRef.current,
                {
                    scale: 1.1,
                    y: 80,
                    ease: "none",
                    duration: 1,
                },
                "<" // parallel with curtains — correct
            )

            // ✨ ظهور النص — AFTER curtains fully open (no "<", starts after previous ends)
            .fromTo(
                contentRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    ease: "power2.out",
                    duration: 0.6,
                }
                // no position arg → starts after previous group ends ✅
            );

        // 🌫️ Dust particles subtle animation
        gsap.to(".dust", {
            y: -20,
            opacity: 0.6,
            stagger: 0.2,
            repeat: -1,
            yoyo: true,
            duration: 3,
            ease: "sine.inOut",
        });

        // 🧹 Cleanup ScrollTrigger on unmount
        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);
    return <>
        {/* <div>
        <img src="src/assets/images/victorian.jpg" alt="hero-img" className="w-full h-full object-cover opacity-50" />
        <div className="text-2xl text-white"> العروض المتاحة</div>
    </div> */}

        <section
            ref={heroRef}
            className="relative h-screen overflow-clip bg-[#1a120b]"
        >

            {/* 🖼️ Background */}
            <img
                ref={bgRef}
                src="src/assets/images/victorian.jpg"
                className="absolute inset-0 w-full h-full object-cover opacity-40"
            />

            {/* 💡 Spotlight */}
            <div
                ref={lightRef}
                className="absolute inset-0 opacity-0 z-10 bg-[radial-gradient(circle,rgba(255,215,150,0.25)_0%,transparent_60%)]"
            />

            {/* 🌫️ Dust Particles — positions are stable via useMemo */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                {dustParticles.map(({ id, top, left }) => (
                    <span
                        key={id}
                        className="dust absolute w-1 h-1 bg-yellow-200 rounded-full opacity-30"
                        style={{ top, left }}
                    />
                ))}
            </div>

            {/* 🎭 Content */}
            <div
                ref={contentRef}
                className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#f5e6c4] z-20 opacity-0"
                 >
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-relaxed">
                    يقدم لكم <br /> فريق الملاك المسرحي
                </h1>

                <button onClick={() => navigate("/old-shows")} className="px-8 py-3 bg-[#c6a15b] text-black rounded-lg shadow-lg hover:scale-105 transition cursor-pointer">
                    مشاهدة العروض
                </button>
            </div>

            {/* 🎭 Curtain Left */}
            <div
                ref={leftCurtain}
                className="absolute top-0 left-0 w-1/2 h-full z-30"
                style={{
                    backgroundImage: "url('src/assets/images/velvet3.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "left",
                }}
            />

            {/* 🎭 Curtain Right */}
            <div
                ref={rightCurtain}
                className="absolute top-0 right-0 w-1/2 h-full z-30"
                style={{
                    backgroundImage: "url('src/assets/images/velvet3r.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "right",
                }}
            />

            {/* 🎬 Cinematic Overlay */}
            <div className="absolute inset-0 bg-black/30 z-10" />
        </section>

    </>
}