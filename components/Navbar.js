export default function Navbar(){
  return (
    <nav className="w-full py-4">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Kobek" className="w-8 h-8"/>
          <span className="font-bold text-xl">Kobek</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="hover:opacity-70">المميزات</a>
          <a href="#partners" className="hover:opacity-70">المقاهي المشاركة</a>
          <a href="#faq" className="hover:opacity-70">الأسئلة الشائعة</a>
        </div>
        <a href="#cta" className="btn-primary">اشترك الآن</a>
      </div>
    </nav>
  )
}
