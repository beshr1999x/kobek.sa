export default function Hero(){
  return (
    <section className="pt-10 pb-16 gradient">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.2]">
            كوبك — اشتراكك اليومي للقهوة
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            ادفع اشتراكًا شهريًا واستمتع بكوب قهوة يومي بسعر مخفّض من المقاهي المشاركة. تتبّع استهلاكك بسهولة وادعم مقهاك المفضل.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#cta" className="btn-primary">ابدأ الاشتراك</a>
            <a href="#how" className="inline-flex items-center justify-center rounded-2xl border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50">كيف يعمل؟</a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2"><img src="/check.svg" className="w-5 h-5"/><span>دفع آمن</span></div>
            <div className="flex items-center gap-2"><img src="/check.svg" className="w-5 h-5"/><span>بدون التزامات طويلة</span></div>
            <div className="flex items-center gap-2"><img src="/check.svg" className="w-5 h-5"/><span>يدعم Apple Pay</span></div>
          </div>
        </div>
        <div className="card">
          <img src="/mock.png" alt="Kobek app mock" className="w-full rounded-xl"/>
        </div>
      </div>
    </section>
  )
}
