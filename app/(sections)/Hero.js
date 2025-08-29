import React from "react";
import image2 from "./image-2.png";
import image3 from "./image-3.png";

export const FigmaDesign = () => {
  return (
    <div className="bg-transparent grid justify-items-center [align-items:start] w-screen">
      <div className="w-[2952px] h-[1710px]">
        <div className="h-[1710px]">
          <div className="relative w-[2952px] h-[1586px] top-[124px]">
            <div className="relative h-[1710px] top-[-124px] bg-[#2f488b]">
              <div className="absolute w-[378px] h-[133px] top-[1311px] left-[2369px]">
                <div className="relative w-[366px] h-[120px] top-[9px] left-1.5 bg-[#e2b514] rounded-[32px]">
                  <div className="w-64 h-[88px] top-2.5 left-[61px] text-[#3d5083] text-[30.6px] leading-[normal] absolute [font-family:'Inter-SemiBold',Helvetica] font-semibold text-left tracking-[0] [direction:rtl]">
                    ابدأ الآن
                  </div>
                </div>
              </div>

              <p className="absolute w-[953px] h-[248px] top-[1013px] left-[1801px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#dee2ec] text-[63.3px] tracking-[0] leading-[82.5px] [direction:rtl]">
                اشترك شهريا واشرب كوبك اليومي
                <br />
                من القهوة بسعر مخقض في
                <br />. المقاهي المشاركة
              </p>

              <div className="absolute w-[959px] h-[389px] top-[597px] left-[1792px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#f5f6f9] text-[153.5px] text-left tracking-[0] leading-[194.4px] [direction:rtl]">
                قهوتك اليومية
                <br />
                باشتراك ذكي
              </div>

              <div className="absolute w-[947px] h-[1229px] top-[481px] left-[497px] bg-[url(/image.png)] bg-cover bg-[50%_50%]">
                <div className="absolute w-[310px] h-[140px] top-[15px] left-[379px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#eceded] text-[101.8px] tracking-[0] leading-[normal]">
                  GOOD
                </div>

                <img
                  className="absolute w-[200px] h-[191px] top-[120px] left-[17px] object-cover"
                  alt="Image"
                  src={image2}
                />
              </div>

              <div className="absolute w-[2952px] h-[299px] top-[125px] left-0">
                <img
                  className="absolute w-[119px] h-[152px] top-[60px] left-[2627px] object-cover"
                  alt="Image"
                  src={image3}
                />

                <div className="w-[300px] h-[177px] top-[47px] left-[2310px] text-[#f1f3f7] text-[88.3px] leading-[88.4px] absolute [font-family:'Inter-SemiBold',Helvetica] font-semibold text-left tracking-[0] [direction:rtl]">
                  كوبك
                  <br />
                  Ковен
                </div>

                <div className="w-[210px] h-[77px] top-[87px] left-[1910px] text-[#ebedf4] text-[56.2px] leading-[normal] absolute [font-family:'Inter-SemiBold',Helvetica] font-semibold text-left tracking-[0] [direction:rtl]">
                  الرئيسية
                </div>

                <div className="w-[166px] h-[78px] top-[87px] left-[1573px] text-[#f0f2f7] text-[64px] leading-[normal] absolute [font-family:'Inter-SemiBold',Helvetica] font-semibold text-left tracking-[0] [direction:rtl]">
                  المزايا
                </div>

                <div className="w-[328px] h-[76px] top-[87px] left-[1131px] text-[#f0f2f7] text-6xl leading-[normal] absolute [font-family:'Inter-SemiBold',Helvetica] font-semibold text-left tracking-[0] [direction:rtl]">
                  طريقة العمل
                </div>

                <div className="w-[198px] h-[75px] top-[89px] left-[836px] text-[#eaecf3] text-[57.8px] leading-[normal] absolute [font-family:'Inter-SemiBold',Helvetica] font-semibold text-left tracking-[0] [direction:rtl]">
                  التطبيق
                </div>

                <div className="absolute w-[441px] h-[134px] top-[68px] left-[204px]">
                  <div className="relative w-[427px] h-[120px] top-2 left-[7px] bg-[#bedced] rounded-[32px]">
                    <div className="w-[377px] h-[75px] top-[26px] left-[23px] text-[#395292] text-[57.4px] leading-[normal] absolute [font-family:'Inter-SemiBold',Helvetica] font-semibold text-left tracking-[0] [direction:rtl]">
                      تسجيل الدخول
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};