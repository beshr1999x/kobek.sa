export default function Hero(){
  return (
    <section id="home" className="pt-16 pb-20 min-h-screen flex items-center">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Illustration */}
        <div className="relative">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 transform -rotate-12">
              IT'S A GOOD DAY
            </h2>
            
            {/* Person with Coffee Cup Illustration */}
            <div className="relative w-80 h-80 mx-auto md:mx-0">
              {/* Person */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-primary rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Coffee Cup */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                <div className="w-24 h-32 bg-white rounded-t-3xl border-4 border-white relative">
                  <div className="absolute top-2 left-2 right-2 bottom-2 bg-primary rounded-t-2xl"></div>
                  <div className="absolute -right-2 top-8 w-6 h-8 border-4 border-white rounded-r-full"></div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              
              {/* Accent Shapes */}
              <div className="absolute top-4 left-8 w-4 h-4 bg-accent rounded-full"></div>
              <div className="absolute top-16 right-8 w-6 h-6 bg-secondary transform rotate-45"></div>
            </div>
          </div>
        </div>

        {/* Right Side - Text and CTA */}
        <div className="text-center md:text-right">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            قهوتك اليومية باشتراك ذكي
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            اشترك شهريًا، واشرب كوبك اليومي من القهوة بسعر مخفّض في المقاهي المشاركة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
            <a href="#cta" className="btn-primary text-lg px-8 py-4">
              ابدأ الآن
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
