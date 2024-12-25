import { MetricCard } from "@/components/MetricCard";
import { SocialLink } from "@/components/SocialLink";
import { ContractAddress } from "@/components/ContractAddress";
import { Twitter, MessageCircle, BarChart3, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  // These would come from your API or be updated dynamically
  const tokenMetrics = {
    marketCap: "$10.5M",
    circulation: "1B DOJO",
    holders: "15,000+",
  };

  const contractAddress = "0x1234...5678"; // Replace with actual address

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-dojo to-black">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 opacity-20 bg-blend-overlay"
        style={{
          backgroundImage: 'url("/lovable-uploads/4183c626-f78e-4e7f-957f-5f48277d742a.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.7) contrast(1.2)",
          transform: "scale(1.1)",
          height: "50vh", // Reduced from 50vh
          maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex flex-col items-center">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fadeIn [animation-delay:200ms] mt-8"> {/* Reduced from mt-8 */}
          <img 
            src="/lovable-uploads/5730045a-4732-4583-835d-0b37acb24824.png" 
            alt="DojoDoge Logo" 
            className="h-72 mx-auto mb-0 drop-shadow-[0_0_50px_rgba(255,255,255,0.15)]"
          />
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto mb-6 animate-fadeIn [animation-delay:400ms]">
          <MetricCard title="Market Cap" value={tokenMetrics.marketCap} />
          <MetricCard title="Circulation" value={tokenMetrics.circulation} />
          <MetricCard title="Holders" value={tokenMetrics.holders} />
        </div>

        {/* Links Section */}
        <div className="flex flex-col items-center gap-6 mb-6 animate-fadeIn [animation-delay:600ms]">
          <div className="flex flex-wrap justify-center gap-4">
            <SocialLink
              icon={Twitter}
              href="https://twitter.com/dojodoge"
              label="Twitter"
            />
            <SocialLink
              icon={MessageCircle}
              href="https://t.me/dojodoge"
              label="Telegram"
            />
            <SocialLink
              icon={BarChart3}
              href="https://dexscreener.com/dojodoge"
              label="DEX Screener"
            />
          </div>
        </div>

        {/* Contract Address */}
        <div className="w-full max-w-2xl mx-auto animate-fadeIn [animation-delay:800ms]">
          <h2 className="text-white text-xl mb-4 text-center">Contract Address</h2>
          <ContractAddress address={contractAddress} />
          <div className="mt-4 flex justify-center mb-16"> {/* Increased from mb-16 */}
            <SocialLink
              icon={ExternalLink}
              href={`https://solscan.io/token/${contractAddress}`}
              label="Solscan"
            />
          </div>
        </div>

        {/* Bottom Image with Gradient Transition */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[50vh] z-0" // Increased from 50vh
          style={{
            backgroundImage: 'url("/lovable-uploads/b513bfe2-91cf-454c-9651-3124b114ef60.png")',
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            maskImage: "linear-gradient(to top, black 80%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to top, black 80%, transparent 100%)",
            opacity: 0.3,
          }}
        />

        {/* Telegram Button */}
        <div className="relative z-20 mt-32 mb-8 animate-fadeIn">
          <a 
            href="https://t.me/dojodoge" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
          >
            <MessageCircle className="w-6 h-6" />
            Join our Telegram now!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
