export default function Navbar(){
  return (
    <nav className="w-full py-6">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Kobek" className="w-10 h-10"/>
          <span className="font-bold text-2xl text-white">كوبك</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#home" className="hover:opacity-70 transition">الرئيسية</a>
          <a href="#features" className="hover:opacity-70 transition">المزايا</a>
          <a href="#how" className="hover:opacity-70 transition">طريقة العمل</a>
          <a href="#app" className="hover:opacity-70 transition">التطبيق</a>
        </div>
        <button className="btn-secondary">تسجيل الدخول</button>
      </div>
    </nav>
  )
}
