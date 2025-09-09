import Navbar from "@/components/Navbar";
import Hero from "./(sections)/Hero";
import Features from "./(sections)/Features";
import How from "./(sections)/How";
import Partners from "./(sections)/Partners";
import CTA from "./(sections)/CTA";

export default function Page(){
  return (
    <>
      {/* Mobile Layout */}
      <div className="container-center-horizontal">
        <form className="index screen" name="form1" action="form1" method="post">
          {/* Mobile Hero Section */}
          <div className="overlap-group7">
            <div className="overlap-group15">
              <p className="using-teamly-is-a-ma-1 sfarabic-regular-normal-black-14px">خصم شهري ثابت يصل إلى ٤٠٪.</p>
            </div>
            <div className="flex-row-2">
              <img className="list" src="/img/list@2x.png" alt="List" />
              <img
                className="kobek-full-white_1-2-2"
                src="/logo.svg"
                alt="kobek full - white_1 2"
              />
            </div>
            <div className="frame-1618872996-1">
              <h1 className="heading-2 sfarabic-normal-white-24px">
                تشتري قهوة كل يوم؟ كوبك يخلي السعر على مزاجك ومزاج محفظتك!
              </h1>
              <p className="paragraph-1 sfarabic-regular-normal-white-14px">
                خلّي القهوة اللي تحبها أقرب، أرخص، وأبسط. مع خدمتنا، تدفع مبلغ شهري ثابت وتستمتع بكوبك المفضل يوميًّا من
                أي مقهى مشارك، بسعر أذكى وراحة أكبر.
              </p>
            </div>
            <div className="image-container">
              <div className="image">
                <div className="overlap-group1-1">
                  <div className="iphone-1">
                    <div className="overlap-group-4">
                      <div className="x54-bonus-1"></div>
                      <header className="header-1">
                        <div className="vector-35"><img className="vector-36" src="/img/vector-42@2x.png" alt="Vector" /></div>
                      </header>
                      <div className="email-1-1"></div>
                      <div className="email-2-1"></div>
                      <div className="email-3-1"></div>
                      <div className="email-4-1"></div>
                    </div>
                    <div className="time-1"></div>
                  </div>
                  <div className="rating-board-1">
                    <div className="x396-1">
                      <div className="address-5 address sfarabic-bold-black-10-1px">٨ آلاف</div>
                      <div className="text-46 sfarabic-medium-black-4-2px">مستخدم يومي</div>
                    </div>
                    <div className="x394-1">
                      <div className="address-6 address sfarabic-bold-black-10-1px">٦٠٣ ألف</div>
                      <div className="text-43 sfarabic-medium-black-4-2px">ريال تم توفيره</div>
                    </div>
                    <div className="x395-1">
                      <div className="text-45 sfarabic-bold-black-10-1px">٤٠٪</div>
                      <div className="text-44 sfarabic-medium-black-4-2px">خصم ثابت</div>
                    </div>
                  </div>
                </div>
              </div>
              <img className="image-7" src="/image-2.png" alt="image 7" />
            </div>
            <div className="frame-1618872997-2">
              <div className="register-buton-2 register-buton"></div>
              <div className="text-14 sfarabic-bold-chambray-16px">ابدأ الآن</div>
            </div>
          </div>
          
          {/* Mobile Features and Rest of Content */}
          <img className="frame-1618872999-1" src="/img/frame-1618872999-1.png" alt="Frame 1618872999" />
          <Features />
          <How />
          <Partners />
          <CTA />
          
          <div className="system-i-os-home-indicator">
            <div className="home-indicator"></div>
          </div>
        </form>
      </div>

      {/* Desktop Layout */}
      <div className="container-center-horizontal">
        <div className="landing-pageu47desktopu47v1u460 screen">
          <div className="overlap-group11">
            <div className="frame-1618872993">
              <div className="flex-col">
                <div className="frame-1618872992">
                  <div className="overlap-group2">
                    <div className="hero-section">
                      <div className="promotion">
                        <div className="frame-1618872995">
                          <div className="frame-1618872994">
                            <div className="button">
                              <div className="frame-1618872998"><div className="new">اشترك</div></div>
                            </div>
                            <p className="using-teamly-is-a-ma sfarabic-regular-normal-black-14px">
                              احصل على خصم شهري ثابت يصل إلى ٤٠٪ على قهوتك — كوبك المعتاد، بسعر أوفر، كل يوم.
                            </p>
                          </div>
                        </div>
                      </div>
                      <Navbar/>
                      <Hero/>
                    </div>
                    <img className="image-6" src="/image-3.png" alt="image 6" />
                  </div>
                </div>
                <img className="frame-1618872999" src="/img/frame-1618872999.png" alt="Frame 1618872999" />
                <Features/>
                <How/>
                <Partners/>
              </div>
              <CTA/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
