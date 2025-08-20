const items = [
  { title: "كوب يومي مخفّض", desc: "استمتع بقهوة يومية بسعر أقل عبر اشتراك شهري مناسب.", icon: "☕" },
  { title: "QR سريع", desc: "امسح QR في المقهى لاستهلاك كوبك خلال ثوانٍ.", icon: "🔗" },
  { title: "تقارير واضحة", desc: "تتبّع عدد الأكواب المستهلكة وباقيك بسهولة.", icon: "📊" },
  { title: "شبكة مقاهٍ", desc: "اكتشف المقاهي المشاركة القريبة منك مع فلاتر ذكية.", icon: "📍" },
];

export default function Features(){
  return (
    <section id="features" className="py-16">
      <div className="container">
        <h2 className="text-3xl font-extrabold">مميزات كوبك</h2>
        <p className="text-gray-600 mt-2">كل ما تحتاجه للحصول على تجربة قهوة يومية سلسة.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {items.map((i)=> (
            <div key={i.title} className="card">
              <div className="text-3xl">{i.icon}</div>
              <h3 className="mt-3 font-bold">{i.title}</h3>
              <p className="text-gray-600 mt-1">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
