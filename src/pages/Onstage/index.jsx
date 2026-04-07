import { useState } from "react";
import TheatreBackground from "../../components/background";
import { Icon } from "@iconify/react";


export default function OnStage() {
    const [tickets, setTickets] = useState(1);
    const [whatsapp, setWhatsapp] = useState("");
    const [file, setFile] = useState("");
    const [show, setShow] = useState(false);
    const [status, setStatus] = useState(null); // success | error | null

    const bookingData ={
    phone :whatsapp,
    tickets :tickets,
    file :file,
}
    return <>
        <TheatreBackground />
        <div className="flex flex-col justify-center items-center mt-20 mb-10 gap-8">
            <img src="/images/factoryshow.jpg" alt="playimg" className="md:w-80 w-[85%] h-118 rounded-lg object-cover" />

            <div className="flex flex-col items-center justify-center text-center gap-4">
                <h2 className="text-xl text-white font-bold p-2 mt-2 mb-2 text-center"> مخلفات مصنع الكرتون </h2>

                <div className="flex flex-col items-center justify-center gap-2 border-2 border-[#c6a15b] rounded-lg p-4 w-[90%]">
                    <p className="text-[#c6a15b] text-lg font-bold">المواعيد المتاحة :</p>
                   <div className="flex flex-row items-center gap-2 justify-center">
                    <div className="inline-grid *:[grid-area:1/1] ">
                        <div className="status status-info animate-ping"></div>
                        <div className="status status-info"></div>
                    </div><p className="text-white text-md">السبت 28/3/2026</p>
                </div>
                 <p className="text-white text-md">الساعة 6:30 م</p>
                </div>


                <div className="border-2 border-[#c6a15b] rounded-lg p-4 gap-2 w-[90%]">
                    <p className="text-[#c6a15b] text-lg font-bold">العنوان</p>
                    <p className="text-white text-sm mb-2">يعرض علي مسرح كنيسة مارجرجس الجيوشي - شبرا مصر - بجوار محطة مترو مسرة </p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.69295877015!2d31.24887537416131!3d30.074334417156436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145841a246af0459%3A0x236dcc8d4b9af810!2z2YPZhtmK2LPYqSDZhdin2LHYrNix2KzYsyDYqNin2YTYrNmK2YjYtNmJIFNhaW50IEdlb3JnZXMgLSBFbGd5b3NoaQ!5e0!3m2!1sen!2seg!4v1775516790837!5m2!1sen!2seg" width="400" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="rounded-md w-full"></iframe>
                </div>
                <p className="text-white text-lg font-bold">للحجز اتبع الخطوات التالية</p>
                <div className="border-2 border-[#c6a15b] rounded-lg p-4 gap-2 w-[90%]">
                    <p className="text-[#c6a15b] text-lg mb-2">تحويل الأموال</p>
                    <p className="text-sm">اكتب عدد المقاعد المراد حجزها </p>
                    <input type="number" value={tickets} onChange={(e) => setTickets(Number(e.target.value))} className="border-2 rounded-lg p-2 w-[20%] mt-2" />
                    <p className="text-sm mt-2">السعر الإجمالي : {tickets * 50} جنيه</p>
                    <p>برجاء تحويل مبلغ مالي قدره <span className="text-[#c6a15b]">{tickets * 50}</span> جنيه باحدي الطرق التالية :</p>
                    <div className="flex flex-row items-center justify-center gap-4 mt-2">
                        <img src="src/assets/images/orange1.png" alt="orange" className="w-10 h-10 rounded-lg" onClick={() => window.open("https://orange.eg/en/pay/01274120056", "_blank")} />
                        <img src="src/assets/images/instapay.png" alt="instapay" className="w-10 h-10 object-contain rounded-lg" onClick={() => window.open("https://ipn.eg/S/polarazakqnb/instapay/6Gzott", "_blank")} />
                    </div>
                </div>

                <div className="border-2 border-[#c6a15b] rounded-lg p-4 gap-2 w-[90%]">
                    <p className="text-[#c6a15b] text-lg mb-2">تأكيد الدفع</p>
                    <form>
                        <div className="flex flex-row items-center gap-1 justify-center">
                            <p className="text-sm">رقم الواتساب</p>
                            <Icon icon="ic:baseline-whatsapp" width="14" height="14" />
                        </div>
                        <input type="text" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder="01xxxxxxxxx" className={`border-2 rounded-lg p-2 mt-2`} />
                        <p className="text-sm mb-3 mt-4">برجاء رفع ايصال الدفع او سكرين شوت لعملية التحويل</p>
                        <input type="file" value={file} onChange={(e) => setFile(e.target.value)} className="file-input file-input-warning w-[90%]" />
                    </form>
                    <button className="btn btn-warning mt-4 mb-2" onClick={() => {
                        if (whatsapp !== "" && file !== "") {
                            setStatus("success");
                            setShow(true);
                            setTimeout(() => setShow(false), 6000);
                            setWhatsapp("");
                            setFile("");
                        } else {
                            setStatus("error");
                            setShow(true);
                            setTimeout(() => setShow(false), 6000);
                        }
                    }}>تأكيد الدفع</button>
                    {status === "success" && <>
                        <p className="text-sm mt-2 text-center text-green-500 flex flex-row items-center justify-center gap-2">  تم حفظ البيانات بنجاح <Icon icon="ic:baseline-check-circle" width="14" height="14" /></p>
                        <p className="text-sm text-center"> سيتواصل احد اعضاء فريق العمل معكم في اقرب وقت لتأكيد عملية الدفع </p>
                    </>}
                    {status === "error" && <>
                        <p className="text-sm mt-2 text-center text-red-500 flex flex-row items-center justify-center gap-2">  برجاء ملء جميع البيانات  <Icon icon="ix:error-filled" width="14" height="14" /></p>
                    </>}
                </div>
            </div>
        </div>
    </>
}