const steps = [
  { n: 1, t: "اختر الباقة", d: "حدّد اشتراكك الشهري المناسب لك." },
  { n: 2, t: "ادفع إلكترونيًا", d: "ادفع عبر Apple Pay/مدى/بطاقتك." },

];
export default function How(){
  return (
    <section id="how" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">طريقة العمل</h2>
          <p className="text-xl text-white/80">خطوات بسيطة لبدء رحلتك مع كوبك</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map(s => (
            <div key={s.n} className="card text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 rounded-full bg-secondary/20 border-2 border-secondary mx-auto flex items-center justify-center font-bold text-2xl text-secondary mb-4">{s.n}</div>
              <h3 className="text-xl font-bold text-white mb-3">{s.t}</h3>
              <p className="text-white/80">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
