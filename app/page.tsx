'use client';

import { useState } from 'react';
import { Menu, Search, ShoppingCart, Star, ChevronDown, Shield, CheckCircle, Truck, Users, Award, ChevronUp, Bold } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ReviewsSection } from '@/components/ReviewsSection';
import { AddReviewForm } from '@/components/AddReviewForm';
import DualActionSection from '@/components/DualActionSection';
import BreakthroughFormulaSection from '@/components/BreakthroughFormulaSection';
import TrustBar from '@/components/TrustBar';
import Image from 'next/image';
import React from 'react';

export default function Home() {
  const [productDetailsOpen, setProductDetailsOpen] = useState(false);
  const [benefitsOpen, setBenefitsOpen] = useState(false);
  const [shippingOpen, setShippingOpen] = useState(false);
  const [showAddReviewForm, setShowAddReviewForm] = useState(false);
  const [refreshReviews, setRefreshReviews] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Example FAQ questions
  const faqs = [
    'What is CellTox and how does it work?',
    'Is CellTox safe to use with other supplements or medications?',
    'How long does it take to see results?',
    'Where is CellTox manufactured?',
    'How do I take CellTox for best results?',
    'Is there a money-back guarantee?',
  ];

  const handleReviewAdded = () => {
    setRefreshReviews(prev => prev + 1);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(prev => (prev === index ? null : index));
  };

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-black text-white text-center px-4 font-medium w-full flex items-center justify-center" style={{height: '64px', paddingTop: '12px', paddingBottom: '12px', paddingLeft: '16px', paddingRight: '16px', gap: '10px'}}>
        {/* Desktop version */}
        <span className="hidden sm:inline">CELLTOX CLAIMS 40 BILLION OUT FASTER THAN EXPECTED. LOCK IN YOUR ORDER TODAY TO GET 25% OFF + FREE SHIPPING.</span>
        {/* Mobile version: new frame and text styles */}
        <span
          className="sm:hidden flex items-center justify-center text-center"
          style={{
            width: '358px',
            height: '40px',
            fontFamily: 'Staatliches, Arial, sans-serif',
            fontWeight: 799,
            fontSize: '10px',
            lineHeight: '1.3',
            letterSpacing: '0px',
            color: '#FFFFFF',
            verticalAlign: 'middle',
            textTransform: 'uppercase',
            transform: 'scaleY(1.3)',
          }}
        >
          CELLOTOX CLEANSE IS SELLING OUT FASTER THAN EXPECTED!<br />
          LOCK IN YOUR ORDER TODAY TO GET 25% OFF + FREE SHIPPING.
        </span>
      </div>

      {/* Header */}
      <header className="bg-white border-b">
        {/* MOBILE NAVBAR */}
        <div className="sm:hidden flex items-center justify-between" style={{ width: '360px', height: '62.88px', padding: '16px', background: '#FFFFFF', borderBottom: '1px solid #E8E8E8' }}>
          {/* Menu Icon */}
          <Button variant="ghost" size="sm" style={{ width: '28px', height: '28px', minWidth: '28px', minHeight: '28px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Menu style={{ width: '28px', height: '28px' }} />
          </Button>
          {/* Full Logo Image Centered */}
          <img src="/images/full logo.png" alt="CellTox Full Logo" style={{ height: '32px', width: 'auto', maxWidth: '180px', display: 'block', margin: '0 auto' }} />
          {/* Right Icons: Search and Shopping Cart */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" style={{ width: '28px', height: '28px', minWidth: '28px', minHeight: '28px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Search style={{ width: '28px', height: '28px' }} />
            </Button>
            <Button variant="ghost" size="sm" style={{ width: '28px', height: '28px', minWidth: '28px', minHeight: '28px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShoppingCart style={{ width: '28px', height: '28px' }} />
            </Button>
          </div>
        </div>
        {/* DESKTOP NAVBAR (unchanged) */}
        <div className="hidden sm:block">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center flex-1">
                <Button variant="ghost" size="sm" className="mr-2">
                  <Menu className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex-1 flex justify-center">
                <img src="/images/full logo.png" alt="CellTox Full Logo" className="h-12 w-auto object-contain" style={{maxHeight: '48px'}} />
              </div>
              <div className="flex items-center flex-1 justify-end space-x-2 sm:space-x-4">
                <Button variant="ghost" size="sm">
                  <Search className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button variant="ghost" size="sm">
                  <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* TrustBar for desktop (after navbar, before hero grid) */}
      <div className="hidden lg:block">
        <TrustBar />
      </div>

      {/* Hero Section */}
      <section className="pt-0 pb-6 sm:pt-0 sm:pb-8" style={{ background: '#FFFFFF' }}>
        {/* DESKTOP HERO (Figma spec) */}
        <div className="hidden lg:block relative mx-auto" style={{ width: '1340px', height: '622px', overflowX: 'hidden' }}>
          <div className="flex w-full h-full">
            {/* Left: Background image with gradient and product image */}
            <div className="relative" style={{ width: '600px', height: '622px' }}>
              {/* Background image with gradient overlay */}
              <div style={{ width: '620px', height: '622px', position: 'absolute', left: 0, top: 0, zIndex: 0, backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.25) 34%, rgba(0,0,0,0) 100%), url(/images/herobackground.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              {/* Product image on top */}
              <img
                src="/images/heroproduct.png"
                alt="CellTox Product"
                style={{ width: '366px', height: '462px', borderRadius: '12px', position: 'absolute', top: '70px', left: '127px', zIndex: 1, objectFit: 'cover' }}
              />
            </div>
            {/* Right: Content box */}
            <div style={{ width: '568px', height: '417.8px', position: 'absolute', top: '102px', left: '686px', display: 'flex', flexDirection: 'column', gap: '30px', zIndex: 2 }}>
              {/* Rating Row */}
              <div style={{ width: '224px', height: '22.8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '114px', minWidth: '114px', height: '22.8px', display: 'flex', alignItems: 'center' }}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="22.8" height="22.8" viewBox="0 0 24 24" fill="#FFAC07" style={{ marginRight: i < 4 ? '2px' : 0 }}><polygon points="12,2 15,9 22,9 17,14 18,21 12,17.5 6,21 7,14 2,9 9,9" /></svg>
                  ))}
                </div>
                <span style={{ width: '100px', height: '19px', fontFamily: 'Poppins, Arial, sans-serif', fontWeight: 400, fontSize: '18px', lineHeight: '19px', textAlign: 'center', verticalAlign: 'middle', display: 'inline-block' }}>4.8 out of 5</span>
              </div>
              {/* Title */}
              <h1 style={{
                marginTop: '1rem',
                paddingTop: '1rem',
                transform: 'scaleY(1.5)',
                fontFamily: 'Staatliches, Arial, sans-serif',
                fontWeight: 600,
                fontSize: '28px',
                lineHeight: '120%',
                width: '568px',
                height: '159px',
                letterSpacing: 0,
                verticalAlign: 'middle',
                color: 'rgb(34, 34, 34)',
                margin: 0
              }}>
                CELLTOX: THE <span style={{ color: '#7CBB70', fontWeight: 700 }}>NOBEL PRIZE-WINNING</span><br />FORMULA THAT'S HELPING <span style={{ color: '#7CBB70', fontWeight: 700 }}>THOUSANDS</span><br />FIGHT BACK AGAINST CANCER CELLS
              </h1>
              {/* Button */}
              <button style={{ width: '568px', height: '56px', gap: '10px', borderRadius: '8px', paddingTop: '16px', paddingRight: '24px', paddingBottom: '16px', paddingLeft: '24px', background: '#FF5E07', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer' }}>
                <span style={{ width: '119px', height: '24px', fontFamily: 'HarmoniaSansW01-Bold, Arial, sans-serif', fontWeight: 700, fontSize: '20px', lineHeight: '120%', letterSpacing: '0.6px', color: '#FFFFFF', textTransform: 'uppercase', verticalAlign: 'middle', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  SHOP NOW
                </span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {/* Description */}
              <div style={{ width: '568px', height: '120px', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '150%', color: '#000', letterSpacing: 0, verticalAlign: 'middle', margin: 0 }}>
                CellTox combines two powerful cancer-fighting compounds that work together to target abnormal cells while actually strengthening your immune system. This breakthrough formula delivers Nobel Prize-winning ivermectin and pharmaceutical-grade fenbendazole directly to where they're needed most.
              </div>
            </div>
          </div>
        </div>
        {/* MOBILE HERO (background from rating to button, everything overlays) */}
        <div className="block lg:hidden relative">
          {/* Background only from rating/title to button */}
          <div className="relative w-full">
            <div className="absolute inset-0 w-full h-full z-0" style={{backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.25) 34%, rgba(0,0,0,0) 100%), url(/images/herobackground.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
            <div className="relative z-10 px-2 pt-4 flex flex-col items-center" style={{ paddingBottom: '0.6rem' }}>
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-2 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    style={{
                      width: '17.65px',
                      height: '16.89px',
                      color: '#FFAC07',
                      fill: '#FFAC07',
                      position: 'relative',
                      top: '1.06px',
                      left: '0.68px',
                    }}
                  />
                ))}
                <span style={{color:'white'}} className="text-sm text-gray-600 mt-2 ml-1">4.8 out of 5</span>
              </div>
              {/* Title */}
              <h1 className="text-2xl sm:text-3xl font-bold leading-tight text-center mb-3 text-white drop-shadow-lg" style={{ marginTop: '1.5rem', transform: 'scaleY(1.5)', fontSize: '20px', lineHeight: '22px' }}>
                CELLTOX: THE <span style={{ color: '#B0FFA1', fontFamily: 'Staatliches-Regular, Arial, sans-serif', fontSize: '20px', fontWeight: 700, lineHeight: '22px', transform: 'scaleY(1.5)' }}>NOBEL PRIZE-WINNING</span>
                <br className="hidden sm:block" />
                FORMULA THAT'S HELPING <span style={{ color: '#B0FFA1', fontFamily: 'Staatliches, Arial, sans-serif', fontSize: '20px', fontWeight: 700, lineHeight: '22px', transform: 'scaleY(1.5)' }}>THOUSANDS</span>
                <br className="hidden sm:block" />
                FIGHT BACK AGAINST CANCER CELLS
              </h1>
              {/* Hero Product Image - larger */}
              <div className="mb-3 flex justify-center">
                <Image 
                  src="/images/heroproduct.png" 
                  alt="CellTox Product" 
                  width={360} 
                  height={333} 
                  style={{ width: '360px', height: '333px', borderRadius: '12px' }} 
                  className="shadow-xl mt-2" 
                  priority 
                />
              </div>
              {/* Shop Now Button */}
              <div className="mb-3 -mt-3 flex justify-center w-full block lg:hidden">
                <Button
                  className="flex items-center justify-center"
                  style={{
                    width: '320px',
                    height: '50px',
                    gap: '10px',
                    paddingTop: '16px',
                    paddingRight: '0px',
                    paddingBottom: '16px',
                    paddingLeft: '20px',
                    borderRadius: '8px',
                    background: '#FF5E07',
                  }}
                >
                  <span
                    style={{
                      width: '109px',
                      height: '24px',
                      fontFamily: 'HarmoniaSansW01-Bold, Arial, sans-serif',
                      fontWeight: 600,
                      fontSize: '18px',
                      lineHeight: '120%',
                      letterSpacing: '0.6px',
                      color: '#FFFFFF',
                      textTransform: 'uppercase',
                      verticalAlign: 'middle',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                      
                    }}
                  >
                    SHOP NOW
                  </span >
                  <svg style={{ marginLeft:'-8px'}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Button>
              </div>
            </div>
          </div>
          {/* Description below background image - new frame with two subframes for mobile only */}
          <div className="relative z-10 px-2 pb-6 flex flex-col items-center sm:hidden" style={{ width: '360px', background: '#FFFFFF' }}>
            {/* First frame */}
            <div style={{ width: '320px', height: '108px', marginTop: '30px', marginLeft: '-15px' }}>
              <p style={{
                fontFamily: 'HarmoniaSansW01-Regular, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '27px',
                letterSpacing: '0px',
                color: '#000000',
                verticalAlign: 'middle',
                textAlign: 'left',
                margin: 0,
              }}>
                CellTox combines two powerful cancer-fighting compounds that work together to target abnormal cells while actually strengthening your immune system.
              </p>
            </div>
            {/* Second frame */}
            <div style={{ width: '320px', height: '108px',  marginTop: '10px', marginLeft: '-15px' }}>
              <p style={{
                fontFamily: 'HarmoniaSansW01-Regular, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '27px',
                letterSpacing: '0px',
                color: '#000000',
                verticalAlign: 'middle',
                textAlign: 'left',
                margin: 0,
              }}>
                This breakthrough formula delivers Nobel Prize-winning ivermectin and pharmaceutical-grade fenbendazole directly to where they're needed most.
              </p>
            </div>
            {/* Trust Bar after hero description (mobile only) */}
            <div className="w-full flex justify-center items-center  bg-white mt-8 block lg:hidden">
              <img 
                src="/images/Frame 51.png" 
                alt="Trust Badges" 
                style={{ height: '122px', width: '328px', objectFit: 'contain', marginTop:'-20px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits, Testimonial, and Collapsible Section - Mobile/Tablet Only (restored) */}
      <section className="py-6 sm:py-8 bg-white block lg:hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 gap-4">
            {/* Feature List + Testimonial Card */}
            <div className=''>
              {/* Feature List */}
              <div className="bg-gray-50 rounded-lg" style={{marginTop:'-50px'}}>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span style={{ width: '15px', height: '15px', background: '#20C500', borderRadius: '4px', marginTop: '5.02px', marginLeft: '0.5px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 4.5L5 7L9 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{ color: '#000', fontFamily: 'HarmoniaSansW01-Bold, Arial, sans-serif', fontWeight: 700, fontSize: '17px', lineHeight: '130%', letterSpacing: '0px', verticalAlign: 'middle' }}>
                      Nobel Prize-winning compounds ivermectin and fenbendazole work together to target abnormal cells at their source
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span style={{ width: '15px', height: '15px', background: '#20C500', borderRadius: '4px', marginTop: '5.02px', marginLeft: '0.5px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 4.5L5 7L9 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{ color: '#000', fontFamily: 'HarmoniaSansW01-Bold, Arial, sans-serif', fontWeight: 700, fontSize: '17px', lineHeight: '130%', letterSpacing: '0px', verticalAlign: 'middle' }}>
                      Clinically-researched ingredients shown to selectively target cancer cells while protecting healthy tissue
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span style={{ width: '15px', height: '15px', background: '#20C500', borderRadius: '4px', marginTop: '5.02px', marginLeft: '0.5px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 4.5L5 7L9 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{ color: '#000', fontFamily: 'HarmoniaSansW01-Bold, Arial, sans-serif', fontWeight: 700, fontSize: '17px', lineHeight: '130%', letterSpacing: '0px', verticalAlign: 'middle' }}>
                      Users report increased energy, better sleep, and improved quality of life within weeks of starting
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span style={{ width: '15px', height: '15px', background: '#20C500', borderRadius: '4px', marginTop: '5.02px', marginLeft: '0.5px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 4.5L5 7L9 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{ color: '#000', fontFamily: 'HarmoniaSansW01-Bold, Arial, sans-serif', fontWeight: 700, fontSize: '17px', lineHeight: '130%', letterSpacing: '0px', verticalAlign: 'middle' }}>
                      Made in an FDA-registered facility with pharmaceutical-grade ingredients for guaranteed purity
                    </span>
                  </div>
                </div>
              </div>
              {/* Testimonial Card */}
              <div className="w-full flex justify-center" style={{marginTop:'15px'}}>
                <div className="max-w-md w-full rounded-2xl border-2 border-[#20C500] p-2 sm:p-6 relative overflow-hidden" style={{ background: '#F0FFED', boxShadow: '0 2px 12px 0 rgba(32,197,0,0.05)', paddingBottom: 0 }}>
                  {/* Star Rating */}
                  <div className="flex justify-center mb-3 z-10 relative">
                    <img src="/images/testominal rating.png" alt="Testimonial Rating" style={{ width: '95px', height: '19px', objectFit: 'contain' }} />
                  </div>
                  {/* Image with large leaves */}
                  <div className="flex justify-center mb-4 z-10 relative" style={{ minHeight: '250px' }}>
                    {/* Left leaf remains top left */}
                    <img src="/images/falling-green-leaves-natures-graceful-dance 2.png" alt="" className="absolute -left-8 top-0 w-48 h-48 object-contain z-10" style={{ maxWidth: '60%', maxHeight: '100%' }} />
                    {/* Move right leaf much larger, further up, and more right */}
                    <img src="/images/falling-green-leaves-natures-graceful-dance 2.png" alt="" className="absolute -top-12 right-[-56px] w-72 h-72 object-contain z-10" style={{ maxWidth: '90%', maxHeight: '140%' }} />
                    <img src="/images/afterherosectionimage.jpg" alt="Happy couple testimonial" className="w-full max-w-xs h-48 object-cover rounded-xl border-2 border-[#20C500] relative z-20" />
                  </div>
                  {/* Testimonial Text */}
                  <blockquote className="text-lg font-bold text-center text-black" style={{ lineHeight: '1.2', fontSize: '1rem', marginTop: '-60px', marginBottom: 0 }}>
                    "Within a few months, my energy returned, my pain decreased, and my latest scans showed remarkable improvement. This formula gave me my life back."
                  </blockquote>
                  {/* Footer */}
                  <div className="flex justify-center items-center gap-2 text-center" style={{ marginBottom: 0,  marginTop: 0, paddingTop: '0.35rem', paddingBottom: '0.35rem' }}>
                    <span className="text-base font-semibold text-black" style={{ fontSize: '12px' }}>– John S.,</span>
                    <img src="/images/afterherosectionverifytick.png" alt="Verified Tick" style={{ width: '14px', height: '14px', objectFit: 'contain', display: 'inline-block', verticalAlign: 'middle' }} />
                    <span className="text-base font-semibold text-black" style={{ fontSize: '12px' }}>Verified Buyer</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Collapsible Sections */}
            <div className="flex flex-col gap-4" style={{ marginLeft: '-16px', marginRight: '-16px', width: 'calc(100% + 32px)' }}>
              <Collapsible open={productDetailsOpen} onOpenChange={setProductDetailsOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full px-4 transition-colors text-left  " style={{ borderBottom: '1px solid #E8E8E8' }}>
                  <span style={{ fontFamily: 'Staatliches, arial', fontWeight: 800, transform: 'scaleY(1.6)', fontSize: '11px', marginBottom: '12px' }}>
                    PRODUCT DETAILS
                  </span>
                  <ChevronDown className={`transition-transform ${productDetailsOpen ? 'rotate-180' : ''}`} style={{ width: '28px', height: '28px', marginBottom: '12px'  }} />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-white border-x border-b text-sm text-gray-700 rounded-b-lg">
                  CellTox contains pharmaceutical-grade ivermectin and fenbendazole, two compounds that have shown remarkable results in targeting abnormal cell growth while supporting healthy immune function.
                </CollapsibleContent>
              </Collapsible>
              <Collapsible open={benefitsOpen} onOpenChange={setBenefitsOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full px-4 transition-colors text-left" style={{ borderBottom: '1px solid #E8E8E8' }}>
                  <span style={{ fontFamily: 'Staatliches, arial', fontWeight: 800, transform: 'scaleY(1.6)', fontSize: '11px', marginBottom: '12px' }}>
                    BENEFITS
                  </span>
                  <ChevronDown className={`transition-transform ${benefitsOpen ? 'rotate-180' : ''}`} style={{ width: '28px', height: '28px', marginBottom: '12px' }} />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-white border-x border-b rounded-b-lg">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span>Targets abnormal cell growth</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span>Supports immune system function</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span>Increases energy levels</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span>Improves overall well-being</span>
                    </li>
                  </ul>
                </CollapsibleContent>
              </Collapsible>
              <Collapsible open={shippingOpen} onOpenChange={setShippingOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full px-4 transition-colors text-left" style={{ borderBottom: '1px solid #E8E8E8' }}>
                  <span style={{ fontFamily: 'Staatliches, arial', fontWeight: 800, transform: 'scaleY(1.6)', fontSize: '11px', marginBottom: '12px' }}>
                    SHIPPING TIMES
                  </span>
                  <ChevronDown className={`transition-transform ${shippingOpen ? 'rotate-180' : ''}`} style={{ width: '28px', height: '28px', marginBottom: '12px' }} />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-white border-x border-b text-sm text-gray-700 rounded-b-lg">
                  <div className="space-y-1">
                    <p><strong>Standard Shipping:</strong> 5-7 business days</p>
                    <p><strong>Express Shipping:</strong> 2-3 business days</p>
                    <p><strong>Overnight Shipping:</strong> 1 business day</p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
              {/* Important Notice */}
              <div className="px-4 bg-white border border-white rounded-lg" style={{ borderBottom: '1px solid #E8E8E8', marginBottom: '15px', paddingBottom: '15px' }}>
                <h3 style={{ fontFamily: 'Staatliches, arial', fontWeight: 800, transform: 'scaleY(1.6)', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', background: '#FFF5F5', marginRight: '8px' }}>
                    <img src="/images/ExclamationMark.png" alt="Exclamation Mark" style={{ width: '20px', height: '10px' }} />
                  </span>
                  IMPORTANT NOTICE
                </h3>
                <p className="text-xs text-gray-700 mb-2" style={{ marginTop: '12px', fontFamily: 'HarmoniaSansW01-Regular', fontWeight: 400, fontSize: '16px', lineHeight: '130%', letterSpacing: '0.6px', verticalAlign: 'middle' }}>
                  CellTox is sold exclusively through this official website. Beware of imitations on Amazon, eBay, and other platforms — these sellers are NOT affiliated with CellTox.
                </p>
                <p className="text-xs text-gray-700" style={{ marginTop: '12px', fontFamily: 'HarmoniaSansW01-Regular', fontWeight: 400, fontSize: '16px', lineHeight: '130%', letterSpacing: '0.6px', verticalAlign: 'middle' }}>
                  Counterfeit products, often shipped from China, do not offer the same safe and effective formulation. For guaranteed quality, safety, and results, purchase directly from this official website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid - Desktop Only, Exact Match */}
      <section className="py-8 bg-white hidden lg:block">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gray-50 rounded-lg p-6" style={{ border: '1px solid #168B00' }}>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span style={{ width: '15px', height: '15px', background: '#20C500', borderRadius: '4px', marginTop: '5.02px', marginLeft: '0.5px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 4.5L5 7L9 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span style={{ color: '#000', fontFamily: 'HarmoniaSansW01-Bold, Arial, sans-serif', fontWeight: 700, fontSize: '17px', lineHeight: '130%', letterSpacing: '0px', verticalAlign: 'middle' }}>
                    Nobel Prize-winning compounds ivermectin and fenbendazole work together to target abnormal cells at their source
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span style={{ width: '15px', height: '15px', background: '#20C500', borderRadius: '4px', marginTop: '5.02px', marginLeft: '0.5px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 4.5L5 7L9 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span style={{ color: '#000', fontFamily: 'HarmoniaSansW01-Bold, Arial, sans-serif', fontWeight: 700, fontSize: '17px', lineHeight: '130%', letterSpacing: '0px', verticalAlign: 'middle' }}>
                    Clinically-researched ingredients shown to selectively target cancer cells while protecting healthy tissue
                  </span>
                </div>
              </div>
              {/* Right Column */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span style={{ width: '15px', height: '15px', background: '#20C500', borderRadius: '4px', marginTop: '5.02px', marginLeft: '0.5px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 4.5L5 7L9 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span style={{ color: '#000', fontFamily: 'HarmoniaSansW01-Bold, Arial, sans-serif', fontWeight: 700, fontSize: '17px', lineHeight: '130%', letterSpacing: '0px', verticalAlign: 'middle' }}>
                    Users report increased energy, better sleep, and improved quality of life within weeks of starting
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span style={{ width: '15px', height: '15px', background: '#20C500', borderRadius: '4px', marginTop: '5.02px', marginLeft: '0.5px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 4.5L5 7L9 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span style={{ color: '#000', fontFamily: 'HarmoniaSansW01-Bold, Arial, sans-serif', fontWeight: 700, fontSize: '17px', lineHeight: '130%', letterSpacing: '0px', verticalAlign: 'middle' }}>
                    Made in an FDA-registered facility with pharmaceutical-grade ingredients for guaranteed purity
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial and Collapsible Section - Desktop Only, Exact Match */}
      <section className="py-8 bg-white hidden lg:block" style={{ overflow: 'hidden' }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid lg:grid-cols-2" style={{ gap: '0.8rem', overflow: 'visible' }}>
            {/* Left Side - Testimonial Card */}
            <div className="relative" style={{ width: '520px', overflow: 'hidden', marginLeft:'-100px' }}>
              <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center" style={{ border: '3px solid #168B00', backgroundColor: '#F0FFED', width: '500px', height: '400px', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
                {/* Leaf Images - desktop only, left: -50px, right: top -20px, large sizes, left leaf z-index -1 */}
                <img src="/images/falling-green-leaves-natures-graceful-dance 2.png" alt="" className="absolute" style={{ top: '300px', left: '-70px', width: '170px', height: '170px', objectFit: 'contain', zIndex: -1 }} />
                <img src="/images/falling-green-leaves-natures-graceful-dance 2.png" alt="" className="absolute z-10" style={{ top: '-80px', right: '-80px', width: '250px', height: '250px', objectFit: 'contain' }} />
                {/* Star Rating Top Center */}
                <div className="flex justify-center mb-3 z-10 relative mt-4">
                  <img src="/images/testominal rating.png" alt="Testimonial Rating" style={{ width: '95px', height: '19px', objectFit: 'contain' }} />
                </div>
                {/* Testimonial Image with green border and rounded corners */}
                <div className="flex justify-center mb-4 z-10 relative" style={{ minHeight: '250px' }}>
                  <img src="/images/afterherosectionimage.jpg" alt="Happy couple testimonial" style={{ border: '2px solid #168B00', background: '#CECECE', borderRadius: '12px', width: '29rem', height: '14rem', objectFit: 'cover' }} />
                </div>
                {/* Testimonial Text */}
                <blockquote className="text-lg font-bold text-center text-black" style={{ lineHeight: '1.2', fontSize: '1.1 rem', marginTop: '-35px', marginBottom: '0px' }}>
                  "Within a few months, my energy returned, my pain decreased, and my latest scans showed remarkable improvement. This formula gave me my life back."
                </blockquote>
                {/* Footer */}
                <div className="flex justify-center items-center gap-2 text-center" style={{ marginBottom: 0, marginTop: 0, paddingTop: '0.35rem', paddingBottom: '0.35rem' }}>
                  <span className="text-base font-semibold text-black" style={{ fontSize: '12px' }}>– John S.,</span>
                  <img src="/images/afterherosectionverifytick.png" alt="Verified Tick" style={{ width: '14px', height: '14px', objectFit: 'contain', display: 'inline-block', verticalAlign: 'middle' }} />
                  <span className="text-base font-semibold text-black" style={{ fontSize: '12px' }}>Verified Buyer</span>
                </div>
              </div>
            </div>

            {/* Right Side - Collapsible Sections */}
            <div className="space-y-2 " style={{marginRight:'-5rem'}}>
              <Collapsible open={productDetailsOpen} onOpenChange={setProductDetailsOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full px-2 transition-colors text-left " style={{ borderBottom: '1px solid #E8E8E8' }}>
                  <span  style={{fontFamily: 'Staatliches, arial', fontWeight: '800', transform: 'scaleY(1.6)', fontSize: '11px', marginBottom: '15px' }}>
                    PRODUCT DETAILS
                  </span>
                  <ChevronDown className={`transition-transform ${productDetailsOpen ? 'rotate-180' : ''}`} style={{ width: '28px', height: '28px', marginBottom: '13px' }} />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-white border-x border-b text-sm text-gray-700 rounded-b-lg">
                  CellTox contains pharmaceutical-grade ivermectin and fenbendazole, two compounds that have shown remarkable results in targeting abnormal cell growth while supporting healthy immune function.
                </CollapsibleContent>
              </Collapsible>

              <Collapsible open={benefitsOpen} onOpenChange={setBenefitsOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full px-2 transition-colors text-left" style={{ borderBottom: '1px solid #E8E8E8' }}>
                  <span style={{ fontFamily: 'Staatliches, arial', fontWeight: 800, transform: 'scaleY(1.6)', fontSize: '11px', marginBottom: '13px', marginTop: '8px' }}>
                    BENEFITS
                  </span>
                  <ChevronDown className={`transition-transform ${benefitsOpen ? 'rotate-180' : ''}`} style={{ width: '28px', height: '28px', marginBottom: '13px', marginTop: '8px' }} />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-white border-x border-b rounded-b-lg">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span>Targets abnormal cell growth</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span>Supports immune system function</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span>Increases energy levels</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span>Improves overall well-being</span>
                    </li>
                  </ul>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible open={shippingOpen} onOpenChange={setShippingOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full px-2 transition-colors text-left" style={{ borderBottom: '1px solid #E8E8E8' }}>
                  <span style={{ fontFamily: 'Staatliches, arial', fontWeight: 800, transform: 'scaleY(1.6)', fontSize: '11px', marginBottom: '13px', marginTop: '8px' }}>
                    SHIPPING TIMES
                  </span>
                  <ChevronDown className={`transition-transform ${shippingOpen ? 'rotate-180' : ''}`} style={{ width: '28px', height: '28px', marginBottom: '13px', marginTop: '8px' }} />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-white border-x border-b text-sm text-gray-700 rounded-b-lg">
                  <div className="space-y-1">
                    <p><strong>Standard Shipping:</strong> 5-7 business days</p>
                    <p><strong>Express Shipping:</strong> 2-3 business days</p>
                    <p><strong>Overnight Shipping:</strong> 1 business day</p>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* Important Notice */}
              <div className="px-4 bg-white border border-white rounded-lg" style={{ borderBottom: '1px solid #F0FFED', marginBottom: '15px', paddingBottom: '15px', marginTop: '25px' }}>
                <h3 style={{ fontFamily: 'Staatliches, arial', fontWeight: 800, transform: 'scaleY(1.6)', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', background: '#FFF5F5', marginRight: '8px' }}>
                    <img src="/images/ExclamationMark.png" alt="Exclamation Mark" style={{ width: '25px', height: '15px' }} />
                  </span>
                  IMPORTANT NOTICE
                </h3>
                <p className="text-xs text-gray-700 mb-2" style={{ marginTop: '22px', fontFamily: 'HarmoniaSansW01-Regular', fontWeight: 400, fontSize: '16px', lineHeight: '130%', letterSpacing: '0.6px', verticalAlign: 'middle' }}>
                  CellTox is sold exclusively through this official website. Beware of imitations on Amazon, eBay, and other platforms — these sellers are NOT affiliated with CellTox.
                </p>
                <p className="text-xs text-gray-700" style={{paddingBottom:'15px', marginTop: '22px', fontFamily: 'HarmoniaSansW01-Regular', fontWeight: 400, fontSize: '16px', lineHeight: '130%', letterSpacing: '0.6px', verticalAlign: 'middle' }}>
                  Counterfeit products, often shipped from China, do not offer the same safe and effective formulation. For guaranteed quality, safety, and results, purchase directly from this official website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three-Stage Process - Responsive Timeline */}
      <section className="py-12 sm:py-16 from-green-50 overflow-hidden" style={{background: '#F0FFED'}}>
        <div className="max-w-6xl mx-auto px-4 relative">
          {/* Large top left leaf, 30% visible in section */}
          {/* Removed green leaf image for desktop version */}
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12" style={{ fontSize:'18px', transform: 'scaleY(1.3)', fontWeight: '700', fontFamily: 'Staatliches, arial, serif'}}>
              <h2 className=" sm:text-3xl text-gray-900 leading-tight">
                THE <span style={{ color: '#20C500', transform: 'scaleY(1.2)', letterSpacing: '-0.5px' }}>POWERFUL THREE-STAGE PROCESS</span> THAT MAKES CELLTOX
                
                DIFFERENT FROM ANY OTHER FORMULA
              </h2>
            </div>

            {/* Timeline Container */}
            <div className="relative max-w-5xl mx-auto">
              {/* MOBILE VERSION ONLY: Stages as toggles with always-visible image, title row with chevron, and description in a card, using timeline structure from previous code */}
              <div className="block lg:hidden relative" style={{ background: '#F0FFED', borderRadius: '18px' }}>
                {/* Single vertical line on the left, absolutely positioned */}
                <div className="absolute left-2 top-4 bottom-0 w-0.5" style={{zIndex: 0, backgroundColor: '#000 '}}></div>
                <div className="relative z-10">
                  {[{
                    titleGreen: 'FIRST STAGE:',
                    titleRest: ' INITIAL SUPPORT PHASE',
                    description: (
                      <>
                        <p style={{marginBottom:'5px'}}>The moment you start your CellTox protocol, a remarkable process begins.</p>
                        <p style={{marginTop:'12px'}}>During the first 10 days, the ivermectin compound begins supporting your body's natural processes while fenbendazole complements these effects.</p>
                        <div style={{fontFamily:'HarmoniaSansW01-Bold, sens-serif', fontWeight:'bold', fontSize:'17px', color:'black', marginTop:'13px'}}>Many users report <span style={{color:'#20C500'}}>feeling more energetic</span> as their bodies start to <span style={{color:'#20C500'}}>strengthen natural defense mechanisms</span> against abnormal cells.</div>
                        <p style={{marginTop:'15px'}}>This dual-action approach works at the cellular level where conventional treatments often struggle.</p>
                      </>
                    ),
                    img: '/images/stage1.jpg',
                    imgAlt: 'Initial support phase',
                    defaultOpen: true,
                    cardHeight: 370,
                  }, {
                    titleGreen: 'REST PERIOD:',
                    titleRest: ' OPTIMIZATION PHASE',
                    description: (
                      <>
                        <p>After the initial support phase, your body enters a critical period of adjustment and enhancement.</p>
                        <p style={{marginTop:'10px'}}>During this time, the powerful combination of ivermectin and fenbendazole continues to work, allowing your system to recharge and optimize its natural defense mechanisms.</p>
                        <div style={{fontWeight:'bold', color:'#000', fontSize:'17px', marginTop:'10px', fontFamily:'HarmoniaSansW01-Bold, sans-serif'}}>Many users notice <span style={{color:'#20C500'}}>sustained energy levels </span> and a greater sense of <span style={{color:'#20C500'}}> well-being as their bodies</span> further adapt to the detox process.</div>
                        <p style={{marginTop:'10px'}}>This essential phase ensures that your body maintains its progress, reinforcing resilience at the cellular level where traditional methods often fall short.</p>
                      </>
                    ),
                    img: '/images/stage2.jpg',
                    imgAlt: 'Couple enjoying better health',
                    defaultOpen: false,
                    cardHeight: 420,
                  }, {
                    titleGreen: 'FINAL STAGE:',
                    titleRest: ' CONTINUED SUPPORT',
                    description: (
                      <>
                        <p>As your body completes the detox process, the focus shifts to long-term maintenance and resilience. This phase ensures that the benefits achieved during the initial stages are sustained over time.</p> 
                        <div style={{fontWeight:'500', color:'#000', fontSize:'17px', marginTop:'8px'}}><span style={{color:'#20C500'}}>By continuing to reinforce natural</span> defense mechanisms, your system remains strong and protected against future imbalances.
                        <span style={{color:'#20C500', fontFamily:'sans-serif HarmoniaSansW01-Bold'}}>Many users </span>experience enhanced vitality, improved overall wellness, and <span style={{color:'#20C500'}}>long-lasting energy levels</span>.</div>
                        <p style={{marginTop:'8px'}}>This final stage helps establish a stable foundation for optimal health and continue feeling your best.</p>
                      </>
                    ),
                    img: '/images/stage3.jpg',
                    imgAlt: 'Healthy active lifestyle',
                    defaultOpen: false,
                    cardHeight: 410,
                  }].map((stage, idx) => (
                    <div className="relative mb-10" key={idx}>
                      {/* Dot, perfectly centered on the line */}
                      <div className="absolute left-2 top-4 transform -translate-x-1/2 rounded-full z-10" style={{ width: '24px', height: '24px', background: '#000', border: '6px solid #20C500' }}></div>
                      {/* Content offset to the right of the timeline column */}
                      <div className="ml-7">
                        <MobileStageToggle
                          titleGreen={stage.titleGreen}
                          titleRest={stage.titleRest}
                          description={stage.description}
                          img={stage.img}
                          imgAlt={stage.imgAlt}
                          defaultOpen={stage.defaultOpen}
                          cardHeight={stage.cardHeight}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop Timeline (center) */}
              <div className="hidden lg:block">
                {/* Central Vertical Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-0.5" style={{backgroundColor: '#000', height: 'calc(100% - 660px)'}}></div>

                {/* Stage 1 - Left Side */}
                <div className="relative mb-16">
                  {/* Black Dot with Green Border */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 rounded-full z-10" style={{ width: '24px', height: '24px', background: '#000', border: '6px solid #20C500' }}></div>
                  {/* Content Box - Left Side */}
                  <div className="w-1/2 pr-8">
                    <div className="mb-4" style={{fontFamily:'Staatliches, arial, serif',transform: 'scaleY(1.5)',  fontWeight:'800', fontSize:'22px', letterSpacing:'0px'}}>
                          <span className="  px-3 py-1 font-bold uppercase " style={{ color: '#20C500', fontSize:'17px' }}>FIRST STAGE:</span>
                          <span className="  uppercase" style={{ color: '#000', fontSize:'17px' }}>INITIAL SUPPORT PHASE</span>
                        </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-6" style={{}}>
                      
                      <div className="  space-y-3" style={{fontFamily:'HarmoniaSansW01-Regular', fontSize:'17px'}}>
                        <p>The moment you start your CellTox protocol, a remarkable process begins.</p>
                        <p>During the first 10 days, the ivermectin compound begins supporting your body's natural processes while fenbendazole complements these effects.</p>
                        <p style={{fontWeight:'bold', color:'#000', fontSize:'18px', fontFamily:'HarmoniaSansW01-Bold, sans-serif'}}>Many users report <span style={{color:'#20C500'}}>feeling more energetic </span> as their bodies start to <span style={{color:'#20C500'}}>re-establish natural defense mechanisms</span> against abnormal cells.</p>
                        <p>This dual-action approach works at the cellular level where conventional treatments often struggle.</p>
                      </div>
                    </div>
                    {/* Image below content box for Stage 1 */}
                    <div className="mt-4" >
                      <img 
                        src="/images/stage1dk.jpg" 
                        alt="Initial support phase"
                        className="w-full  object-cover rounded-lg border-2"
                        style={{ border: '3px solid #20C500', height:'227px' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Stage 2 - Right Side, staggered to start higher */}
                <div className="relative mb-16 lg:-mt-64">
                  {/* Black Dot with Green Border */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 rounded-full z-10" style={{ width: '24px', height: '24px', background: '#000', border: '6px solid #20C500' }}></div>
                  {/* Content Box - Right Side */}
                  <div className="w-1/2 ml-auto pl-8">
                  <div className="mb-4" style={{fontFamily:'Staatliches, arial, serif',transform: 'scaleY(1.5)',  fontWeight:'800', fontSize:'22px', letterSpacing:'0px'}}>
                          <span className="  px-3 py-1 font-bold uppercase " style={{ color: '#20C500', fontSize:'17px' }}>REST PERIOD:</span>
                          <span className="  uppercase" style={{ color: '#000', fontSize:'17px' }}>OPTIMIZATION PHASE</span>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-6" style={{}}>
                      
                      <div className="  space-y-3" style={{fontFamily:'HarmoniaSansW01-Regular', fontSize:'17px'}}>
                        <p>After the initial support phase, your body enters a critical period of adjustment and enhancement.</p>
                        <p>During this time, the powerful combination of ivermectin and fenbendazole continues to work, allowing your system to recharge and optimize its natural defense mechanisms.</p>
                        <p style={{fontWeight:'bold', color:'#000', fontSize:'18px', fontFamily:'HarmoniaSansW01-Bold, sans-serif'}}>Many users notice <span style={{color:'#20C500'}}>sustained energy levels and</span> a greater sense of well-being <span style={{color:'#20C500'}}>re-establish natural defense mechanisms and</span> as their bodies further adapt to the detox process.</p>
                        <p>This essential phase ensures that your body maintains its progress, reinforcing resilience at the cellular level where traditional methods often fall short.</p>
                      </div>
                    </div>
                  
                    {/* Image below content box for Stage 2 */}
                    <div className="mt-4" style={{ marginTop: '20px' }}>
                      <img 
                        src="/images/stage2dk.jpg" 
                        alt="Couple enjoying better health"
                        className="w-full  object-cover rounded-lg border-2"
                        style={{ border: '3px solid #20C500', height:'227px' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Stage 3 - Left Side, staggered to start higher */}
                <div className="relative mb-16 lg:-mt-64">
                  {/* Black Dot with Green Border */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 rounded-full z-10 " style={{ width: '24px', height: '24px', background: '#000', border: '6px solid #20C500' }}></div>
                  {/* Content Box - Left Side */}
                  <div className="w-1/2 pr-8">
                  <div className="mb-4" style={{fontFamily:'Staatliches, arial, serif',transform: 'scaleY(1.5)',  fontWeight:'800', fontSize:'22px', letterSpacing:'0px'}}>
                          <span className="  px-3 py-1 font-bold uppercase " style={{ color: '#20C500', fontSize:'17px' }}>FINAL STAGE:</span>
                          <span className="  uppercase" style={{ color: '#000', fontSize:'17px' }}>CONTINUED SUPPORT</span>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-6" style={{}}>
                      
                      <div className="  space-y-3" style={{fontFamily:'HarmoniaSansW01-Regular', fontSize:'17px'}}>
                        <p>As your body completes the detox process, the focus shifts to long-term maintenance and resilience. This phase ensures that the benefits achieved during the initial stages are sustained over time</p>
                        <p style={{fontWeight:'bold', color:'#000', fontSize:'18px', fontFamily:'HarmoniaSansW01-Bold, sans-serif'}}>By continuing to <span style={{color:'#20C500'}}>reinforce natural defense mechanisms </span> , your system remains strong and protected against future imbalances.<span style={{color:'#20C500'}}> Many users experience</span> enhanced vitality, improved overall wellness, and long-lasting energy levels.</p>
                        <p>This final stage helps establish a stable foundation for optimal health, allowing you to maintain the results and continue feeling your best.</p>
                      </div>
                    </div>

                    {/* Single image below content box for Stage 3 */}
                    <div className="mt-4" style={{ marginTop: '20px' }}>
                      <img 
                        src="/images/stage3dk.jpg" 
                        alt="Healthy active lifestyle"
                        className="w-full  object-cover rounded-lg border-2"
                        style={{ border: '3px solid #20C500', height:'227px' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shop Now Button - ONLY ONE BUTTON */}
            <div className="text-center mt-8 sm:mt-12">
              <Button
                className="w-full sm:w-auto"
                style={{
                  width: '100%',
                  maxWidth: '564px',
                  height: '56px',
                  gap: '10px',
                  borderRadius: '8px',
                  paddingTop: '16px',
                  paddingRight: '24px',
                  paddingBottom: '16px',
                  paddingLeft: '24px',
                  background: '#FF5E07',
                  margin: '0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                SHOP NOW 
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Science Behind CellTox Section - Desktop Only */}
      <div className="hidden lg:block">
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-4" style={{ fontFamily: 'Staatliches, arial', transform: 'scaleY(1.25)' }}>
                THE <span style={{ color: '#20C500' }}>SCIENCE</span> BEHIND HOW CELLTOX WORKS <span style={{ color: '#20C500' }}>AGAINST CANCER</span> CELLS
              </h2>
              <p className="text-gray-600 mt-5 text-sm max-w-3xl mx-auto" style={{fontSize:'20px'}}>
                When cancer develops in your body, it exploits three critical,<br />
                <span style={{display:'block', marginTop:'9px'}}>vulnerabilities in your cellular system:</span>
              </p>
            </div>

            {/* Three Icons Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {/* Icon 1 - ENERGY THEFT */}
              <div className="flex flex-row md:flex-col items-center md:items-center text-left md:text-center">
                {/* Image: always first on desktop, right on mobile */}
                <div className="flex-shrink-0 md:mb-4 ml-3 md:ml-0 order-2 md:order-1 flex items-center justify-center" style={{width:'130px',height:'140px'}}>
                  <img
                    src="/images/cancer-development-cell1.png"
                    alt="Normal Cell"
                    className="w-full h-full object-contain rounded-full border border-green-200 bg-white"
                    style={{width:'130px',height:'140px'}}
                  />
                </div>
                {/* Left: Number, Title, Description (desktop only) */}
                <div className="flex-1 flex flex-col justify-center md:items-center order-1 md:order-2 ml-2 md:ml-0" style={{marginLeft: '45px', marginTop:'30px'}}>
                  <div style={{ textAlign: 'left' }}>
                    <div className="flex items-center mb-1">
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: '#20C500',
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '12px',
                        marginRight: '8px',
                        fontFamily: 'Poppins',
                        lineHeight: '120%'
                      }}>1</span>
                      <span style={{
                        fontFamily: 'Staatliches, arial',
                        fontWeight: 700,
                        fontSize: '18px',
                        lineHeight: '120%',
                        letterSpacing: 0,
                        color: '#222'
                      }}>ENERGY THEFT</span>
                  </div>
                    <p style={{
                      fontFamily: 'HarmoniaSansW01-Regular',
                      fontWeight: 400,
                      fontSize: '20px',
                      lineHeight: '150%',
                      letterSpacing: 0,
                      color: '#222',
                      marginBottom: 0,
                      textAlign: 'left'
                    }}>
                    Cancer cells hijack your body's energy production, consuming up to 200 times more glucose than normal cells. This energy theft not only fuels their growth but leaves healthy cells starving.
                  </p>
                  </div>
                </div>
              </div>
              {/* Icon 2 - IMMUNE EVASION */}
              <div className="flex flex-row md:flex-col items-center md:items-center text-left md:text-center">
                <div className="flex-shrink-0 md:mb-4 ml-3 md:ml-0 order-2 md:order-1 flex items-center justify-center" style={{width:'143px',height:'140px'}}>
                  <img
                    src="/images/cancer-development-cell2.png"
                    alt="Cancer Cell Genetic Changes"
                    className="w-full h-full object-contain rounded-full border border-green-200 bg-white"
                    style={{width:'143px',height:'140px'}}
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center order-1 md:order-2 ml-2 md:ml-0" style={{marginLeft: '15px', marginTop:'30px'}}>
                  <div style={{ textAlign: 'left' }}>
                    <div className="flex items-center mb-1">
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: '#20C500',
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '12px',
                        marginRight: '8px',
                        fontFamily: 'Poppins',
                        lineHeight: '120%'
                      }}>2</span>
                      <span style={{ fontFamily: 'Staatliches, arial', fontWeight: 700, fontSize: '18px', lineHeight: '120%', letterSpacing: 0, color: '#222' }}>IMMUNE EVASION</span>
                  </div>
                    <p style={{ fontFamily: 'HarmoniaSansW01-Regular', fontWeight: 400, fontSize: '20px', lineHeight: '150%', letterSpacing: 0, color: '#222', marginBottom: 0, textAlign: 'left' }}>
                    Cancer cells develop sophisticated methods to hide from your immune system, creating proteins that act like "invisibility cloaks" and preventing your natural defenses from recognizing and eliminating them.
                  </p>
                  </div>
                </div>
              </div>
              {/* Icon 3 - RAPID MULTIPLICATION */}
              <div className="flex flex-row md:flex-col items-center md:items-center text-left md:text-center">
                <div className="flex-shrink-0 md:mb-4 ml-3 md:ml-0 order-2 md:order-1 flex items-center justify-center" style={{width:'158px',height:'140px'}}>
                  <img
                    src="/images/cancer-development-cell3.png"
                    alt="Malignant Cancer Cells"
                    className="w-full h-full object-contain rounded-full border border-green-200 bg-white"
                    style={{width:'158px',height:'140px'}}
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center order-1 md:order-2 ml-2 md:ml-0" style={{marginLeft: '15px', marginTop:'-28px'}}>
                  <div style={{ textAlign: 'left' }}>
                    <div className="flex items-center mb-1">
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: '#20C500',
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '12px',
                        marginRight: '8px',
                        fontFamily: 'Poppins',
                        lineHeight: '120%'
                      }}>3</span>
                      <span style={{ fontFamily: 'Staatliches, arial', fontWeight: 700, fontSize: '18px', lineHeight: '120%', letterSpacing: 0, color: '#222' }}>RAPID MULTIPLICATION</span>
                  </div>
                    <p style={{ fontFamily: 'HarmoniaSansW01-Regular', fontWeight: 400, fontSize: '20px', lineHeight: '150%', letterSpacing: 0, color: '#222', marginBottom: 0, textAlign: 'left' }}>
                    Unlike normal cells that have built-in limits on division, cancer cells multiply uncontrollably, ignoring the signals that tell healthy cells when to stop growing.
                  </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shop Now Button */}
            <div className="text-center">
              <Button
                className="w-full sm:w-auto"
                style={{
                  width: '100%',
                  maxWidth: '564px',
                  height: '56px',
                  gap: '10px',
                  borderRadius: '8px',
                  paddingTop: '16px',
                  paddingRight: '24px',
                  paddingBottom: '16px',
                  paddingLeft: '24px',
                  background: '#FF5E07',
                  margin: '0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                SHOP NOW
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </div>
          </div>
        </section>
      </div>
      {/* Three Icons Section - Mobile Only, Figma Spec */}
<div className="block lg:hidden" style={{ width: 355, minHeight: 602, background: '#FFF', position: 'relative', paddingTop: 44, paddingBottom: 32 }}>
  {/* Title Frame */}
  <div style={{ width: 343, height: 57.19, margin: '0 auto', position: 'relative' }}>
    <h2 style={{
      width: 324,
      height: 68.59,
      fontFamily: 'Staatliches, Arial, sans-serif',
      fontWeight: 799,
      fontSize: 17,
      lineHeight: '22.6px',
      letterSpacing: 0,
      textAlign: 'center',
      verticalAlign: 'middle',
      color: '#121212',
      marginTop: '15px', 
      transform: 'scaleY(1.5)'
         }}>
      THE <span style={{ color: '#20C500' }}>SCIENCE</span> BEHIND HOW CELLTOX<br />
      WORKS <span style={{ color: '#20C500' }}>AGAINST CANCER</span> CELLS
    </h2>
  </div>
  {/* Description Frame */}
  <div style={{ width: 343, height: 62,  marginTop: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <p style={{
      width: 326.58,
      height: 67,
      fontFamily: 'Inter, Arial, sans-serif',
      fontWeight: 400,
      fontSize: 14,
      lineHeight: '22px',
      letterSpacing: 0,
      textAlign: 'center',
      verticalAlign: 'middle',
      color: '#000',
      margin: 0
    }}>
      When cancer develops in your body, it exploits <br/> three critical vulnerabilities in your cellular system:
    </p>
  </div>
  {/* Icon 1 Frame */}
  <div style={{  height: 160, margin: '0 auto', marginLeft:'15px', marginTop: 13, display: 'flex', alignItems: 'flex-start', position: 'relative' }}>
    {/* Left: Number, Title, Description */}
    <div style={{ flex: 1, zIndex: 2 }}>
      <div style={{ display: 'flex', alignItems: 'left', marginTop: 1 }}>
        <span style={{
          width: 22,
          height: 22,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          border: '2px solid #B0FFA1',
          background: '#168B00',
          color: '#fff',
          fontWeight: 700,
          fontSize: 9,
          lineHeight: '12px',
          marginRight: 8,
          position: 'relative',
          top: 1
        }}>1</span>
        <span style={{
          width: 140,
          height: 28,
          fontFamily: 'Staatliches, Arial, sans-serif',
          fontWeight: 800,
          fontSize: 12,
          lineHeight: '26.4px',
          color: '#121212',
          textAlign: 'left',
          verticalAlign: 'left', 
          transform: 'scaleY(1.65)'

        }}>ENERGY THEFT</span>
      </div>
      <p style={{
        width: 198.2,
        height: 122,
        marginTop: 6,
        fontFamily: 'Inter, Arial, sans-serif',
        fontWeight: 100,
        fontSize: 12.7,
        lineHeight: '20px',
        color: 'black',
        textAlign: 'left',
        marginBottom: 0
      }}>
        Cancer cells hijack your body's energy production, consuming up to 200 times more glucose than normal cells. This energy theft not only fuels their growth but leaves healthy cells starving.
      </p>
    </div>
    {/* Right: Icon Image */}
    <img src="/images/cancer-development-cell1.png" alt="Energy Theft" style={{ width: 148, height: 155, position: 'absolute', top: 4, left: 190, objectFit: 'contain', zIndex: 1 }} />
  </div>
  {/* Icon 2 Frame */}
  <div style={{  height: 160, margin: '0 auto',marginLeft:'15px', marginTop: 32, display: 'flex', alignItems: 'flex-start', position: 'relative' }}>
    <div style={{ flex: 1, zIndex: 2 }}>
      <div style={{ display: 'flex', alignItems: 'left', marginTop: 1 }}>
        <span style={{
          width: 22,
          height: 22,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          border: '2px solid #B0FFA1',
          background: '#168B00',
          color: '#fff',
          fontWeight: 700,
          fontSize: 9,
          lineHeight: '12px',
          marginRight: 8,
          position: 'relative',
          top: 1
        }}>2</span>
        <span style={{
          width: 170,
          height: 28,
          fontFamily: 'Staatliches, Arial, sans-serif',
          fontWeight: 800,
          fontSize: 12,
          lineHeight: '26.4px',
          color: '#121212',
          textAlign: 'left',
          verticalAlign: 'left',
          transform: 'scaleY(1.65)'
        }}>IMMUNE EVASION</span>
      </div>
      <p style={{
        width: 198.2,
        height: 122,
        marginTop: 6,
        fontFamily: 'Inter, Arial, sans-serif',
        fontWeight: 100,
        fontSize: 12.7,
        lineHeight: '20px',
        color: 'black',
        textAlign: 'left',
        marginBottom: 0
      }}>
        Cancer cells develop sophisticated methods to hide from your immune system, creating proteins that act like "invisibility cloaks" and preventing your natural defenses from recognizing and eliminating them.
      </p>
    </div>
    {/* Right: Icon Image */}
    <img src="/images/cancer-development-cell2.png" alt="Immune Evasion" style={{ width: 135, height: 140, position: 'absolute', top: 15, left: 200, objectFit: 'contain', zIndex: 1 }} />
  </div>
  {/* Icon 3 Frame */}
  <div style={{  height: 160, margin: '0 auto',marginLeft:'15px', marginTop: 32, display: 'flex', alignItems: 'flex-start', position: 'relative' }}>
    <div style={{ flex: 1, zIndex: 2 }}>
      <div style={{ display: 'flex', alignItems: 'left', marginTop: 1 }}>
        <span style={{
          width: 22,
          height: 22,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          border: '2px solid #B0FFA1',
          background: '#168B00',
          color: '#fff',
          fontWeight: 700,
          fontSize: 9,
          lineHeight: '12px',
          marginRight: 8,
          position: 'relative',
          top: 1
        }}>3</span>
        <span style={{
          width: 220,
          height: 28,
          fontFamily: 'Staatliches, Arial, sans-serif',
          fontWeight: 800,
          fontSize: 12,
          lineHeight: '26.4px',
          color: '#121212',
          textAlign: 'left',
          verticalAlign: 'left',
          transform: 'scaleY(1.65)'
        }}>RAPID MULTIPLICATION</span>
      </div>
      <p style={{
        width: 198.2,
        height: 122,
        marginTop: 6,
        fontFamily: 'Inter, Arial, sans-serif',
        fontWeight: 100,
        fontSize: 12.7,
        lineHeight: '20px',
        color: 'black',
        textAlign: 'left',
        marginBottom: 0
      }}>
        Unlike normal cells that have built-in limits on division, cancer cells multiply uncontrollably, ignoring the signals that tell healthy cells when to stop growing.
      </p>
    </div>
    {/* Right: Icon Image */}
    <img src="/images/cancer-development-cell3.png" alt="Rapid Multiplication" style={{ width: 110, height: 110, position: 'absolute', top: 15, left: 220, objectFit: 'contain', zIndex: 1 }} />
  </div>
  {/* Shop Now Button */}
  <div style={{ width: 333, height: 50.8, margin: '0, auto', marginTop: '-5px', marginLeft:'10px' }}>
    <button style={{
      width: '100%',
      height: '100%',
      borderRadius: 8,
      background: '#FF5E07',
      color: '#fff',
      fontFamily: 'HarmoniaSansW01-Bold, Arial, sans-serif',
      fontWeight: 700,
      fontSize: 17,
      lineHeight: '120%',
      letterSpacing: '0.6px',
      textTransform: 'uppercase',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      cursor: 'pointer'
    }}>
      SHOP NOW
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  </div>
</div>

      {/* NEW Dual-Action Formula Section */}
      <DualActionSection />

      {/* NEW Breakthrough Formula Section */}
      <BreakthroughFormulaSection />

      {/* Testimonials Section - Dynamic from Supabase */}
      <ReviewsSection key={refreshReviews} />

      {/* Share Your Experience Button */}
      <section className="py-6 sm:py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Button 
            onClick={() => setShowAddReviewForm(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-bold uppercase rounded w-full sm:w-auto"
          >
            Share Your Experience
          </Button>
        </div>
      </section>

      {/* Quality Guaranteed Section */}
      <div className="relative bg-gradient-to-r  rounded-2xl p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 overflow-hidden">
        {/* Large green leaf top left (desktop only) */}
        <img src="/images/falling-green-leaves-natures-graceful-dance 2.png" alt="" className="hidden lg:block absolute -top-24 -left-24 w-72 h-72 object-contain" style={{zIndex:1}} />
        {/* Large green leaf bottom right (desktop only) */}
        <img src="/images/falling-green-leaves-natures-graceful-dance 2.png" alt="" className="hidden lg:block absolute -bottom-24 -right-24 w-80 h-80 object-contain" style={{zIndex:1, transform:'scaleX(-1)'}} />
        <div className="max-w-4xl mx-auto">
          <div className="hidden lg:flex items-center justify-center bg-white border-2 border-green-600 rounded-2xl shadow-lg overflow-hidden">
            {/* Left: Product Image - fill height, flush with top, left, and bottom borders */}
            <div className="flex-shrink-0 flex items-center justify-center h-full p-0" style={{height: '100%'}}>
              <img
                src="/images/3productimage.png"
                alt="CellTox 3 Product Variants"
                className="object-contain h-full w-full rounded-l-2xl"
                style={{maxHeight: '420px', minHeight: '320px'}}
              />
            </div>
            {/* Right: Card Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-8 py-10">
              {/* Green computer icon replaced with Frame 34 image */}
              <div className="flex justify-center mb-3">
                <img src="/images/Frame 34.png" alt="Quality Trust Icon" style={{ width: '84px', height: '68px', objectFit: 'contain', borderRadius: '6px' }} />
              </div>
              <h2 className="text-2xl  mb-2 text-center" style={{fontSize:'25px', fontWeight:'bold', fontFamily:'Staatliches-Regular, arial, sans-serif', transform: 'scaleY(1.25)'}}>QUALITY YOU CAN TRUST</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-6 text-center">
                CellTox is manufactured in an FDA-registered facility under strict quality control standards. Every batch undergoes rigorous testing to ensure purity, potency, and consistency. Our commitment to quality means you can trust that you're getting exactly what's on the label – nothing more, nothing less.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-base px-8 py-3 rounded-md shadow-lg w-full max-w-xs">
                SHOP NOW <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline', verticalAlign: 'middle', opacity: 1 }}>
              {/* Tail */}
              <line x1="3.13" y1="10" x2="16.88" y2="10" stroke="#fff" strokeWidth="2" />
              {/* Arrowhead */}
              <polyline points="11.25,4.38 16.88,10 11.25,15.63" stroke="#fff" strokeWidth="2" fill="none" />
            </svg>
              </Button>
            </div>
          </div>
          {/* Mobile Card - only visible on mobile */}
          <div style={{backgroundColor:'#FFF' }} className="block lg:hidden w-full">
            <div style={{backgroundColor:'#F0FFED', borderColor:'green' }}  className="relative  border-2  rounded-2xl px-2 pt-8 pb-5 shadow-lg overflow-hidden">
              {/* Top left leaf - about 5% in card, still large */}
              <img src="/images/falling-green-leaves-natures-graceful-dance 2.png" alt="" className="absolute -top-32 -left-32  object-contain" style={{zIndex:1, marginTop:'-205px', marginLeft:'-145px', width:'595px', height:'595px'}} />
              {/* Top right leaf - about 5% in card, still large */}
              <img src="/images/falling-green-leaves-natures-graceful-dance 2.png" alt="" className="absolute -top-32 -right-32   object-contain" style={{zIndex:1, marginTop:'-230px', marginRight:'-105px', width:'595px', height:'595px', transform:'scaleX(-1)'}} />
              {/* Green computer icon replaced with Frame 34 image */}
              <div className="flex justify-center mb-3">
                <img src="/images/Frame 34.png" alt="Quality Trust Icon" style={{ width: '84px', height: '84px', objectFit: 'contain', borderRadius: '6px' }} />
              </div>
              <h2 style={{transform:'scaleY(1.5)', fontFamily:'Staatliches, arial, sans-serif', fontWeight:'800'}} className="text-lg sm:text-xl font-bold text-gray-900 mb-2 text-center">QUALITY YOU CAN TRUST</h2>
              <p style={{fontSize:'16px', color:'black'}} className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4 text-center" >
                CellTox is manufactured in an FDA-registered facility under strict quality control standards.<br/>
                Every batch undergoes rigorous testing to ensure purity, potency, and consistency. Our commitment to quality means you can trust that you're getting exactly what's on the label – nothing more, nothing less.
              </p>
              <div className="flex justify-center">
                <Button style={{ height:'55px', zIndex:1000, marginBottom:'8px', lineHeight:'1.5', fontSize:'18px'}} className="bg-orange-500 gap-2 hover:bg-orange-600 text-white font-bold text-base px-10 py-3 rounded-md shadow-lg w-full">
                  SHOP NOW <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline', verticalAlign: 'middle', opacity: 1 }}>
                          {/* Tail */}
                          <line x1="3.13" y1="10" x2="16.88" y2="10" stroke="#fff" strokeWidth="2" />
                          {/* Arrowhead */}
                          <polyline points="11.25,4.38 16.88,10 11.25,15.63" stroke="#fff" strokeWidth="2" fill="none" />
                        </svg>
                </Button>
              </div>
              {/* Bottom leaves - about 30% in card, much larger */}
              <img src="/images/falling-green-leaves-natures-graceful-dance 2.png" alt="" className="absolute -bottom-20 left-1/2 transform -translate-x-1/2  object-contain" style={{marginBottom:'-210px',height:'495px', width:'495px',zIndex:0}} />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mb-16 sm:mb-20 px-4">
        {/* Mobile Title */}
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8 sm:mb-12 block lg:hidden" style={{fontFamily:'Staatliches, arial, sans-serif', fontWeight:'800', transform:'scaleY(1.5)', lineHeight:'120%', fontSize:'15px'}}>FREQUENTLY ASKED QUESTIONS</h2>
        {/* Desktop Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12 hidden lg:block" style={{fontFamily:'Staatliches, arial, sans-serif', fontWeight:'800', transform:'scaleY(1.5)', lineHeight:'150%', fontSize:'25px'}}>FREQUENTLY ASKED QUESTIONS</h2>

        <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          {faqs.map((question, index) => (
            <Card key={index} className="border border-gray-200 shadow-sm">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-medium text-gray-900">{question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      This is where the detailed answer would go for "{question}". Each FAQ would have comprehensive
                      information about the product, usage instructions, safety information, and other relevant
                      details.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            className="w-full sm:w-auto"
            style={{
              width: '100%',
              maxWidth: '564px',
              height: '56px',
              gap: '10px',
              borderRadius: '8px',
              paddingTop: '16px',
              paddingRight: '24px',
              paddingBottom: '16px',
              paddingLeft: '24px',
              background: '#FF5E07',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            SHOP NOW
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12 sm:py-16 relative overflow-hidden">
        {/* Background Leaf Image */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none select-none w-full">
          <img 
            src="/images/falling-green-leaves-natures-graceful-dance 2.png" 
            alt="Leaf background" 
            className="w-[200vw] lg:w-[70vw] h-auto object-contain"
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Newsletter Signup */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 style={{transform: 'scaleY(1.5)'}} className="text-lg sm:text-xl font-bold mb-4 uppercase">
                Subscribe to our
                <br />
                Emails
              </h3>
              <p className="text-gray-300 text-sm mb-6">
                Subscribe to our newsletter for special offers and discounts.
              </p>
              
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-white text-black rounded-md text-sm"
                />
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-semibold">
                  Sign up
                </Button>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-3 mt-6">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">f</span>
                </div>
                <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">t</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-2">© 2024, iverpure</p>
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-1">
              <h3 style={{transform: 'scaleY(1.5)'}} className="text-lg font-bold mb-4 uppercase text-green-400">
                Contact Details
              </h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>Email: Help@iverpure.Com</p>
                <p>2500 Central Ave, Boulder,</p>
                <p>CO 80301, United States</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h3 style={{transform: 'scaleY(1.5)'}} className="text-lg font-bold mb-4 uppercase text-green-400">
                Quick Links
              </h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>Search</p>
                <p>Privacy Policy</p>
                <p>Contact</p>
              </div>
            </div>

            {/* References */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 style={{transform: 'scaleY(1.5)'}} className="text-lg font-bold mb-4 uppercase text-green-400">
                References
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                These statements have not been evaluated by the food and drug administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Add Review Form Modal */}
      {showAddReviewForm && (
        <AddReviewForm
          onClose={() => setShowAddReviewForm(false)}
          onReviewAdded={handleReviewAdded}
        />
      )}
    </div>
  );
}

type MobileStageToggleProps = {
  titleGreen: string;
  titleRest: string;
  description: React.ReactNode;
  img: string;
  imgAlt: string;
  defaultOpen: boolean;
  cardHeight?: number;
};

function MobileStageToggle({ titleGreen, titleRest, description, img, imgAlt, defaultOpen, cardHeight = 330 }: MobileStageToggleProps) {
  const [open, setOpen] = React.useState(!!defaultOpen);
  return (
    <div>
      <div className="flex items-center justify-between cursor-pointer" onClick={() => setOpen(o => !o)}>
        <span className="text-base" style={{fontFamily:'Staatliches, arial, serif',transform: 'scaleY(1.5)',  fontWeight:'700', fontSize:'13px', letterSpacing:'0px'}}>
          <span style={{ color: '#20C500', display: 'block', transformOrigin: 'left', marginBottom:'-8px', marginTop:'5px' }}>{titleGreen}</span>
          <span className="text-black" style={{ display: 'block', transformOrigin: 'left', marginBottom:'2px'}}>{titleRest}</span>
        </span>
        <svg className={`w-5 h-5 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </div>
      {open && (
        <div className="bg-white border-2 border-black rounded-lg px-1 py-3 mt-2 text-sm text-gray-900 " style={{height: `${cardHeight}px`, width:'292px',fontFamily:'HarmoniaSansW01-Regular,', fontSize:'15px', lineHeight:'150%'}}>
          {description}
        </div>
      )}
      <img src={img} alt={imgAlt} className="w-full  object-cover rounded-lg  shadow-lg my-2" style={{ border: '3px solid #20C500', height:'200px' }} />
    </div>
  );
}