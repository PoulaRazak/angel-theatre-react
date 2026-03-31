export default function Footer() {
    return<>
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
            <a href="/" className="hover:text-[#c6a15b] transition">الرئيسية</a>
          </li>
          <li>
            <a href="#" className="hover:text-[#c6a15b] transition">العروض السابقة</a>
          </li>
          <li>
            <a href="#" className="hover:text-[#c6a15b] transition">عن الفريق</a>
          </li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-lg font-semibold mb-4">تواصل معنا</h3>
        <ul className="space-y-2">
          <li>
            <span className="text-gray-400">البريد الإلكتروني:</span>
            <a href="[EMAIL_ADDRESS]" className="hover:text-[#c6a15b] transition ml-2">[EMAIL_ADDRESS]</a>
          </li>
          <li>
            <span className="text-gray-400">واتساب:</span>
            <a href="https://wa.me/201220800797" className="ml-2">01220800797</a>
          </li>
        </ul>
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