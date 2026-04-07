import TheatreBackground from "../../components/background";
import { useParams } from "react-router";
import { plays } from "../../data/plays";
import { useState, useEffect } from "react";

export default function ShowDetails() {
    const { id } = useParams();
    const show = plays.find((show) => show.id === Number(id));
    const [lightboxImg, setLightboxImg] = useState(null);

    // Close on Escape key
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") setLightboxImg(null);
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);

    if (!show) return null;

    const openImage = (src) => { if (src) setLightboxImg(src); };

    return (
        <>
            <TheatreBackground />

            {/* Lightbox Modal */}
            {lightboxImg && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
                    onClick={() => setLightboxImg(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-[#c6a15b] transition-colors"
                        onClick={() => setLightboxImg(null)}
                    >✕</button>
                    <img
                        src={lightboxImg}
                        alt="fullscreen"
                        className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}

            <div className="flex flex-col justify-center items-center mt-20 mb-10 gap-8">
                <img
                    src={show.image}
                    alt="showimg"
                    className="md:w-80 w-[85%] h-118 rounded-lg object-cover cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openImage(show.image)}
                />
                <div className="flex flex-col items-center justify-center gap-4 mt-8 border-2 border-[#c6a15b] md:w-1/2 w-[80%] rounded-lg p-4 bg-blur-sm">
                    <h1 className="text-2xl text-[#c6a15b] font-bold text-center">🎭 عن العرض </h1>
                    <p className="text-center text-white">{show.description}</p>
                    <p className="text-center text-[#c6a15b]">سنة العرض: <span className="text-white">{show.year}</span></p>
                </div>
                <div className="border-2 border-[#c6a15b] mx-8 rounded-lg p-2 text-center">
                    <p className="text-center text-[#c6a15b] mt-2 text-xl font-bold mb-2">🥇 جوائز العرض</p>
                    {show.awards.map((award, index) => (
                        <p className="text-lg" key={index}>🏆 {award}</p>
                    ))}
                </div>
                {show.promo && (
                    <div className="border-2 border-[#c6a15b] mx-8 rounded-lg">
                        <p className="text-center text-[#c6a15b] mt-2 text-xl font-bold">برومو العرض </p>
                        <iframe width="315" height="576" src={show.promo} title="برومو العرض المسرحي الجريمة والعقاب" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                )}

                {/* Posters Carousel */}
                {show.posters.length > 0 && (
                <div className="border-2 border-[#c6a15b] mx-8 rounded-lg">
                    <p className="text-center text-[#c6a15b] mt-2 text-xl font-bold">بوسترات العرض </p>
                    <div className="carousel carousel-center bg-neutral rounded-box max-w-md h-100 space-x-4 p-4">
                        {[0,1,2,3,4,5,6,7,8,9,10,11,12,13].map((i) => (
                            show.posters[i] && (
                                <div key={i} className="carousel-item">
                                    <img
                                        src={show.posters[i]}
                                        className="rounded-box cursor-pointer hover:opacity-80 transition-opacity object-cover"
                                        onClick={() => openImage(show.posters[i])}
                                        alt={`poster-${i}`}
                                    />
                                </div>
                            )
                        ))}
                    </div>
                    <p className="text-center text-white m-2 text-sm"> اسحب يمينا ويسارا او اضغط للتكبير</p>
                </div>
                )}
                {/* Show Photos Carousel */}
                {show.carousel.length>0 && (
                <div className="border-2 border-[#c6a15b] mx-8 rounded-lg">
                    <p className="text-center text-[#c6a15b] mt-2 text-xl font-bold">صور من العرض </p>
                    <div className="carousel carousel-center bg-neutral rounded-box max-w-md h-100 space-x-4 p-4">
                        {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((i) => (
                            show.carousel[i] && (
                                <div key={i} className="carousel-item">
                                    <img
                                        src={show.carousel[i]}
                                        className="rounded-box cursor-pointer hover:opacity-80 transition-opacity object-cover"
                                        onClick={() => openImage(show.carousel[i])}
                                        alt={`show-${i}`}
                                    />
                                </div>
                            )
                        ))}
                    </div>
                    <p className="text-center text-white m-2 text-sm"> اسحب يمينا ويسارا او اضغط للتكبير</p>
                </div>
                )}
            </div>
        </>
    )
}