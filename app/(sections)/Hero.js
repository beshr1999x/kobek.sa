export default function Hero() {
  return (
    <section id="home" dir="rtl" className="relative w-full min-h-screen bg-[#2f488b] overflow-hidden">
      {/* Navigation */}
      <header className="w-full">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {/* استبدل src بصورة شعارك */}
            <div className="w-12 h-12 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center">
              <span className="text-white/70 text-xs">Logo</span>
            </div>
            <span className="text-[#f1f3f7] text-xl sm:text-2xl font-semibold">كوبك</span>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-[#ebedf4] hover:text-white text-lg font-semibold transition-colors">الرئيسية</a>
            <a href="#features" className="text-[#f0f2f7] hover:text-white text-lg font-semibold transition-colors">المزايا</a>
            <a href="#how" className="text-[#f0f2f7] hover:text-white text-lg font-semibold transition-colors">طريقة العمل</a>
          </nav>

          {/* Login */}
          <div className="flex items-center gap-3">
            <a
              href="#login"
              className="inline-flex items-center justify-center h-11 px-6 rounded-2xl bg-[#bedced] text-[#395292] font-semibold hover:scale-[1.03] active:scale-[0.99] transition-transform"
            >
              تسجيل الدخول
            </a>

            {/* زر قائمة للجوال */}
            <button
              className="md:hidden w-11 h-11 rounded-xl bg-white/10 border border-white/20 grid place-items-center"
              aria-label="فتح القائمة"
            >
              <span className="block w-6 h-0.5 bg-white mb-1.5" />
              <span className="block w-6 h-0.5 bg-white mb-1.5" />
              <span className="block w-6 h-0.5 bg-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* النص */}
          <div className="order-2 lg:order-1 text-right">
            <h1 className="text-[#f5f6f9] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
              قهوتك اليومية
              <br />
              باشتراك ذكي
            </h1>

            <p className="mt-6 text-[#dee2ec] text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed">
              اشترك شهريًا واشرب كوبك اليومي
              من القهوة بسعر مخفض
            </p>

            <div className="mt-10">
              <a
                href="#start"
                className="inline-flex items-center justify-center h-12 px-8 rounded-2xl bg-[#e2b514] text-[#3d5083] font-semibold hover:scale-[1.04] active:scale-[0.99] transition-transform"
              >
                ابدأ الآن
              </a>
            </div>

            {/* روابط ثانوية على الجوال */}
            <div className="mt-6 md:hidden flex gap-6 text-white/80 text-base">
              <a href="#features" className="hover:text-white">المزايا</a>
              <a href="#how" className="hover:text-white">طريقة العمل</a>
            </div>
          </div>

          {/* الصورة / الكرت */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/3] overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-blue-400/20 to-blue-600/20 backdrop-blur-sm">
              {/* شارة GOOD */}
              <div className="absolute top-4 left-4 sm:left-6 text-[#eceded] text-3xl sm:text-4xl lg:text-5xl font-semibold">
                GOOD
              </div>

              {/* Image placeholders */}
              <div className="absolute top-6 right-6 w-16 h-20 sm:w-20 sm:h-24 rounded-xl bg-white/15 border-2 border-white/30 grid place-items-center">
                <span className="text-white/70 text-[10px]">Image 1</span>
              </div>

              <div className="absolute bottom-6 left-6 w-40 h-28 sm:w-48 sm:h-32 rounded-2xl bg-white/15 border-2 border-white/30 grid place-items-center">
                <span className="text-white/70 text-xs">Image 2</span>
              </div>

              {/* زخرفة خفيفة */}
              <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* خلفية زخرفية */}
      <div className="pointer-events-none absolute inset-x-0 -top-40 mx-auto h-72 w-[90%] max-w-6xl rounded-full bg-white/5 blur-3xl" />
    </section>
  );
}
