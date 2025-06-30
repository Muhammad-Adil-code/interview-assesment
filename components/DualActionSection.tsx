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
      {/* Decorative Green Leaf Top Left */}
      <div className="absolute top-0 left-0 z-0 -mt-6 sm:mt-8"
        style={{ width: '7.5rem', height: '7.5rem' }}
      >
        <img
          src="/images/falling-green-leaves-natures-graceful-dance 2.png"
          alt="Green leaf"
          className="w-full h-full object-contain mb-16 lg:mb-0 lg:w-96 lg:h-96"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4 sm:mb-6 tracking-wide">
            <span className="text-gray-900">HOW CELLTOX'S </span>
            <span className="text-green-600">DUAL-ACTION </span>
            <span className="text-gray-900">FORMULA </span>
            <span className="text-green-600">FIGHTS BACK</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-800 max-w-3xl mx-auto font-medium">
            CellTox targets all three vulnerabilities through its powerful
            <br className="hidden sm:block" />
            dual-action formula:
          </p>
        </div>

        {/* Top Content Area - Ingredient Cards */}
        <div className="mb-12 sm:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {/* Ivermectin Card */}
            <Card className="bg-white shadow-lg border-0 rounded-lg w-full">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
                  <span className="text-green-600">NOBEL PRIZE WINNING</span> IVERMECTIN:
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {ivermectinBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-800 leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Fenbendazole Card */}
            <Card className="bg-white shadow-lg border-0 rounded-lg w-full">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-green-600 mb-3 sm:mb-4">FENBENDAZOLE:</h3>
                <div className="space-y-2 sm:space-y-3">
                  {fenbendazoleBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-800 leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Content Area - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Left Column - Synergy Text & Button */}
          <div className="space-y-4 sm:space-y-6 lg:pl-12">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                When these two compounds work together in the{" "}
                <span className="text-green-600 font-bold">precise ratio found in CellTox</span>, they create a
                synergistic effect that's greater than either compound alone.
              </h2>

              <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                This comprehensive approach helps{" "}
                <span className="font-bold text-gray-900">support your body's natural defenses</span> while{" "}
                <span className="font-bold text-gray-900">
                  targeting cancer cells through multiple pathways simultaneously
                </span>
                .
              </p>
            </div>

            {/* Shop Now Button */}
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-md shadow-lg w-full sm:max-w-xs">
              SHOP NOW →
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
      </div>
    </div>
  )
}