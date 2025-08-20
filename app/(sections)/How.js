const steps = [
  { n: 1, t: "اختر الباقة", d: "حدّد اشتراكك الشهري المناسب لك." },
  { n: 2, t: "ادفع إلكترونيًا", d: "ادفع عبر Apple Pay/مدى/بطاقتك." },
  { n: 3, t: "امسح QR", d: "في المقهى المختار امسح الرمز لتأكيد كوبك." },
  { n: 4, t: "استمتع بالقهوة", d: "كرّرها يوميًا حسب الباقة!" },
];
export default function How(){
  return (
    <section id="how" className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-extrabold">كيف يعمل كوبك؟</h2>
        <div className="grid md:grid-cols-4 gap-4 mt-8">
          {steps.map(s => (
            <div key={s.n} className="card text-center">
              <div className="w-10 h-10 rounded-full bg-secondary/50 mx-auto flex items-center justify-center font-bold">{s.n}</div>
              <h3 className="mt-3 font-semibold">{s.t}</h3>
              <p className="text-gray-600 mt-1">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
