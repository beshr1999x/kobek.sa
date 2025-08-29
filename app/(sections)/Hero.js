export default function HeroKobek() {
  return (
    <section id="home" dir="rtl" className="relative w-full min-h-screen bg-[#2f488b] text-white overflow-hidden">
      {/* Top Nav */}
      <header className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 shrink-0">
            {/* Simple cup logo */}
            <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="18" width="44" height="18" rx="9" stroke="#fff" strokeWidth="3"/>
              <path d="M14 36c2 8 8 12 18 12s16-4 18-12" stroke="#fff" strokeWidth="3"/>
              <path d="M54 22c4 0 7 3 7 7s-3 7-7 7" stroke="#fff" strokeWidth="3"/>
            </svg>
            <div className="leading-tight">
              <div className="text-xl sm:text-2xl font-bold">كوبك</div>
              <div className="-mt-0.5 text-xs tracking-[0.3em]">KOBEK</div>
            </div>
          </a>

          {/* Nav links - desktop */}
          <nav className="hidden md:flex items-center gap-8 text-lg font-semibold">
            <a href="#home" className="hover:text-white/90">الرئيسية</a>
            <a href="#features" className="hover:text-white/90">المزايا</a>
            <a href="#how" className="hover:text-white/90">طريقة العمل</a>
            <a href="#app" className="hover:text-white/90">التطبيق</a>
          </nav>

          {/* Partner icon button */}
          <a
            href="mailto:kobek@kobek.sa?subject=شراكة%20مع%20كوبك"
            className="inline-flex items-center justify-center h-11 px-5 rounded-2xl bg-[#bedced] text-[#2f488b] font-semibold shadow-sm hover:brightness-105 active:scale-[0.99] transition gap-2"
          >
            {/* Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
            </svg>
            <span>سجل كـ شريك</span>
          </a>
        </div>

        {/* mobile quick links */}
        <nav className="mt-4 md:hidden flex items-center justify-center gap-6 text-base">
          <a href="#features" className="text-white/90">المزايا</a>
          <a href="#how" className="text-white/90">طريقة العمل</a>
          <a href="#app" className="text-white/90">التطبيق</a>
        </nav>
      </header>

      {/* Hero Content */}
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Illustration */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full max-w-xl mx-auto aspect-square md:aspect-[5/4]">
              {/* Big outline character with bowl */}
              <svg viewBox="0 0 700 700" className="absolute inset-0 w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* arc text: IT'S A GOOD DAY */}
                <defs>
                  <path id="arc" d="M120,260 C220,80 480,80 580,260" />
                </defs>
                <text fontFamily="inherit" fontWeight="700" fontSize="54" fill="#ffffff">
                  <textPath href="#arc" startOffset="5%">IT'S A GOOD DAY</textPath>
                </text>

                {/* bowl */}
                <path d="M200 300 h300 a30 30 0 0 1 30 30 v20 a110 90 0 0 1 -360 0 v-20 a30 30 0 0 1 30 -30 z" stroke="#ffffff" strokeWidth="10"/>
                <path d="M205 300 q145 40 290 0" stroke="#ffffff" strokeWidth="10" fill="none"/>

                {/* hands and person */}
                <path d="M190 420 q-20 90 40 150 t160 60 q140 0 190 -120" stroke="#ffffff" strokeWidth="10" fill="none"/>
                <circle cx="350" cy="470" r="40" stroke="#ffffff" strokeWidth="10" fill="none"/>
                <path d="M330 460 q20 20 40 0" stroke="#ffffff" strokeWidth="10"/>
                <path d="M250 380 q-30 30 -40 80" stroke="#ffffff" strokeWidth="10"/>
                <path d="M450 380 q30 30 40 80" stroke="#ffffff" strokeWidth="10"/>

                {/* playful shapes */}
                <circle cx="520" cy="360" r="10" fill="#7cc0ff"/>
                <circle cx="180" cy="390" r="10" fill="#ff5757"/>
                <path d="M560 420 l18 0 l-9 16 z" fill="#ffd54a"/>
              </svg>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 text-right">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
              قهوتك اليومية
              <br />
              باشتراك ذكي
            </h1>
            <p className="mt-6 text-white/90 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-xl">
              اشترك شهريًا، واشرب كوبك اليومي من القهوة بسعر مُخفّض في المقاهي المشاركة.
            </p>
            <div className="mt-8">
              <a
                href="#start"
                className="inline-flex items-center justify-center h-12 px-8 rounded-2xl bg-[#e2b514] text-[#2f3f6e] font-extrabold hover:brightness-105 active:scale-[0.99] transition shadow-md"
              >
                ابدأ الآن
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Soft background glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl h-72 rounded-full bg-white/10 blur-3xl"/>
    </section>
  );
}
