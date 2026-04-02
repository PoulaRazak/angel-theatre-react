import TheatreBackground from "../../components/background";

export default function ShowDetails() {
    return (
        <>
            <TheatreBackground />
            <div className="flex flex-col justify-center items-center mt-20 mb-10 gap-8">
                <img src="../src/assets/images/poorposter.jpg" alt="showimg" className="md:w-90 w-[80%] h-110 rounded-lg" />
                <div className="flex flex-col items-center justify-center gap-4 mt-8 border-2 border-[#c6a15b] md:w-1/2 w-[80%] rounded-lg p-4 bg-blur-sm">
                    <h1 className="text-2xl text-[#c6a15b] font-bold text-center"> عن العرض </h1>
                    <p className="text-center text-white">عرض “الحضيض” هو عمل إنساني يسلّط الضوء على حياة المهمشين وصراعهم مع الفقر واليأس، كاشفًا التناقض بين قسوة الواقع وأمل التغيير. وتبرز شخصية لوكا كرمز للرحمة، حيث يحاول التخفيف عن الآخرين بالكلمة الطيبة ومنحهم  لو كان هذا الأمل قائمًا على أوهام—ليطرح تساؤلًا عميقًا حول قيمة الحقيقة في مواجهة القسوة.
                    </p>
                </div>
                <div className="border-2 border-[#c6a15b] mx-8 rounded-lg">
                <p className="text-center text-[#c6a15b] mt-2 text-xl font-bold">صور من العرض </p>
                <div className="carousel carousel-center bg-neutral rounded-box max-w-md h-100 space-x-4 p-4 ">
                    <div className="carousel-item">
                        <img
                            src="../src/assets/images/poor2poster.jpg"
                            className="rounded-box w-70 h-92 object-cover" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                            className="rounded-box" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                            className="rounded-box" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                            className="rounded-box" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                            className="rounded-box" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                            className="rounded-box" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                            className="rounded-box" />
                    </div>
                </div>
                <p className="text-center text-white m-2">اسحب لليمين او اليسار</p>
                </div>
            </div>
        </>
    )
}