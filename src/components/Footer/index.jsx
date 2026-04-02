import { Icon } from "@iconify/react";
import { Link } from "react-router";

export default function Footer() {
  return <>
    <footer className="bg-[#1a120b] text-[#f5e6c4] py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img
              className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(255,215,0,0.4)]"
              src="src/assets/images/angel-logo1.png"
              alt="logo"
            />
            <span
              className="text-lg font-bold tracking-wide"
              style={{
                background: "linear-gradient(90deg, #fff8e1, #f5c842, #c6a15b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 8px rgba(255,215,0,0.35))",
              }}
            >
              فريق الملاك المسرحي
            </span>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#c6a15b] transition">الرئيسية</Link>
              </li>
              <li>
                <Link to="/old-shows" className="hover:text-[#c6a15b] transition">العروض السابقة</Link>
              </li>
              <li>
                <Link to="/workshops" className="hover:text-[#c6a15b] transition">الورش المسرحية</Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-[#c6a15b] transition">عن الفريق</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">تواصل معنا</h3>
            <div className="flex flex-row items-center mt-5 gap-5">
              <a href="https://www.tiktok.com/@angeltheatre1?_r=1&_d=secCgYIASAHKAESPgo8Tvi%2FcF1MYZLEy0M%2Ft4TJvc5dX%2FdkIWsM05L%2FwsgSrSwVyNnDe%2BeO8LjC1ZLGrv7C4RlBv8n%2F9unvmlu1GgA%3D&_svg=1&checksum=c69fef0ed734f29bef18a5ff380d5125732c23b271c5f418c967f42933402808&item_author_type=2&reflow_sign_scene=7&rgssign=8.1.DKLQKeKxl_Pe90ocMfFn5g&sec_uid=MS4wLjABAAAA7zSsi8HuqlXa7BSopvx1XT4IUz2nIRHZ4m-kN6X3NhSorW-Hpo5g0MwhM3i49DN8&sec_user_id=MS4wLjABAAAA_MTjUlIKkJ1yDIL-p-sjGlrn_16nS1iouA-WioADrgIQF4c3zZ85a-pxd7ogxut7&share_app_id=1233&share_author_id=7551203749424055297&share_link_id=173D087D-1AE3-4449-B388-1BDA5A861833&share_region=EG&share_scene=1&sharer_language=en&social_share_type=5&source=h5_m&timestamp=1775084825&tt_from=copy&u_code=ebl990l94i1360&ug_btm=b6880%2Cb5836&user_id=7317968062618289158&utm_campaign=client_share&utm_medium=ios&utm_source=copy" className="text-white hover:text-[#c6a15b]" target="_blank"><Icon icon="ic:twotone-tiktok" width="35" height="35" /></a>
              <a href="https://www.instagram.com/angel_theater" className="text-white hover:text-[#c6a15b]" target="_blank"><Icon icon="iconoir:instagram" width="35" height="35" /></a>
              <a href="https://www.facebook.com/share/1CccNmpitY/?mibextid=wwXIfr" className="text-white hover:text-[#c6a15b]" target="_blank"><Icon icon="ri:facebook-fill" width="35" height="35" /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} فريق الملاك المسرحي. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  </>
}