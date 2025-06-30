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
      <section className="py-6 sm:py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          {/* Mobile: stacked, Desktop: grid */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Content (Title, Stars, Product Image, Button, TrustBar, Description) */}
            <div className="order-1 lg:order-2 w-full">
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-2 justify-center lg:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm text-gray-600 ml-1">4.8 out of 5</span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-center lg:text-left mb-3">
                CELLTOX: THE <span className="text-green-600">NOBEL PRIZE-WINNING</span>
                <br className="hidden sm:block" />
                FORMULA THAT'S HELPING <span className="text-green-600">THOUSANDS</span>
                <br className="hidden sm:block" />
                FIGHT BACK AGAINST CANCER CELLS
              </h1>

              {/* Product Image - mobile after title, desktop left */}
              <div className="mb-3 flex justify-center lg:hidden">
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl p-4 flex justify-center items-center min-h-[300px]">
                  <div className="bg-white rounded-xl shadow-xl p-3 transform -rotate-3">
                    <div className="w-32 h-44 bg-gradient-to-b from-green-400 to-green-500 rounded-lg flex flex-col items-center justify-center text-white relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-300/20 to-transparent"></div>
                      <div className="text-xs mb-1 text-teal-600 font-semibold">iverpure</div>
                      <div className="text-lg font-bold mb-2">CELLTOX</div>
                      <div className="text-xs text-center px-2 mb-3 leading-tight">
                        Ivermectin & Fenbendazole
                        <br />
                        Immune Defense Support
                      </div>
                      <div className="text-xs bg-white/20 px-2 py-1 rounded-full mb-2">
                        60 Capsules
                      </div>
                      <div className="absolute bottom-2 text-xs opacity-75">
                        Dietary Supplement
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shop Now Button */}
              <div className="mb-3 flex justify-center lg:justify-start">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 text-base font-semibold rounded w-full sm:w-auto">
                  SHOP NOW →
                </Button>
              </div>

              {/* TrustBar (feature row) - mobile only here, desktop above */}
              <div className="block lg:hidden mb-3">
                <TrustBar />
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed text-center lg:text-left">
                CellTox combines two powerful cancer-fighting compounds that work 
                together to target abnormal cells while actually strengthening your 
                immune system. This breakthrough formula delivers Nobel Prize-
                winning ivermectin and pharmaceutical-grade fenbendazole directly 
                to where they're needed most.
              </p>
            </div>

            {/* Product Image - desktop only */}
            <div className="hidden lg:block order-2 lg:order-1 relative">
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl p-8 flex justify-center items-center min-h-[400px]">
                <div className="bg-white rounded-xl shadow-xl p-4 transform -rotate-3">
                  <div className="w-40 h-56 bg-gradient-to-b from-green-400 to-green-500 rounded-lg flex flex-col items-center justify-center text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-300/20 to-transparent"></div>
                    <div className="text-xs mb-1 text-teal-600 font-semibold">iverpure</div>
                    <div className="text-xl font-bold mb-2">CELLTOX</div>
                    <div className="text-xs text-center px-3 mb-3 leading-tight">
                      Ivermectin & Fenbendazole
                      <br />
                      Immune Defense Support
                    </div>
                    <div className="text-xs bg-white/20 px-2 py-1 rounded-full mb-2">
                      60 Capsules
                    </div>
                    <div className="absolute bottom-2 text-xs opacity-75">
                      Dietary Supplement
                    </div>
                  </div>
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
              <div className="bg-white rounded-lg border overflow-hidden shadow-sm">
                <div className="relative h-64">
                  <img 
                    src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=800" 
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
                <div className="p-4 border-t border-green-300 rounded-b-lg bg-green-50">
                  <blockquote className="text-sm text-gray-800 mb-3 font-medium text-center">
                    "Within a few months, my energy returned, my pain decreased, and my latest scans showed remarkable improvement. This formula gave me my life back."
                  </blockquote>
                  <div className="text-xs text-gray-600 text-center">
                    <div className="font-semibold">- John S.</div>
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
              <div className="bg-white rounded-lg border overflow-hidden shadow-sm">
                <div className="relative h-64">
                  <img 
                    src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=800" 
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
                <div className="p-4">
                  <blockquote className="text-sm text-gray-800 mb-3 font-medium">
                    "Within a few months, my energy returned, my pain decreased, and my latest scans showed remarkable improvement. This formula gave me my life back."
                  </blockquote>
                  <div className="text-xs text-gray-600">
                    <div className="font-semibold">- John S.</div>
                    <div className="flex items-center gap-1 mt-1">
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
      <section className="py-12 sm:py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
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
            {/* Mobile Timeline (left) */}
            <div className="block lg:hidden">
              <div className="relative pl-8">
                {/* Vertical line on the left */}
                <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-green-300" style={{height: '100%'}}></div>

                {/* Stage 1 */}
                <div className="flex items-start mb-10 relative">
                  {/* Dot */}
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-green-500 rounded-full mt-2 ml-[-30px] border-2 border-white shadow"></div>
                  </div>
                  {/* Content */}
                  <div className="ml-4 flex-1">
                    <span className="bg-green-600 text-white px-3 py-1 text-xs font-bold uppercase rounded">FIRST STAGE:</span>
                    <span className="ml-2 font-bold text-sm uppercase text-green-600">INITIAL SUPPORT PHASE</span>
                    <div className="text-sm text-gray-700 space-y-2 mt-2">
                      <p>The moment you start your CellTox protocol, a remarkable process begins.</p>
                      <p>During the first 10 days, the ivermectin compound begins supporting your body's natural processes while fenbendazole complements these effects.</p>
                      <p>Many users report <strong className="text-green-600">feeling more energetic</strong> as their bodies start to <strong className="text-green-600">re-establish natural defense mechanisms</strong> against abnormal cells.</p>
                      <p>This dual-action approach works at the cellular level where conventional treatments often struggle.</p>
                    </div>
                    <div className="mt-3">
                      <img 
                        src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=600" 
                        alt="Initial support phase"
                        className="w-full h-40 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="flex items-start mb-10 relative">
                  {/* Dot */}
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-green-500 rounded-full mt-2 ml-[-30px] border-2 border-white shadow"></div>
                  </div>
                  {/* Content */}
                  <div className="ml-4 flex-1">
                    <span className="bg-green-600 text-white px-3 py-1 text-xs font-bold uppercase rounded">REST PERIOD:</span>
                    <span className="ml-2 font-bold text-sm uppercase text-green-600">OPTIMIZATION PHASE</span>
                    <div className="text-sm text-gray-700 space-y-2 mt-2">
                      <p>After the initial support phase, your body enters a critical period of adjustment and enhancement.</p>
                      <p>During this time, the powerful combination of ivermectin and fenbendazole continues to work, allowing your system to recharge and optimize its natural defense mechanisms.</p>
                      <p>Many users notice <strong className="text-green-600">sustained energy levels</strong> and <strong className="text-green-600">a greater sense of well-being</strong> as their bodies further adapt to the detox process.</p>
                      <p>This essential phase ensures that your body maintains its progress, reinforcing resilience at the cellular level where traditional methods often fall short.</p>
                    </div>
                    <div className="mt-3">
                      <img 
                        src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=600" 
                        alt="Couple enjoying better health"
                        className="w-full h-40 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                {/* Stage 3 */}
                <div className="flex items-start mb-4 relative">
                  {/* Dot */}
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-green-500 rounded-full mt-2 ml-[-30px] border-2 border-white shadow"></div>
                  </div>
                  {/* Content */}
                  <div className="ml-4 flex-1">
                    <span className="bg-green-600 text-white px-3 py-1 text-xs font-bold uppercase rounded">FINAL STAGE:</span>
                    <span className="ml-2 font-bold text-sm uppercase text-green-600">CONTINUED SUPPORT</span>
                    <div className="text-sm text-gray-700 space-y-2 mt-2">
                      <p>As your body completes the detox process, the focus shifts to long-term maintenance and resilience. This phase ensures that the benefits achieved during the initial stages are sustained over time.</p>
                      <p>By continuing to <strong className="text-green-600">reinforce natural defense mechanisms</strong>, your system remains strong and protected against future imbalances. <strong className="text-green-600">Many users experience enhanced vitality, improved overall wellness, and long-lasting energy levels.</strong></p>
                      <p>This final stage helps establish a stable foundation for optimal health, allowing you to maintain the results and continue feeling your best.</p>
                    </div>
                    <div className="mt-3">
                      <img 
                        src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=600" 
                        alt="Healthy active lifestyle"
                        className="w-full h-40 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
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
                      src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=600" 
                      alt="Initial support phase"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Stage 2 - Right Side */}
              <div className="relative mb-16">
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
                      src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=600" 
                      alt="Couple enjoying better health"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Stage 3 - Left Side */}
              <div className="relative mb-16">
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
                      src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=600" 
                      alt="Healthy active lifestyle"
                      className="w-full h-48 object-cover rounded-lg"
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
        {/* Decorative leaves */}
        <div className="absolute top-6 left-4 hidden lg:block" style={{ height: '35rem', width: '28rem' }}>
          <img src="/images/falling-green-leaves-natures-graceful-dance 2.png" alt="" className="w-full h-full object-contain transform rotate-12" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Left side - Product Image (left on desktop, first on mobile) */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-1">
            <img
              src="/images/3productimages.png"
              alt="CellTox Quality Products"
              className="w-full max-w-sm sm:max-w-md lg:w-[28rem] lg:h-[30rem] object-contain lg:ml-12"
            />
          </div>

          {/* Right side - Content (right on desktop, after image on mobile) */}
          <div className="text-center lg:text-left order-2 lg:order-2 mt-6 lg:mt-0">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">QUALITY GUARANTEED</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 sm:mb-8">
              CellTox is a breakthrough supplement family with two powerful compounds that work together to support
              cellular health and overall wellness. Our products are manufactured in FDA-approved facilities using the
              highest quality standards and ingredients. Our commitment to quality means you can trust that you're
              getting exactly what's on the label, every time.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 rounded-md shadow-lg w-full sm:w-auto">
              SHOP NOW →
            </Button>
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
            className="w-[150vw] lg:w-[50vw] h-auto object-contain"
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