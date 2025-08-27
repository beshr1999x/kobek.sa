export default function Hero(){
  return (
    <section id="home" className="relative w-full h-screen bg-[#2f488b] overflow-hidden">
      {/* Navigation Header */}
      <div className="absolute w-full h-[299px] top-[125px] left-0 z-10">
        {/* Logo and Brand */}
        <div className="absolute top-[47px] left-[2310px] text-[#f1f3f7] text-[88.3px] leading-[88.4px] font-semibold text-left tracking-[0] [direction:rtl] animate-fade-in" style={{"--animation-delay": "0.2s"}}>
          كوبك
          <br />
          Ковен
        </div>
        
        {/* Navigation Menu */}
        <div className="absolute top-[87px] left-[1910px] text-[#ebedf4] text-[56.2px] leading-normal font-semibold text-left tracking-[0] [direction:rtl] animate-fade-in" style={{"--animation-delay": "0.4s"}}>
          الرئيسية
        </div>
        <div className="absolute top-[87px] left-[1573px] text-[#f0f2f7] text-[64px] leading-normal font-semibold text-left tracking-[0] [direction:rtl] animate-fade-in" style={{"--animation-delay": "0.6s"}}>
          المزايا
        </div>
        <div className="absolute top-[87px] left-[1131px] text-[#f0f2f7] text-6xl leading-normal font-semibold text-left tracking-[0] [direction:rtl] animate-fade-in" style={{"--animation-delay": "0.8s"}}>
          طريقة العمل
        </div>
        <div className="absolute top-[89px] left-[836px] text-[#eaecf3] text-[57.8px] leading-normal font-semibold text-left tracking-[0] [direction:rtl] animate-fade-in" style={{"--animation-delay": "1s"}}>
          التطبيق
        </div>
        
        {/* Login Button */}
        <div className="absolute top-[68px] left-[204px] animate-fade-in" style={{"--animation-delay": "1.2s"}}>
          <div className="w-[427px] h-[120px] bg-[#bedced] rounded-[32px] flex items-center justify-center hover:scale-105 transition-transform duration-300">
            <div className="text-[#395292] text-[57.4px] leading-normal font-semibold text-center tracking-[0] [direction:rtl]">
              تسجيل الدخول
            </div>
          </div>
        </div>
        
        {/* Image 3 - Placeholder for now */}
        <div className="absolute w-[119px] h-[152px] top-[60px] left-[2627px] bg-white/20 rounded-[16px] border-2 border-dashed border-white/40 flex items-center justify-center animate-fade-in" style={{"--animation-delay": "1.4s"}}>
          <span className="text-white/60 text-xs">Image 3</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative w-full h-full flex items-center">
        {/* Left Side - Illustration */}
        <div className="absolute w-[947px] h-[1229px] top-[481px] left-[497px] bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-[32px] border border-white/20 flex items-center justify-center animate-fade-in" style={{"--animation-delay": "0.5s"}}>
          {/* GOOD Text */}
          <div className="absolute top-[15px] left-[379px] text-[#eceded] text-[101.8px] font-semibold tracking-[0] leading-normal animate-fade-up" style={{"--animation-delay": "1s"}}>
            GOOD
          </div>
          
          {/* Image 2 - Placeholder for now */}
          <div className="absolute w-[200px] h-[191px] top-[120px] left-[17px] bg-white/20 rounded-[16px] border-2 border-dashed border-white/40 flex items-center justify-center animate-fade-up" style={{"--animation-delay": "1.5s"}}>
            <span className="text-white/60 text-xs">Image 2</span>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="absolute right-[497px] top-[597px] text-right">
          {/* Main Headline */}
          <div className="text-[#f5f6f9] text-[153.5px] leading-[194.4px] font-semibold tracking-[0] [direction:rtl] mb-8 animate-fade-up" style={{"--animation-delay": "0.8s"}}>
            قهوتك اليومية
            <br />
            باشتراك ذكي
          </div>
          
          {/* Description */}
          <p className="text-[#dee2ec] text-[63.3px] leading-[82.5px] font-semibold tracking-[0] [direction:rtl] mb-12 max-w-[953px] animate-fade-up" style={{"--animation-delay": "1.2s"}}>
            اشترك شهريا واشرب كوبك اليومي
            <br />
            من القهوة بسعر مخقض في
            <br />
            المقاهي المشاركة
          </p>
          
          {/* CTA Button */}
          <div className="w-[366px] h-[120px] bg-[#e2b514] rounded-[32px] flex items-center justify-center animate-fade-up hover:scale-105 transition-transform duration-300" style={{"--animation-delay": "1.6s"}}>
            <div className="text-[#3d5083] text-[30.6px] leading-normal font-semibold text-center tracking-[0] [direction:rtl]">
              ابدأ الآن
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
