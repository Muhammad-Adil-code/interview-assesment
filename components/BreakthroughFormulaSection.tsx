'use client';

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function BreakthroughFormulaSection() {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold mb-6">
            <span className="text-gray-900">CELLTOX: </span>
            <span className="text-green-600">BREAKTHROUGH FORMULA</span>
            <span className="text-gray-900"> SUPPORTS </span>
            <span className="text-green-600">CELLULAR HEALTH</span>
          </h1>
          <p className="text-base text-gray-700 max-w-4xl mx-auto leading-relaxed">
            CellTox works differently from ordinary supplements, instead of just providing general nutrients to
            nourish, our formula works directly at the cellular level, specifically designed to disrupt what can harm
            your cells and promote cellular health. Together, these compounds work in a synergistic way.
          </p>
        </div>

        {/* Cell Diagram Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-16">
          {/* Left Cell Group - Clustered */}
          <div className="flex flex-col items-center">
            <div className="relative w-48 h-48 mb-4">
              <img src="/images/celluler1.png" alt="Disorganized Cells" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Dotted Arrow with Text */}
          <div className="flex flex-col items-center">
            <svg width="120" height="40" viewBox="0 0 120 40" className="mb-4">
              <path d="M 10 20 L 100 20" stroke="#22c55e" strokeWidth="2" strokeDasharray="4 4" fill="none" />
              <path d="M 95 15 L 105 20 L 95 25" stroke="#22c55e" strokeWidth="2" fill="none" />
            </svg>
            <p className="text-xs text-gray-600 text-center max-w-xs">
              Our formula combines two powerful yet scientifically
              <br />
              researched compounds
            </p>
          </div>

          {/* Right Cell Group - Organized Grid */}
          <div className="flex flex-col items-center">
            <div className="relative w-48 h-48 mb-4">
              <img src="/images/celluler2.png" alt="Organized Cells" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        {/* New Two-Column Feature Section - Exact Screenshot Match */}
        <div className="mb-12">
          {/* Intro Text */}
          <div className="text-center mb-8">
            <span className="text-base text-gray-900">
              Our formula combines <b>two powerful</b> and <b>scientifically researched</b> compounds:
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column: Ivermectin */}
            <div className="py-12">
              <h3 className="text-lg font-extrabold uppercase mb-2 text-gray-900">
                1. <span className="text-gray-900">NOBEL-PRIZE WINNING</span> <span className="text-green-600">IVERMECTIN:</span>
              </h3>
              <p className="text-base text-gray-800 mb-4">
                This remarkable compound works by targeting specific cellular mechanisms that abnormal cells rely on.
              </p>
              <div className="flex items-center gap-4 mb-4 min-h-[240px]">
                <img
                  src="/images/dna-virus-interaction.jpeg/203b60a3d8f05d65b459b57c3fda5258.jpg"
                  alt="Abstract Cell"
                  className="w-44 h-56 rounded-lg object-cover flex-shrink-0"
                />
                <div className="bg-green-50 border border-green-400 rounded-lg p-4 text-sm text-gray-800 flex-1 flex items-center min-h-[240px]">
                  <span>
                    Research indicates it can <b className="text-green-700 font-bold">help disrupt the growth and spread of these cells</b> while supporting your immune system's <b className="text-green-700 font-bold">ability to identify and respond to them</b>.
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                With a long history of safe use, ivermectin has gained attention for its potential in supporting cellular health.
              </p>
            </div>
            {/* Right Column: Fenbendazole */}
            <div className="py-12">
              <h3 className="text-lg font-extrabold uppercase mb-2 text-gray-900">
                2. <span className="text-gray-900">PHARMACEUTICAL-GRADE</span> <span className="text-green-600">FENBENDAZOLE:</span>
              </h3>
              <p className="text-base text-gray-800 mb-4">
                Originally researched for other applications, fenbendazole has shown impressive results in supporting cellular health.
              </p>
              <div className="flex items-center gap-4 mb-4 min-h-[240px]">
                <img
                  src="/images/dna-virus-interaction.jpeg/203b60a3d8f05d65b459b57c3fda5258.jpg"
                  alt="Abstract Cell"
                  className="w-44 h-56 rounded-lg object-cover flex-shrink-0"
                />
                <div className="bg-green-50 border border-green-400 rounded-lg p-4 text-sm text-gray-800 flex-1 flex items-center min-h-[240px]">
                  <span>
                    It works by targeting cellular energy production – <b className="text-green-700 font-bold">helping cut off the fuel supply</b> that abnormal cells need to <b className="text-green-700 font-bold">grow and multiply</b>, while having <b className="text-green-700 font-bold">minimal impact on healthy cells</b>.
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                This selective approach is why many researchers have become increasingly interested in its potential applications.
              </p>
            </div>
          </div>
        </div>

        {/* Shop Now Button */}
        <div className="text-center">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-12 py-4 rounded-md shadow-lg">
            SHOP NOW →
          </Button>
        </div>
      </div>
    </div>
  )
}