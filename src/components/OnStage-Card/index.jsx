import { useEffect, useState } from "react";
export default function OnStageCard() {



    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => setShow(true), 800);
    }, []);
    return <>
        <div className="border border-[#c6a15b] m-10 rounded-lg shadow-md shadow-[#c6a15b] flex flex-col items-start p-2 gap-2 bg-[#1a120b] relative">
            <div
                className="badge badge-warning absolute top-3 left-3 rounded-full
                backdrop-blur-md bg-white/20 text-white
                shadow-xl shadow-black/30"

            >
                عرض جديد 🔥
            </div>
            <img src="src/assets/images/factoryshow.jpg" alt="" className="h-120 w-100 object-cover rounded-lg " />
            <h2 className="text-xl text-white font-bold p-2 mt-2 mb-4"> مخلفات مصنع الكرتون </h2>
            <div className="text-white text-sm ">يعرض علي مسرح كنيسة مارجرجس الجيوشي - شبرا مصر</div>
            <div className="text-white text-sm ">للأستفسارات يرجي التواصل علي الرقم  01220800797 </div>
            <div className="text-white text-sm p-2">المواعيد : </div>
            <div className="flex flex-row text-white justify-between w-full p-3 bg-[#000435] rounded-lg">
                <div className="flex flex-row gap-3">
                    <p>• 28/3/2026</p>
                    <p>• 6:30 م</p>
                </div>
                <p>50 جنيه</p>
            </div>
            <div className="flex flex-row text-white justify-between w-full p-2 items-center">
                <div className="flex flex-row items-center gap-2">
                    <div className="inline-grid *:[grid-area:1/1] mt-1">
                        <div className="status status-info animate-ping"></div>
                        <div className="status status-info"></div>
                    </div><p className="text-sm">1 موعد متاح</p>
                </div>
                <button className="mr-2 px-5 py-2 rounded-md text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                    style={{
                        background: "linear-gradient(135deg, #c6a15b, #e8c97a, #c6a15b)",
                        color: "#1a0f00",
                        boxShadow: "0 2px 16px rgba(198,161,91,0.35)",
                    }}> الحجز والتفاصيل</button>
            </div>
        </div>
    </>
}