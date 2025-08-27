const items = [
  { title: "كوب يومي مخفّض", desc: "استمتع بقهوة يومية بسعر أقل عبر اشتراك شهري مناسب.", icon: "☕" },
  { title: "QR سريع", desc: "امسح QR في المقهى لاستهلاك كوبك خلال ثوانٍ.", icon: "🔗" },
  { title: "تقارير واضحة", desc: "تتبّع عدد الأكواب المستهلكة وباقيك بسهولة.", icon: "📊" },
  { title: "شبكة مقاهٍ", desc: "اكتشف المقاهي المشاركة القريبة منك مع فلاتر ذكية.", icon: "📍" },
];

export default function Features(){
  return (
    <section id="features" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">المزايا</h2>
          <p className="text-xl text-white/80">كل ما تحتاجه للحصول على تجربة قهوة يومية سلسة</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((i)=> (
            <div key={i.title} className="card text-center group hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">{i.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{i.title}</h3>
              <p className="text-white/80">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
