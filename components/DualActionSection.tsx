import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function DualActionSection() {
  const ivermectinBenefits = [
    "Disrupts cancer cells' ability to evade immune detection",
    "Helps your immune system recognize and respond to abnormal cells",
    "Interferes with critical signaling pathways cancer cells need to survive",
  ]

  const fenbendazoleBenefits = [
    "Blocks cancer cells' ability to metabolize glucose, essentially 'starving' them",
    "Targets the microtubule system cancer cells need for rapid division",
    "Creates oxidative stress in cancer cells while sparing healthy cells",
  ]

  return (
    <div className="relative min-h-screen bg-green-50 py-8 sm:py-16 px-4 overflow-hidden">
      {/* Decorative Green Leaf Top Left - only 50% visible in section (Desktop Only) */}
      <div className="hidden lg:block absolute" style={{ width: '431.61px', height: '505.65px', top: '85px', left: '30px', transform: 'rotate(-0.36deg)', zIndex: 10 }}>
        <img
          src="/images/falling-green-leaves-natures-graceful-dance 2.png"
          alt="Green leaf"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-100">
        {/* Header Section (Desktop Only) */}
        <div className="text-center mb-8 sm:mb-16 hidden lg:block">
          <h1 className="text-2xl xl:text-5xl 2xl:text-6xl  mb-4 sm:mb-6" style={{fontWeight: 'bolder', fontFamily:'Staatliches, arial', fontSize:'25px', transform:'scaleY(1.5)'}}>
            <span className="text-gray-900">HOW CELLTOX'S </span>
            <span style={{color:'#20C500'}}>DUAL-ACTION </span>
            <span className="text-gray-900">FORMULA </span>
            <span style={{color:'#20C500'}}>FIGHTS BACK</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-800 max-w-3xl mx-auto " style={{fontFamily:'HarmoniaSansW01-Regular, arial, sans-serif', fontSize:'16px'}}>
            CellTox targets all three vulnerabilities through its powerful
            <br className="hidden sm:block" />
            dual-action formula:
          </p>
        </div>

        {/* Header Section (Mobile Only) */}
        <div className="block lg:hidden text-center mb-6 px-2" style={{margin: '0 auto'}}>
          <h1 style={{fontWeight: '800', fontFamily:'Staatliches, sans-serif', fontSize:'15px', lineHeight:'130%', paddingTop:'15px', letterSpacing: 0, color: '#222',  marginBottom: 15, textAlign: 'center', transform:'scaleY(1.5)'}}>
            HOW CELLTOX'S <span style={{color:'#20C500'}}>DUAL-ACTION</span><br/>
            FORMULA <span style={{color:'#20C500'}}>FIGHTS BACK</span>
          </h1>
          <p style={{fontFamily:'HarmoniaSansW01-Regular, arial, sans-serif', fontSize:'14px', color:'#222', paddingTop:'10px', marginBottom: 22, lineHeight:'140%', textAlign: 'center'}}>
            CellTox targets all three vulnerabilities through its powerful dual-action formula:
          </p>
        </div>

        {/* Top Content Area - Ingredient Cards (Desktop Only) */}
        <div className="hidden lg:grid grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-12 sm:mb-20 relative">
          {/* Ivermectin Card with Medicine in Hand Image to the Left */}
          <div className="relative flex">
            {/* Medicine in Hand Image - left of the card */}
            <div style={{ position: 'absolute', left: '-220px', top: '-195px', width: '434px', height: '728px', zIndex: 1 }}>
              <img
                src="/images/madicineinhand.png"
                alt="Medicine in hand"
                style={{ width: '434px', height: '728px', objectFit: 'contain' }}
              />
            </div>
            <Card className="bg-white shadow-lg border-0 rounded-lg w-full relative z-10" style={{boxShadow: '0px 0px 12px 0px #00000026'}}>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg mb-3 sm:mb-4" style={{fontFamily:'Staatliches, arial, sans-serif', transform: 'scaleY(1.5)', fontWeight: 799, fontSize: '13px', letterSpacing: '0px'}}>
                  NOBEL PRIZE WINNING IVERMECTIN:
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {ivermectinBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2 sm:gap-3">
                      <span style={{ width: '15px', height: '15px', background: '#20C500', borderRadius: '4px', marginTop: '5.02px', marginLeft: '0.5px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 4.5L5 7L9 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-xs sm:text-sm text-gray-800 leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Fenbendazole Card */}
          <Card className="bg-white shadow-lg border-0 rounded-lg w-full" style={{boxShadow: '0px 0px 12px 0px #00000026'}}>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg mb-3 sm:mb-4" style={{fontFamily:'Staatliches, arial, sana-serif', transform: 'scaleY(1.5)', fontWeight: 799, fontSize: '13px', letterSpacing: '0px'}}>FENBENDAZOLE:</h3>
              <div className="space-y-2 sm:space-y-3">
                {fenbendazoleBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    <span style={{ width: '15px', height: '15px', background: '#20C500', borderRadius: '4px', marginTop: '5.02px', marginLeft: '0.5px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 4.5L5 7L9 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-xs sm:text-sm text-gray-800 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Content Area - Ingredient Cards (Mobile Only) */}
        <div className="block lg:hidden w-full relative flex items-center justify-center px-2 pb-6" style={{overflow: 'visible'}}>
          {/* Hand and leaf images absolutely positioned on the left, under the cards */}
          <img src="/images/handmadicine3.png" alt="Medicine in hand" style={{ position: 'absolute',left: '-17px', top: '-25px',  width: '390px', height: '612px', zIndex: 1,  pointerEvents: 'none' }} />
          <img src="/images/falling-green-leaves-natures-graceful-dance 2.png" alt="Green leaf" style={{ position: 'absolute', left: '-90px', top: '-150px', width: '600px', height: '600px', zIndex: 0, objectFit: 'contain', pointerEvents: 'none', transform:'rotate(-88)' }} />
          <img src="/images/falling-green-leaves-natures-graceful-dance 2.png" alt="Green leaf" style={{ position: 'absolute', left: '-95px', top: '130px', width: '600px', height: '600px', zIndex: 0, objectFit: 'contain', pointerEvents: 'none', transform:'rotate(-20)' }} />
          {/* Cards container aligned to the right */}
          <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'flex-end', width: '100%' }}>
            {/* Ivermectin Card */}
            <div style={{ background: '#fff', borderRadius: 12, lineHeight:'100%', boxShadow: '0px 0px 12px 0px #00000026', padding: 15, width: 'calc(80% + 5px)', maxWidth: 325, marginRight: '-5px', textAlign: 'left' }}>
              <div style={{ fontFamily: 'Staatliches, arial, sans-serif', transform: 'scaleY(1.5)', fontWeight: 800, fontSize: '12px', letterSpacing: '0px', marginBottom: 8, textAlign: 'left' }}>
                NOBEL-PRIZE WINNING IVERMECTIN:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 , paddingTop:'10px'}}>
                {["Disrupts cancer cells' ability to evade immune detection","Helps your immune system recognize and respond to abnormal cells","Interferes with critical signaling pathways cancer cells need to survive"].map((point, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <span style={{ width: '14px', height: '14px', background: '#20C500', borderRadius: '0', marginTop: '5.02px', marginLeft: '0.5px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 4.5L5 7L8 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{ color: '#222', fontFamily: 'HarmoniaSansW, arial, sans-serif',fontStyle:'Regular', fontWeight: 400, fontSize: 14, lineHeight: '130%', letterSpacing: 0 }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Fenbendazole Card */}
            <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0px 0px 12px 0px #00000026', padding: 15, width: 'calc(80% + 5px)', maxWidth: 325, marginRight: '-5px', textAlign: 'left' }}>
              <div style={{ fontFamily: 'Staatliches, arial, sans-serif', transform: 'scaleY(1.5)', fontWeight: 799, fontSize: '13px', letterSpacing: '0px', marginBottom: 8, textAlign: 'left' }}>
                FENBENDAZOLE:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {["Blocks cancer cells' ability to metabolize glucose, essentially 'starving' them","Targets the microtubule system cancer cells need for rapid division","Creates oxidative stress in cancer cells while sparing healthy cells"].map((point, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <span style={{ width: '14px', height: '14px', background: '#20C500', borderRadius: '0', marginTop: '5.02px', marginLeft: '0.5px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 4.5L5 7L8 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{ color: '#222', fontFamily: 'HarmoniaSansW01-Regular, Arial, sans-serif', fontWeight: 400, fontSize: 15, lineHeight: '130%', letterSpacing: 0 }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Content Area - Two Columns (Desktop Only) */}
        <div className="hidden lg:grid grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Left Column - Synergy Text & Button */}
          <div className="space-y-4 sm:space-y-6 lg:pl-12" style={{marginTop:'90px', height:'116px', width:'564px', marginLeft:'70px'}}>
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 " style={{fontFamily:'Poppins, arial', fontSize:'25px', fontWeight:'700'}}>
                When these two compounds work together in the{" "}
                <span style={{color:'#20C500'}}>precise ratio found in CellTox</span>, they create a
                synergistic effect that's greater than either compound alone.
              </h2>
              <p className="text-sm sm:text-base text-gray-800 " style={{fontFamily:'Poppins, arial', fontSize:'18px'}}>
                This comprehensive approach helps{" "}
                <span className="font-bold text-gray-900" >support your body's natural defenses</span> while{" "}
                <span className="font-bold text-gray-900">
                  targeting cancer cells through multiple pathways simultaneously
                </span>
                .
              </p>
            </div>
            {/* Shop Now Button */}
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-base sm:text-lg  sm:px-10 py-3 sm:py-4 rounded-md shadow-lg " style={{width:'514px', height:'56px', display:'flex', alignItems:'center', justifyContent:'center', gap:'10px'}}>
              SHOP NOW
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
          </div>
          {/* Right Column - Cancer Development Diagram */}
          <div className="flex justify-center items-center order-first lg:order-last">
            <img
              src="/images/product-3.jpeg"
              alt="Diagram showing the cancer development process from a normal cell to malignant cells"
              width={500}
              height={350}
              style={{ objectFit: 'contain' }}
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg mb-6 lg:mb-8"
            />
          </div>
        </div>

        {/* Bottom Content Area (Mobile Only) */}
        <div className="block lg:hidden" style={{zIndex:'1', position: 'relative'}}>
          <div className="space-y-4" style={{zIndex: 2, position: 'relative'}}>
            <h2 className="text-xl font-bold text-gray leading-tight" style={{fontWeight:'600', textAlign: 'center'}}>
              When these two compounds work together in the{" "}
              <span className="font-bold"  style={{color:'#20C500'}}>precise ratio found in CellTox</span>, they create a
              synergistic effect that's greater than either compound alone.
            </h2>
            <div className="flex justify-center items-center mt-4">
              <div style={{position: 'relative', left: 0, right: 0, width: '100vw', maxWidth: '100vw', margin: 0, padding: 0}}>
                <img
                  src="/images/Frame 97.png"
                  alt="Diagram showing the cancer development process from a normal cell to malignant cells"
                  style={{position: 'relative', left: 0, right: 0, width: '100vw', maxWidth: '100vw', display: 'block', margin: 0, padding: 0}}
                />
              </div>
            </div>
            <p className="text-sm text-gray leading-relaxed mb-6 mt-2" style={{marginBottom:'20px',fontSize:'17px', fontWeight:'500'}}>
              This comprehensive approach helps{" "}
              <span className="font-bold text-gray" >support your body's natural defenses</span> while{" "}
              <span className="font-bold text-gray">
                targeting cancer cells through multiple pathways simultaneously
              </span>
              .
            </p>
            <Button style={{width: 320, marginTop:'25px', marginBottom:'5px', height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, borderRadius: 8, background: '#FF5E07', color: '#fff', padding: '16px 24px', opacity: 1, fontWeight: 700, fontSize: 18, margin: '0 auto', boxShadow: '0px 0px 12px 0px #00000026', border: 'none'}}>
              SHOP NOW
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
            
          </div>
        </div>
      </div>
    </div>
  )
}