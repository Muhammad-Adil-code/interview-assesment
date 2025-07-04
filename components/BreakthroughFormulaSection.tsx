'use client';

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function BreakthroughFormulaSection() {
  return (
    <div className="bg-white py-8 sm:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Desktop Header Section (unchanged) */}
        <div className="text-center mb-8 sm:mb-12 hidden lg:block">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl  mb-4 sm:mb-6" style={{ fontFamily:' Staatliches, arial, sans-serif', fontWeight:'bolder', fontSize:'25px',verticalAlign:'middle', transform:'scaleY(1.65)', lineHeight:'120%'}}>
            <span className="text-gray-900">CELLTOX: </span>
            <span style={{color:'#20C500'}}>BREAKTHROUGH FORMULA</span>
            <span className="text-gray-900"> SUPPORTS </span>
            <span style={{color:'#20C500'}}>CELLULAR HEALTH</span>
          </h1>
          <p style={{fontSize:'17px'}} className="text-sm sm:text-base text-gray-700 max-w-4xl mx-auto leading-relaxed">
            CellTox works differently from ordinary supplements, instead of just providing general nutrients to
            nourish, our formula works directly at the cellular level, specifically designed to disrupt what can harm
            your cells and promote cellular health. Together, these compounds work in a synergistic way.
          </p>
          
        </div>
        {/* Mobile Header Section (separate) */}
        <div className="text-center mt-4 mb-8 block lg:hidden">
          <h1 className="text-xl  mb-3" style={{ fontFamily:'arial, Staatliches', fontWeight:'800', fontSize:'16px',verticalAlign:'middle', transform:'scaleY(1.5)', lineHeight:'120%'}}>
            <span className="text-gray-900">CELLTOX: </span>
            <span style={{color:'#20C500'}}>BREAKTHROUGH FORMULA</span>
            <span className="text-gray-900"> SUPPORTS </span>
            <span style={{color:'#20C500'}}>CELLULAR HEALTH</span>
          </h1>
          <p className="text-xs text-black-700 max-w-xs mx-auto pt-2 leading-relaxed" style={{fontFamily:'HarmoniaSansW01-Regular, arial, san-serif', fontSize:'14px', fontWeight:'500'} }>
            CellTox works differently than ordinary supplements. Instead of just providing general vitamins or minerals, our formula works directly at the cellular level, scientifically designed to interact with your body's natural processes and provide targeted support where it's needed most.
          </p>
        </div>

        {/* MOBILE/TABLET ONLY: Original Section (untouched) */}
        <div className="block lg:hidden">
          {/* Cell Diagram Section */}
          <div className="flex flex-row sm:flex-col items-center justify-center gap-4 sm:gap-12 mb-8 sm:mb-16">
            {/* Left Cell Group - Clustered */}
            <div className="flex flex-col items-center">
              <div className="relative w-38 h-38 sm:w-48 sm:h-48 mb-0">
                <img src="/images/celluler1.png" alt="Disorganized Cells" className="w-full h-full object-contain" />
              </div>
            </div>
            {/* Right Cell Group - Organized Grid */}
            <div className="flex flex-col items-center">
              <div className="relative w-38 h-38 sm:w-48 sm:h-48 mb-0">
                <img src="/images/celluler2.png" alt="Organized Cells" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
          {/* Curved Arrow (Vector 1.png) for Mobile */}
          <div className="flex justify-center -mt-9">
            <img src="/images/Vector 1.png" alt="Curved arrow" style={{width: '120px', height: 'auto'}} />
          </div>
          {/* Two-Column Feature Section */}
          <div className="mb-8 sm:mb-12 mt-6">
            <div className="text-center mb-6 sm:mb-8 ">
              <span style={{fontSize:'18px', color:'black', fontWeight:'600', display: 'block', textAlign: 'center'}}>
                Our formula combines <span style={{fontWeight:'700'}}>two powerful</span> and <span style={{fontWeight:'700'}}>scientifically researched</span> compounds:
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-8">
              {/* Left Column: Ivermectin */}
              <div className="py-6 sm:py-12 -mt-6">
                <h3 style={{fontFamily: 'Staatliches, Arial, sans-serif', transform: 'scaleY(1.5)', fontWeight: 800, fontSize: '13px', letterSpacing: 0, textAlign: 'center', marginBottom: 8}}>
                  NOBEL-PRIZE WINNING <span style={{color:'#20C500'}}>IVERMECTIN:</span>
                </h3>
                <p className="text-sm sm:text-base text-gray-800 " style={{textAlign: 'center', fontSize:'15px'}}>
                  This remarkable compound works by targeting specific cellular mechanisms that abnormal cells rely on.
                </p>
                <div className="flex flex-row sm:flex-col items-center gap-4 mb-4 min-h-[200px] sm:min-h-[240px]">
                  {/* Image Card */}
                  <div style={{ borderRadius: '16px', overflow: 'hidden', width: '140px', height: '265px', flexShrink: 0 }}>
                    <img
                      src="/images/Group 12.png"
                      alt="Abstract Cell"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                  {/* Text Box */}
                  <div
                    style={{
                      background: '#F0FFED',
                      border: '2px solid #20C500',
                      borderRadius: '16px',
                      paddingLeft:'10px',
                      paddingTop:'16px',
                      paddingRight:'16px',
                      paddingBottom:'16px',
                      fontFamily: 'Poppins, Arial, sans-serif',
                      color: '#222',
                      textAlign: 'left',
                      fontSize: '14.75px',
                      fontWeight: 400,
                      lineHeight: '1.5',
                      flex: 1,
                      height: '240px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <span>
                      Research indicates it can <b style={{ color: '#20C500', fontWeight: 700 }}>help disrupt the growth and spread of these cells</b> while <b style={{ color: '#20C500', fontWeight: 700 }}>supporting</b> your immune system's <b style={{ color: '#20C500', fontWeight: 700 }}>ability to identify</b> and <b style={{ color: '#20C500', fontWeight: 700 }}>respond</b> to them.
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm -mt-4 " style={{color:'blaack',fontWeight:'400',lineHeight:'150%', fontSize:'15px', textAlign:'left' }}>
                  With a long history of safe use, ivermectin has gained attention for its potential in supporting cellular health.
                </p>
              </div>
              {/* Right Column: Fenbendazole */}
              <div className="py-6 sm:py-12 -mt-8">
                <h3 className="mb-3" style={{fontFamily: 'Staatliches, Arial, sans-serif', transform: 'scaleY(1.5)', fontWeight: 800, fontSize: '13px', letterSpacing: 0, textAlign: 'center', marginBottom: 8}}>
                  PHARMACEUTICAL-GRADE <span style={{color:'#20C500'}}>FENBENDAZOLE:</span>
                </h3>
                <p className="text-sm sm:text-base text-gray-800 mt-4 mb-4" style={{color:'black',textAlign: 'center', fontSize:'14px'}}>
                  Originally researched for other applications, fenbendazole has shown impressive results in supporting cellular health.
                </p>
                <div className="flex flex-row items-start gap-3 mb-4" style={{height: '250px'}}>
                  {/* Image Card */}
                  <div className="-mt-3" style={{ borderRadius: '16px', overflow: 'hidden', width: '140px', height: '265px', flexShrink: 0, background: 'none', boxShadow: 'none' }}>
                    <img
                      src="/images/Group 11.png"
                      alt="Abstract Cell"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                  {/* Text Card */}
                  <div  className="n"
                    style={{
                      background: '#F0FFED',
                      border: '2px solid #20C500',
                      borderRadius: '16px',
                      paddingLeft:'10px',
                      paddingTop:'16px',
                      paddingRight:'16px',
                      paddingBottom:'16px',
                      fontFamily: 'Poppins, Arial, sans-serif',
                      color: '#222',
                      textAlign: 'left',
                      fontSize: '15px',
                      fontWeight: 400,
                      lineHeight: '1.45',
                      flex: 1,
                      height: '240px',
                      minHeight: '120px',
                      display: 'flex',
                      alignItems: 'left',
                      boxShadow: 'none',
                    }}
                  >
                    <span>
                      It works by targeting cellular energy production   – helping<b style={{ color: '#20C500', fontWeight: 600 }}> cut off the fuel</b> supply that  <b style={{ color: '#20C500', fontWeight: 600 }}>abnormal cells </b>need to grow and multiply, while having <b style={{ color: '#20C500', fontWeight: 600 }}>minimal impact</b> on<b style={{ color: '#20C500', fontWeight: 600 }}> healthy cells</b>.
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm " style={{ color:'blaack',fontWeight:'400',lineHeight:'150%', fontSize:'15px', textAlign:'left' }}>
                  This selective approach is why many researchers have become increasingly interested in its potential applications.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP ONLY: Custom Section */}
        <div className="hidden lg:block">
          {/* Cell Diagram Section - horizontal, no text */}
          <div className="flex flex-row items-center justify-center gap-12 mb-16">
            {/* Left Cell Group - Clustered */}
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 mb-0">
                <img src="/images/celluler1.png" alt="Disorganized Cells" className="w-full h-full object-contain" />
              </div>
            </div>
            {/* Right Cell Group - Organized Grid */}
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 mb-0">
                <img src="/images/celluler2.png" alt="Organized Cells" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
          {/* Curved Arrow (Vector 1.png) for Desktop */}
          <div className="flex justify-center mb-12" style={{marginTop:'-100px'}}>
            <img src="/images/Vector 1.png" alt="Curved arrow" style={{width: '140px', height: 'auto'}} />
          </div>
          {/* Two-Column Feature Section - horizontal */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <span className="text-base text-gray-900">
                Our formula combines <b>two powerful</b> and <b>scientifically <br /> researched</b> compounds:
              </span>
            </div>
            <div className="flex flex-row gap-8">
              {/* Left Column: Ivermectin */}
              <div className="py-12 flex-1 flex flex-col items-center">
                <h3 style={{
                  fontFamily: 'Staatliches, Arial, sans-serif',
                  transform: 'scaleY(1.5)',
                  fontWeight: 800,
                  fontSize: '18px',
                  letterSpacing: 0,
                  textAlign: 'center',
                  marginBottom: 8
                }}>
                  <span className="text-gray-900">NOBEL-PRIZE WINNING</span> <span style={{color:'#20C500'}}>IVERMECTIN:</span>
                </h3>
                <p style={{
                  textAlign: 'center',
                  fontSize: '15px',
                  color: 'black',
                  fontWeight: 400,
                  marginBottom: '16px'
                }}>
                  This remarkable compound works by targeting specific cellular mechanisms that abnormal cells rely on.
                </p>
                <div className="flex flex-row items-center gap-4 mb-4 min-h-[240px]">
                  <div style={{ borderRadius: '16px', overflow: 'hidden', width: '140px', height: '265px', flexShrink: 0 }}>
                    <img
                      src="/images/Group 12.png"
                      alt="Abstract Cell"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                  <div
                    style={{
                      background: '#F0FFED',
                      border: '2px solid #20C500',
                      borderRadius: '16px',
                      paddingLeft:'10px',
                      paddingTop:'16px',
                      paddingRight:'16px',
                      paddingBottom:'16px',
                      fontFamily: 'Poppins, Arial, sans-serif',
                      color: '#222',
                      textAlign: 'left',
                      fontSize: '18px',
                      fontWeight: 400,
                      lineHeight: '1.5',
                      flex: 1,
                      height: '240px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <span>
                      Research indicates it can <b style={{ color: '#20C500', fontWeight: 700 }}>help disrupt the growth and spread of these cells</b> while <b style={{ color: '#20C500', fontWeight: 700 }}>supporting</b> your immune system's <b style={{ color: '#20C500', fontWeight: 700 }}>ability to identify</b> and <b style={{ color: '#20C500', fontWeight: 700 }}>respond</b> to them.
                    </span>
                  </div>
                </div>
                <p style={{
                  fontSize: '15px',
                  color: 'black',
                  fontWeight: 400,
                  lineHeight: '150%',
                  textAlign: 'left',
                  marginTop: '-16px',
                  marginBottom: 0
                }}>
                  With a long history of safe use, ivermectin has gained attention for its potential in supporting cellular health.
                </p>
              </div>
              {/* Right Column: Fenbendazole */}
              <div className="py-12 flex-1 flex flex-col items-center">
                <h3 style={{
                  fontFamily: 'Staatliches, Arial, sans-serif',
                  transform: 'scaleY(1.5)',
                  fontWeight: 800,
                  fontSize: '18px',
                  letterSpacing: 0,
                  textAlign: 'center',
                  marginBottom: 8
                }}>
                  <span className="text-gray-900">PHARMACEUTICAL-GRADE</span> <span style={{color:'#20C500'}}>FENBENDAZOLE:</span>
                </h3>
                <p style={{
                  textAlign: 'center',
                  fontSize: '15px',
                  color: 'black',
                  fontWeight: 400,
                  marginBottom: '16px'
                }}>
                  Originally researched for other applications, fenbendazole has shown impressive results in supporting cellular health.
                </p>
                <div className="flex flex-row items-center gap-4 mb-4 min-h-[240px]">
                  <div style={{ borderRadius: '16px', overflow: 'hidden', width: '140px', height: '265px', flexShrink: 0 }}>
                    <img
                      src="/images/Group 11.png"
                      alt="Abstract Cell"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                  <div
                    style={{
                      background: '#F0FFED',
                      border: '2px solid #20C500',
                      borderRadius: '16px',
                      paddingLeft:'10px',
                      paddingTop:'16px',
                      paddingRight:'16px',
                      paddingBottom:'16px',
                      fontFamily: 'Poppins, Arial, sans-serif',
                      color: '#222',
                      textAlign: 'left',
                      fontSize: '18px',
                      fontWeight: 400,
                      lineHeight: '1.5',
                      flex: 1,
                      height: '240px',
                      minHeight: '120px',
                      display: 'flex',
                      alignItems: 'center',
                      boxShadow: 'none',
                    }}
                  >
                    <span>
                      It works by targeting cellular energy production   – helping<b style={{ color: '#20C500', fontWeight: 600 }}> cut off the fuel</b> supply that  <b style={{ color: '#20C500', fontWeight: 600 }}>abnormal cells </b>need to grow and multiply, while having <b style={{ color: '#20C500', fontWeight: 600 }}>minimal impact</b> on<b style={{ color: '#20C500', fontWeight: 600 }}> healthy cells</b>.
                    </span>
                  </div>
                </div>
                <p style={{
                  fontSize: '15px',
                  color: 'black',
                  fontWeight: 400,
                  lineHeight: '150%',
                  textAlign: 'left',
                  marginTop: '-16px',
                  marginBottom: 0
                }}>
                  This selective approach is why many researchers have become increasingly interested in its potential applications.
                </p>
              </div>
            </div>
          </div>
        </div>
            
        <div className="text-center block lg:hidden mt-6">
          <Button className="bg-orange-500 hover:bg-orange-600 -mt-8 text-white font-bold text-base sm:text-lg px-8 sm:px-12 py-6 rounded-md shadow-lg w-full sm:w-auto flex items-center justify-center gap-2">
            <span>SHOP NOW</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline', verticalAlign: 'middle', opacity: 1 }}>
              {/* Tail */}
              <line x1="3.13" y1="10" x2="16.88" y2="10" stroke="#fff" strokeWidth="2" />
              {/* Arrowhead */}
              <polyline points="11.25,4.38 16.88,10 11.25,15.63" stroke="#fff" strokeWidth="2" fill="none" />
            </svg>
          </Button>
        </div>

        {/* Shop Now Button (DESKTOP ONLY) */}
        <div className="text-center hidden lg:block mt-10">
          <Button
            className="flex items-center justify-center gap-2"
            style={{
              width: '564px',
              height: '56px',
              gap: '10px',
              borderRadius: '8px',
              paddingTop: '16px',
              paddingRight: '24px',
              paddingBottom: '16px',
              paddingLeft: '24px',
              background: '#FF5E07',
              opacity: 1,
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ fontWeight: 700, fontSize: '20px', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.6px', fontFamily: 'HarmoniaSansW01-Bold, Arial, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '24px' }}>
              SHOP NOW
            </span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline', verticalAlign: 'middle', opacity: 1 }}>
              {/* Tail */}
              <line x1="3.13" y1="10" x2="16.88" y2="10" stroke="#fff" strokeWidth="2" />
              {/* Arrowhead */}
              <polyline points="11.25,4.38 16.88,10 11.25,15.63" stroke="#fff" strokeWidth="2" fill="none" />
            </svg>
          </Button>
        </div>
      </div>
      
    </div>
  )
}