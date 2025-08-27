export default function Footer(){
  return (
    <footer className="py-16 border-t border-white/20">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Kobek" className="w-8 h-8"/>
          <span className="font-bold text-xl text-white">كوبك</span>
        </div>
        <p className="text-white/80 text-center md:text-left">© {new Date().getFullYear()} كوبك — جميع الحقوق محفوظة | <a href="https://kobek.sa" className="hover:underline hover:text-white transition">kobek.sa</a></p>
        <div className="flex gap-6 text-sm">
          <a href="/terms" className="text-white/80 hover:text-white transition">الشروط والأحكام</a>
          <a href="/privacy" className="text-white/80 hover:text-white transition">سياسة الخصوصية</a>
          <a href="mailto:info@kobek.sa" className="text-white/80 hover:text-white transition">تواصل معنا</a>
        </div>
      </div>
    </footer>
  )
}
