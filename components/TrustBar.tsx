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
    <div className="w-full bg-green-50 py-2 sm:py-3 overflow-hidden border-b border-green-100">
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
  );
} 