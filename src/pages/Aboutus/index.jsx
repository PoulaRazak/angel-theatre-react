import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import TheatreBackground from "../../components/background";
import { Icon } from '@iconify/react';

export default function AboutUs() {
    return <>
        <TheatreBackground />
        <h1 className="text-2xl text-[#c6a15b] font-bold text-center mt-25"> عن فريق الملاك المسرحي </h1>
        <div className="md:w-1/2 w-11/12 mx-auto border border-[#c6a15b] shadow-lg shadow-[#c6a15b] rounded-lg p-5 m-8">
           <p className="text-white text-md">
    نحن فريق مسرحي تابع لكنيسة السيدة العذراء والملاك غبريال بشبرا الخيمة، تأسس عام 2023 برؤية فنية واضحة تسعى لتقديم أعمال مسرحية تحمل رسالة إنسانية راقية وتُعبّر عن قضايا المجتمع بوعي ومسؤولية.
</p>
<br/>
<p className="text-white text-md">
    منذ بدايتنا، قدمنا أعمالًا مميزة جمعت بين النصوص العالمية والعربية، بدايةً من “الحضيض” كأحد أوائل إنتاجاتنا، ثم “ظل أبي” من تأليف وإخراج الفريق، وصولًا إلى تقديم العمل العالمي “الجريمة والعقاب” للكاتب الروسي فيودور دوستويفسكي، ونواصل مسيرتنا بعرضنا الحالي “مخلفات مصنع الكرتون” الذي يعكس تطورنا الفني واستمرارنا في تقديم محتوى هادف ومؤثر.
</p>
<br/>
<p className="text-white text-md">
    نؤمن بأن الفن رسالة حقيقية تتجاوز الترفيه، فهو وسيلة فعّالة للتعليم والتوعية وبناء الوعي المجتمعي، لذلك نحرص على تقديم أعمال تترك أثرًا عميقًا لدى الجمهور.
</p>
<br/>
<p className="text-white text-md">
    يقوم فريقنا على مبدأ الخدمة قبل أي هدف مادي، حيث نعمل بروح واحدة لتقديم فن يخدم المجتمع والكنيسة. وقد تُوِّجت جهودنا بالحصول على العديد من الجوائز في مهرجان مطرانية شبرا الخيمة المسرحي، تأكيدًا على تميز تجربتنا وقوة رسالتنا.
</p>
<br/>
<p className="text-white text-md">
    نطمح دائمًا إلى المزيد من التطوير والاستمرار، إيمانًا منا بأن الفن مسؤولية ورسالة سامية، وطريق حقيقي نحو التأثير الإيجابي.
</p>
            <br/>
            <p className="text-[#c6a15b] text-lg text-center">يمكنك متابعتنا لتري كل جديد من خلال </p>
            <div className="flex flex-row justify-center items-center mt-5 gap-5">
                <a href="https://www.tiktok.com/@angeltheatre1?_r=1&_d=secCgYIASAHKAESPgo8Tvi%2FcF1MYZLEy0M%2Ft4TJvc5dX%2FdkIWsM05L%2FwsgSrSwVyNnDe%2BeO8LjC1ZLGrv7C4RlBv8n%2F9unvmlu1GgA%3D&_svg=1&checksum=c69fef0ed734f29bef18a5ff380d5125732c23b271c5f418c967f42933402808&item_author_type=2&reflow_sign_scene=7&rgssign=8.1.DKLQKeKxl_Pe90ocMfFn5g&sec_uid=MS4wLjABAAAA7zSsi8HuqlXa7BSopvx1XT4IUz2nIRHZ4m-kN6X3NhSorW-Hpo5g0MwhM3i49DN8&sec_user_id=MS4wLjABAAAA_MTjUlIKkJ1yDIL-p-sjGlrn_16nS1iouA-WioADrgIQF4c3zZ85a-pxd7ogxut7&share_app_id=1233&share_author_id=7551203749424055297&share_link_id=173D087D-1AE3-4449-B388-1BDA5A861833&share_region=EG&share_scene=1&sharer_language=en&social_share_type=5&source=h5_m&timestamp=1775084825&tt_from=copy&u_code=ebl990l94i1360&ug_btm=b6880%2Cb5836&user_id=7317968062618289158&utm_campaign=client_share&utm_medium=ios&utm_source=copy" className="text-white hover:text-[#c6a15b]" target="_blank"><Icon icon="ic:twotone-tiktok" width="35" height="35" /></a>
                <a href="https://www.instagram.com/angel_theater" className="text-white hover:text-[#c6a15b]" target="_blank"><Icon icon="iconoir:instagram" width="35" height="35" /></a>
                <a href="https://www.facebook.com/share/1CccNmpitY/?mibextid=wwXIfr" className="text-white hover:text-[#c6a15b]" target="_blank"><Icon icon="ri:facebook-fill" width="35" height="35" /></a>
            </div>
        </div>
    </>
}