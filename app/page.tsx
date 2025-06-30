'use client';

import { useState } from 'react';
import { Menu, Search, ShoppingCart, Star, ChevronDown, Shield, CheckCircle, Truck, Users, Award, ChevronUp } from 'lucide-react';
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
      <div className="bg-black text-white text-center py-2 px-4 text-xs font-medium">
        <span className="hidden sm:inline">CELLTOX CLAIMS 40 BILLION OUT FASTER THAN EXPECTED. LOCK IN YOUR ORDER TODAY TO GET 25% OFF + FREE SHIPPING.</span>
        <span className="sm:hidden">25% OFF + FREE SHIPPING</span>
      </div>

      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Menu on the left */}
            <div className="flex items-center flex-1">
              <Button variant="ghost" size="sm" className="mr-2">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
            {/* Logo centered */}
            <div className="flex-1 flex justify-center">
              <div className="flex items-center gap-2">
                <img src="/images/logo.jpeg" alt="Iverpure Logo" className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
                <span className="text-lg sm:text-2xl font-bold text-teal-500">iverpure</span>
              </div>
            </div>
            {/* Icons on the right */}
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
      </header>
      {/* TrustBar for desktop (after navbar, before hero grid) */}
      <div className="hidden lg:block">
        <TrustBar />
      </div>

      {/* Hero Section */}
      <section className="pt-0 pb-6 sm:pt-0 sm:pb-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* MOBILE HERO (background from rating to button, everything overlays) */}
            <div className="order-1 lg:order-2 w-full lg:bg-none">
              <div className="block lg:hidden relative">
                {/* Background only from rating/title to button */}
                <div className="relative w-full">
                  <div className="absolute inset-0 w-full h-full z-0" style={{backgroundImage: 'url(/images/herobackground.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                  <div className="relative z-10 px-2 pt-4 pb-6 flex flex-col items-center">
                    {/* Star Rating */}
                    <div className="flex items-center gap-1 mb-2 justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">4.8 out of 5</span>
                    </div>
                    {/* Title */}
                    <h1 className="text-2xl sm:text-3xl font-bold leading-tight text-center mb-3 text-white drop-shadow-lg">
                      CELLTOX: THE <span className="text-green-200">NOBEL PRIZE-WINNING</span>
                      <br className="hidden sm:block" />
                      FORMULA THAT'S HELPING <span className="text-green-200">THOUSANDS</span>
                      <br className="hidden sm:block" />
                      FIGHT BACK AGAINST CANCER CELLS
                    </h1>
                    {/* Hero Product Image - larger */}
                    <div className="mb-3 flex justify-center">
                      <Image src="/images/heroproduct.png" alt="CellTox Product" width={280} height={380} className="rounded-xl shadow-xl w-64 h-80 sm:w-72 sm:h-96" priority />
                    </div>
                    {/* Shop Now Button */}
                    <div className="mb-3 flex justify-center w-full">
                      <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 text-base font-semibold rounded w-full sm:w-auto">
                        SHOP NOW →
                      </Button>
                    </div>
                  </div>
                </div>
                {/* Description below background image */}
                <div className="relative z-10 px-2 pb-6 flex flex-col items-center">
                  <p className="text-gray-700 text-sm leading-relaxed text-center mt-2">
                    CellTox combines two powerful cancer-fighting compounds that work 
                    together to target abnormal cells while actually strengthening your 
                    immune system. This breakthrough formula delivers Nobel Prize-
                    winning ivermectin and pharmaceutical-grade fenbendazole directly 
                    to where they're needed most.
                  </p>
                </div>
                {/* TrustBar (feature row) - mobile only, after background and description */}
                <div className="block lg:hidden mb-3">
                  <TrustBar />
                </div>
              </div>
              {/* Desktop content (no background) */}
              <div className="hidden lg:block">
                <div className="flex items-center gap-1 mb-2 justify-center lg:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">4.8 out of 5</span>
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold leading-tight text-center lg:text-left mb-3">
                  CELLTOX: THE <span className="text-green-600">NOBEL PRIZE-WINNING</span>
                  <br className="hidden sm:block" />
                  FORMULA THAT'S HELPING <span className="text-green-600">THOUSANDS</span>
                  <br className="hidden sm:block" />
                  FIGHT BACK AGAINST CANCER CELLS
                </h1>
                <div className="mb-3 flex justify-center lg:justify-start">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 text-base font-semibold rounded w-full sm:w-auto">
                    SHOP NOW →
                  </Button>
                </div>
                <div className="block lg:hidden mb-3">
                  <TrustBar />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed text-center lg:text-left">
                  CellTox combines two powerful cancer-fighting compounds that work 
                  together to target abnormal cells while actually strengthening your 
                  immune system. This breakthrough formula delivers Nobel Prize-
                  winning ivermectin and pharmaceutical-grade fenbendazole directly 
                  to where they're needed most.
                </p>
              </div>
            </div>
            {/* Product Image - desktop only, with background */}
            <div className="hidden lg:flex order-2 lg:order-1 relative w-full h-full items-center justify-center">
              <div className="relative w-full h-[500px] flex items-center justify-center rounded-2xl overflow-hidden">
                <div className="absolute inset-0 w-full h-full" style={{backgroundImage: 'url(/images/herobackground.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '1rem'}}></div>
                <div className="relative z-10 flex items-center justify-center w-full h-full">
                  <Image src="/images/heroproduct.png" alt="CellTox Product" width={320} height={420} className="rounded-xl shadow-xl" priority />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits, Testimonial, and Collapsible Section - Mobile/Tablet Only (restored) */}
      <section className="py-6 sm:py-8 bg-white block lg:hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 gap-8">
            {/* Feature List + Testimonial Card */}
            <div className="flex flex-col gap-6">
              {/* Feature List */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <span className="font-semibold">Nobel Prize-winning compounds ivermectin and fenbendazole</span> work together to target abnormal cells at their source
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <span className="font-semibold">Clinically-researched ingredients shown to selectively target cancer cells</span> while protecting healthy tissue
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <span className="font-semibold">Users report increased energy, better sleep, and improved quality of life</span> within weeks of starting
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <span className="font-semibold">Made in an FDA-registered facility with pharmaceutical-grade ingredients</span> for guaranteed purity
                    </div>
                  </div>
                </div>
              </div>
              {/* Testimonial Card */}
              <div className="bg-white rounded-lg border-2 overflow-hidden shadow-lg" style={{ borderColor: '#168B00' }}>
                <div className="relative h-64">
                  <img 
                    src="/images/afterherosectionimage.jpg" 
                    alt="Happy couple testimonial"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t-2 rounded-b-lg" style={{ borderTopColor: '#168B00', backgroundColor: '#F0FFF0', borderTopWidth: 2 }}>
                  <blockquote className="text-base text-gray-900 mb-3 font-bold text-center">
                    "Within a few months, my energy returned, my pain decreased, and my latest scans showed remarkable improvement. This formula gave me my life back."
                  </blockquote>
                  <div className="text-sm text-gray-800 text-center font-semibold">
                    <div className="font-bold">- John S.</div>
                    <div className="flex items-center gap-1 mt-1 justify-center">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span>Verified Buyer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Collapsible Sections */}
            <div className="flex flex-col gap-4">
              <Collapsible open={productDetailsOpen} onOpenChange={setProductDetailsOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left rounded-t-lg">
                  <span className="font-semibold text-sm">PRODUCT DETAILS</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${productDetailsOpen ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-white border-x border-b text-sm text-gray-700 rounded-b-lg">
                  CellTox contains pharmaceutical-grade ivermectin and fenbendazole, two compounds that have shown remarkable results in targeting abnormal cell growth while supporting healthy immune function.
                </CollapsibleContent>
              </Collapsible>
              <Collapsible open={benefitsOpen} onOpenChange={setBenefitsOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left rounded-t-lg">
                  <span className="font-semibold text-sm">BENEFITS</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${benefitsOpen ? 'rotate-180' : ''}`} />
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
                <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left rounded-t-lg">
                  <span className="font-semibold text-sm">SHIPPING TIMES</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${shippingOpen ? 'rotate-180' : ''}`} />
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
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h3 className="font-bold text-sm mb-2 flex items-center gap-2">
                  <span className="text-yellow-600">⚠️</span>
                  IMPORTANT NOTICE
                </h3>
                <p className="text-xs text-gray-700 mb-2">
                  CellTox is sold exclusively through this official website. Beware of imitations on Amazon, eBay, and other platforms — these sellers are NOT affiliated with CellTox.
                </p>
                <p className="text-xs text-gray-700">
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
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <span className="font-semibold">Nobel Prize-winning compounds ivermectin and fenbendazole</span> work together to target abnormal cells at their source
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <span className="font-semibold">Clinically-researched ingredients shown to selectively target cancer cells</span> while protecting healthy tissue
                  </div>
                </div>
              </div>
              {/* Right Column */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <span className="font-semibold">Users report increased energy, better sleep, and improved quality of life</span> within weeks of starting
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <span className="font-semibold">Made in an FDA-registered facility with pharmaceutical-grade ingredients</span> for guaranteed purity
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial and Collapsible Section - Desktop Only, Exact Match */}
      <section className="py-8 bg-white hidden lg:block">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Side - Testimonial Card */}
            <div className="relative">
              <div className="bg-white rounded-lg border-2 overflow-hidden shadow-lg" style={{ borderColor: '#168B00' }}>
                <div className="relative h-64">
                  <img 
                    src="/images/afterherosectionimage.jpg" 
                    alt="Happy couple testimonial"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t-2 rounded-b-lg" style={{ borderTopColor: '#168B00', backgroundColor: '#F0FFF0', borderTopWidth: 2 }}>
                  <blockquote className="text-base text-gray-900 mb-3 font-bold text-center">
                    "Within a few months, my energy returned, my pain decreased, and my latest scans showed remarkable improvement. This formula gave me my life back."
                  </blockquote>
                  <div className="text-sm text-gray-800 text-center font-semibold">
                    <div className="font-bold">- John S.</div>
                    <div className="flex items-center gap-1 mt-1 justify-center">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span>Verified Buyer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Collapsible Sections */}
            <div className="space-y-2">
              <Collapsible open={productDetailsOpen} onOpenChange={setProductDetailsOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left rounded-t-lg">
                  <span className="font-semibold text-sm">PRODUCT DETAILS</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${productDetailsOpen ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-white border-x border-b text-sm text-gray-700 rounded-b-lg">
                  CellTox contains pharmaceutical-grade ivermectin and fenbendazole, two compounds that have shown remarkable results in targeting abnormal cell growth while supporting healthy immune function.
                </CollapsibleContent>
              </Collapsible>

              <Collapsible open={benefitsOpen} onOpenChange={setBenefitsOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left rounded-t-lg">
                  <span className="font-semibold text-sm">BENEFITS</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${benefitsOpen ? 'rotate-180' : ''}`} />
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
                <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left rounded-t-lg">
                  <span className="font-semibold text-sm">SHIPPING TIMES</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${shippingOpen ? 'rotate-180' : ''}`} />
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
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h3 className="font-bold text-sm mb-2 flex items-center gap-2">
                  <span className="text-yellow-600">⚠️</span>
                  IMPORTANT NOTICE
                </h3>
                <p className="text-xs text-gray-700 mb-2">
                  CellTox is sold exclusively through this official website. Beware of imitations on Amazon, eBay, and other platforms — these sellers are NOT affiliated with CellTox.
                </p>
                <p className="text-xs text-gray-700">
                  Counterfeit products, often shipped from China, do not offer the same safe and effective formulation. For guaranteed quality, safety, and results, purchase directly from this official website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three-Stage Process - Responsive Timeline */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-green-50 to-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative">
          {/* Large top left leaf, 30% visible in section */}
          <img src="/images/falling-green-leaves-natures-graceful-dance 2.png" alt="" className="absolute -top-28 -left-28 w-40 h-40 object-contain z-0" />
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                THE <span className="text-green-600">POWERFUL THREE-STAGE PROCESS</span> THAT MAKES CELLTOX
                <br className="hidden sm:block" />
                DIFFERENT FROM ANY OTHER FORMULA
              </h2>
            </div>

            {/* Timeline Container */}
            <div className="relative max-w-5xl mx-auto">
              {/* MOBILE VERSION ONLY: Stages as toggles with always-visible image, title row with chevron, and description in a card, using timeline structure from previous code */}
              <div className="block lg:hidden relative">
                {/* Single vertical line on the left, absolutely positioned */}
                <div className="absolute left-5 top-4 bottom-0 w-0.5 bg-black" style={{zIndex: 0}}></div>
                <div className="relative z-10">
                  {[{
                    titleGreen: 'FIRST STAGE:',
                    titleRest: ' INITIAL SUPPORT PHASE',
                    description: (
                      <>
                        The moment you start your CellTox protocol, a remarkable process begins.<br/>
                        During the first 10 days, the ivermectin compound begins supporting your body's natural processes while fenbendazole complements these effects.<br/>
                        <span className="font-bold text-green-600">Many users report feeling more energetic as their bodies start to strengthen natural defense mechanisms against abnormal cells.</span><br/>
                        This dual-action approach works at the cellular level where conventional treatments often struggle.
                      </>
                    ),
                    img: '/images/stage1.jpg',
                    imgAlt: 'Initial support phase',
                    defaultOpen: true,
                  }, {
                    titleGreen: 'REST PERIOD:',
                    titleRest: ' OPTIMIZATION PHASE',
                    description: (
                      <>
                        After the initial support phase, your body enters a critical period of adjustment and enhancement.<br/>
                        During this time, the powerful combination of ivermectin and fenbendazole continues to work, allowing your system to recharge and optimize its natural defense mechanisms.<br/>
                        <span className="font-bold text-green-600">Many users notice sustained energy levels and a greater sense of well-being as their bodies further adapt to the detox process.</span><br/>
                        This essential phase ensures that your body maintains its progress, reinforcing resilience at the cellular level where traditional methods often fall short.
                      </>
                    ),
                    img: '/images/stage2.jpg',
                    imgAlt: 'Couple enjoying better health',
                    defaultOpen: false,
                  }, {
                    titleGreen: 'FINAL STAGE:',
                    titleRest: ' CONTINUED SUPPORT',
                    description: (
                      <>
                        As your body completes the detox process, the focus shifts to long-term maintenance and resilience. This phase ensures that the benefits achieved during the initial stages are sustained over time.<br/>
                        By continuing to reinforce natural defense mechanisms, your system remains strong and protected against future imbalances. <span className="font-bold text-green-600">Many users experience enhanced vitality, improved overall wellness, and long-lasting energy levels.</span><br/>
                        This final stage helps establish a stable foundation for optimal health, allowing you to maintain the results and continue feeling your best.
                      </>
                    ),
                    img: '/images/stage3.jpg',
                    imgAlt: 'Healthy active lifestyle',
                    defaultOpen: false,
                  }].map((stage, idx) => (
                    <div className="relative mb-10" key={idx}>
                      {/* Dot, perfectly centered on the line */}
                      <div className="absolute left-5 top-4 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 border-black shadow bg-[#168B00] z-10"></div>
                      {/* Content offset to the right of the timeline column */}
                      <div className="ml-12">
                        <MobileStageToggle
                          titleGreen={stage.titleGreen}
                          titleRest={stage.titleRest}
                          description={stage.description}
                          img={stage.img}
                          imgAlt={stage.imgAlt}
                          defaultOpen={stage.defaultOpen}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop Timeline (center) */}
              <div className="hidden lg:block">
                {/* Central Vertical Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-300"></div>

                {/* Stage 1 - Left Side */}
                <div className="relative mb-16">
                  {/* Green Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full z-10"></div>
                  {/* Content Box - Left Side */}
                  <div className="w-1/2 pr-8">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <div className="mb-4">
                        <span className="bg-green-600 text-white px-3 py-1 text-xs font-bold uppercase rounded">FIRST STAGE:</span>
                        <span className="ml-2 font-bold text-sm uppercase text-green-600">INITIAL SUPPORT PHASE</span>
                      </div>
                      <div className="text-sm text-gray-700 space-y-3">
                        <p>The moment you start your CellTox protocol, a remarkable process begins.</p>
                        <p>During the first 10 days, the ivermectin compound begins supporting your body's natural processes while fenbendazole complements these effects.</p>
                        <p>Many users report <strong className="text-green-600">feeling more energetic</strong> as their bodies start to <strong className="text-green-600">re-establish natural defense mechanisms</strong> against abnormal cells.</p>
                        <p>This dual-action approach works at the cellular level where conventional treatments often struggle.</p>
                      </div>
                    </div>
                    {/* Image below content box for Stage 1 */}
                    <div className="mt-4">
                      <img 
                        src="/images/stage1.jpg" 
                        alt="Initial support phase"
                        className="w-full h-48 object-cover rounded-lg border-2"
                        style={{ borderColor: 'rgb(22, 139, 0)' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Stage 2 - Right Side, staggered to start 40px before Stage 1 image */}
                <div className="relative mb-16 lg:-mt-10">
                  {/* Green Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full z-10"></div>
                  {/* Content Box - Right Side */}
                  <div className="w-1/2 ml-auto pl-8">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <div className="mb-4">
                        <span className="bg-green-600 text-white px-3 py-1 text-xs font-bold uppercase rounded">REST PERIOD:</span>
                        <span className="ml-2 font-bold text-sm uppercase text-green-600">OPTIMIZATION PHASE</span>
                      </div>
                      <div className="text-sm text-gray-700 space-y-3">
                        <p>After the initial support phase, your body enters a critical period of adjustment and enhancement.</p>
                        <p>During this time, the powerful combination of ivermectin and fenbendazole continues to work, allowing your system to recharge and optimize its natural defense mechanisms.</p>
                        <p>Many users notice <strong className="text-green-600">sustained energy levels</strong> and <strong className="text-green-600">a greater sense of well-being</strong> as their bodies further adapt to the detox process.</p>
                        <p>This essential phase ensures that your body maintains its progress, reinforcing resilience at the cellular level where traditional methods often fall short.</p>
                      </div>
                    </div>
                    {/* Image below content box for Stage 2 */}
                    <div className="mt-4">
                      <img 
                        src="/images/stage2.jpg" 
                        alt="Couple enjoying better health"
                        className="w-full h-48 object-cover rounded-lg border-2"
                        style={{ borderColor: 'rgb(22, 139, 0)' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Stage 3 - Left Side, staggered to start 40px before Stage 2 image */}
                <div className="relative mb-16 lg:-mt-10">
                  {/* Green Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full z-10"></div>
                  {/* Content Box - Left Side */}
                  <div className="w-1/2 pr-8">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <div className="mb-4">
                        <span className="bg-green-600 text-white px-3 py-1 text-xs font-bold uppercase rounded">FINAL STAGE:</span>
                        <span className="ml-2 font-bold text-sm uppercase text-green-600">CONTINUED SUPPORT</span>
                      </div>
                      <div className="text-sm text-gray-700 space-y-3">
                        <p>As your body completes the detox process, the focus shifts to long-term maintenance and resilience. This phase ensures that the benefits achieved during the initial stages are sustained over time.</p>
                        <p>By continuing to <strong className="text-green-600">reinforce natural defense mechanisms</strong>, your system remains strong and protected against future imbalances. <strong className="text-green-600">Many users experience enhanced vitality, improved overall wellness, and long-lasting energy levels.</strong></p>
                        <p>This final stage helps establish a stable foundation for optimal health, allowing you to maintain the results and continue feeling your best.</p>
                      </div>
                    </div>
                    {/* Single image below content box for Stage 3 */}
                    <div className="mt-4">
                      <img 
                        src="/images/stage3.jpg" 
                        alt="Healthy active lifestyle"
                        className="w-full h-48 object-cover rounded-lg border-2"
                        style={{ borderColor: 'rgb(22, 139, 0)' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shop Now Button - ONLY ONE BUTTON */}
            <div className="text-center mt-8 sm:mt-12">
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-bold uppercase rounded w-full sm:w-auto">
                SHOP NOW →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Science Behind CellTox Section - EXACT MATCH */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-4">
              THE <span className="text-green-600">SCIENCE</span> BEHIND HOW CELLTOX WORKS <span className="text-green-600">AGAINST CANCER</span> CELLS
            </h2>
            <p className="text-gray-600 text-sm max-w-3xl mx-auto">
              When cancer develops in your body, abnormal cells start dividing
            </p>
          </div>

          {/* Three Icons Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Icon 1 - Ivermectin */}
            <div className="text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 relative flex items-center justify-center">
                <img
                  src="/images/cancer-development-cell1.png"
                  alt="Normal Cell"
                  className="w-full h-full object-contain rounded-full border border-green-200 bg-white"
                />
              </div>
              <div className="mb-3">
                <span className="inline-flex items-center gap-1 text-green-600 font-bold text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  IVERMECTIN
                </span>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Ivermectin targets your body's cancer-fighting mechanisms by disrupting the ATP cycle that cancer cells need to survive. This Nobel Prize-winning compound has been shown to help your body identify and eliminate abnormal cells while leaving healthy cells unharmed.
              </p>
            </div>

            {/* Icon 2 - Fenbendazole */}
            <div className="text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 relative flex items-center justify-center">
                <img
                  src="/images/cancer-development-cell2.png"
                  alt="Cancer Cell Genetic Changes"
                  className="w-full h-full object-contain rounded-full border border-green-200 bg-white"
                />
              </div>
              <div className="mb-3">
                <span className="inline-flex items-center gap-1 text-green-600 font-bold text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  FENBENDAZOLE
                </span>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Fenbendazole works by disrupting the microtubule structure that cancer cells rely on for division and growth. This powerful compound has been shown to prevent cancer cells from multiplying while supporting your body's natural immune response and detoxification processes.
              </p>
            </div>

            {/* Icon 3 - Synergistic Effect */}
            <div className="text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 relative flex items-center justify-center">
                <img
                  src="/images/cancer-development-cell3.png"
                  alt="Malignant Cancer Cells"
                  className="w-full h-full object-contain rounded-full border border-green-200 bg-white"
                />
              </div>
              <div className="mb-3">
                <span className="inline-flex items-center gap-1 text-green-600 font-bold text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  SYNERGISTIC EFFECT
                </span>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                When combined, these two compounds create a powerful synergistic effect that targets cancer cells from multiple angles. This dual-action approach helps ensure that abnormal cells cannot adapt or develop resistance, while healthy cells remain protected and your immune system stays strong.
              </p>
            </div>
          </div>

          {/* Shop Now Button */}
          <div className="text-center">
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-bold uppercase rounded w-full sm:w-auto">
              SHOP NOW →
            </Button>
          </div>
        </div>
      </section>

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
      <div className="relative bg-gradient-to-r from-green-100 to-green-50 rounded-2xl p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 overflow-hidden">
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
              {/* Green computer icon */}
              <div className="flex justify-center mb-3">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="12" width="32" height="20" rx="2" fill="#16A34A"/>
                  <rect x="12" y="16" width="24" height="12" rx="1" fill="white"/>
                  <rect x="20" y="32" width="8" height="2" rx="1" fill="#16A34A"/>
                  <rect x="16" y="36" width="16" height="2" rx="1" fill="#16A34A"/>
                  <rect x="22" y="20" width="4" height="4" rx="2" fill="#16A34A"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">QUALITY YOU CAN TRUST</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-6 text-center">
                CellTox is manufactured in an FDA-registered facility under strict quality control standards. Every batch undergoes rigorous testing to ensure purity, potency, and consistency. Our commitment to quality means you can trust that you're getting exactly what's on the label – nothing more, nothing less.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-base px-8 py-3 rounded-md shadow-lg w-full max-w-xs">
                SHOP NOW →
              </Button>
            </div>
          </div>
          {/* Mobile Card - only visible on mobile */}
          <div className="block lg:hidden w-full">
            <div className="relative bg-white border-2 border-green-600 rounded-2xl px-4 pt-8 pb-10 shadow-lg overflow-hidden">
              {/* Top left leaf - about 5% in card, still large */}
              <img src="/images/falling-green-leaves-natures-graceful-dance 2.png" alt="" className="absolute -top-32 -left-32 w-48 h-48 object-contain" style={{zIndex:1}} />
              {/* Top right leaf - about 5% in card, still large */}
              <img src="/images/falling-green-leaves-natures-graceful-dance 2.png" alt="" className="absolute -top-32 -right-32 w-48 h-48 object-contain" style={{zIndex:1, transform:'scaleX(-1)'}} />
              {/* Green computer icon */}
              <div className="flex justify-center mb-3">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="12" width="32" height="20" rx="2" fill="#16A34A"/>
                  <rect x="12" y="16" width="24" height="12" rx="1" fill="white"/>
                  <rect x="20" y="32" width="8" height="2" rx="1" fill="#16A34A"/>
                  <rect x="16" y="36" width="16" height="2" rx="1" fill="#16A34A"/>
                  <rect x="22" y="20" width="4" height="4" rx="2" fill="#16A34A"/>
                </svg>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 text-center">QUALITY YOU CAN TRUST</h2>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4 text-center">
                CellTox is manufactured in an FDA-registered facility under strict quality control standards.<br/>
                Every batch undergoes rigorous testing to ensure purity, potency, and consistency. Our commitment to quality means you can trust that you're getting exactly what's on the label – nothing more, nothing less.
              </p>
              <div className="flex justify-center">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-base px-8 py-3 rounded-md shadow-lg w-full">
                  SHOP NOW →
                </Button>
              </div>
              {/* Bottom leaves - about 30% in card, much larger */}
              <img src="/images/falling-green-leaves-natures-graceful-dance 2.png" alt="" className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-[34rem] h-40 object-contain" style={{zIndex:1}} />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mb-16 sm:mb-20 px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12">FREQUENTLY ASKED QUESTIONS</h2>

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
          <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 rounded-md shadow-lg w-full sm:w-auto">
            SHOP NOW →
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
              <h3 className="text-lg sm:text-xl font-bold mb-4 uppercase">
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
              <h3 className="text-lg font-bold mb-4 uppercase text-green-400">
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
              <h3 className="text-lg font-bold mb-4 uppercase text-green-400">
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
              <h3 className="text-lg font-bold mb-4 uppercase text-green-400">
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
};

function MobileStageToggle({ titleGreen, titleRest, description, img, imgAlt, defaultOpen }: MobileStageToggleProps) {
  const [open, setOpen] = React.useState(!!defaultOpen);
  return (
    <div>
      <div className="flex items-center justify-between cursor-pointer" onClick={() => setOpen(o => !o)}>
        <span className="font-bold text-base">
          <span className="text-green-600">{titleGreen}</span>
          <span className="text-black">{titleRest}</span>
        </span>
        <svg className={`w-5 h-5 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </div>
      {open && (
        <div className="bg-white border-2 border-black rounded-lg px-4 py-3 mt-2 text-sm text-gray-900 font-medium">
          {description}
        </div>
      )}
      <img src={img} alt={imgAlt} className="w-full h-40 object-cover rounded-lg border-2 shadow-lg my-2" style={{ borderColor: '#168B00' }} />
    </div>
  );
}