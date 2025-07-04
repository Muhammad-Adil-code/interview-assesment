import { ShieldCheck, Truck, Leaf } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />, // Lucide Leaf icon
    text: (
      <span className="text-xs sm:text-sm">
        Third-Party Tested<br />for Purity
      </span>
    ),
  },
  {
    icon: <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />, // Lucide ShieldCheck icon
    text: (
      <span className="text-xs sm:text-sm">
        256-bit Secure<br />Checkout
      </span>
    ),
  },
  {
    icon: <Truck className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />, // Lucide Truck icon
    text: (
      <span className="text-xs sm:text-sm">
        Free, Fast Shipping From<br />Our US Warehouse
      </span>
    ),
  },
];

export default function TrustBar() {
  // Duplicate features for smooth marquee
  const marqueeFeatures = [...features, ...features, ...features];
  return (
    <>
      {/* Mobile version: new style */}
      <div className="block sm:hidden w-full px-2 py-3">
        <div className="bg-[#F6FFF2] border border-[#19C900] rounded-xl flex justify-between items-center px-3 py-4" style={{ minHeight: 80 }}>
          {/* Feature 1 */}
          <div className="flex flex-col items-center flex-1">
            <span className="flex items-center justify-center border-2 border-dashed border-[#19C900] rounded-lg p-2 mb-2">
              <ShieldCheck className="w-6 h-6 text-[#19C900]" />
            </span>
            <span className="text-[15px] text-black text-center leading-tight font-normal">256-Bit Secure<br />Checkout</span>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center flex-1">
            <span className="flex items-center justify-center border-2 border-dashed border-[#19C900] rounded-lg p-2 mb-2">
              <Truck className="w-6 h-6 text-[#19C900]" />
            </span>
            <span className="text-[15px] text-black text-center leading-tight font-normal">Fast, Free Shipping<br />From Our US Warehouse</span>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center flex-1">
            <span className="flex items-center justify-center border-2 border-dashed border-[#19C900] rounded-lg p-2 mb-2">
              <Leaf className="w-6 h-6 text-[#19C900]" />
            </span>
            <span className="text-[15px] text-black text-center leading-tight font-normal">Third-Party Tested<br />for Purity</span>
          </div>
        </div>
      </div>
      {/* Desktop version: keep existing marquee style */}
      <div className="hidden sm:block w-full py-2 sm:py-3 overflow-hidden border-b border-green-100" style={{ backgroundColor: '#F0FFED' }}>
        <div className="relative w-full">
          <div
            className="flex items-center animate-marquee gap-0"
            style={{ minWidth: '200%' }}
          >
            {marqueeFeatures.map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-2 sm:gap-3 px-3 sm:px-6 border-r border-green-200 last:border-none min-w-max"
              >
                <span className="bg-white border border-green-400 rounded-md p-1.5 sm:p-2 flex items-center justify-center mr-1 sm:mr-2">
                  {feature.icon}
                </span>
                <span className="text-xs sm:text-sm text-green-800 font-medium leading-tight text-left">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          @media (max-width: 640px) {
            .animate-marquee {
              animation: marquee 20s linear infinite;
            }
          }
        `}</style>
      </div>
    </>
  );
} 