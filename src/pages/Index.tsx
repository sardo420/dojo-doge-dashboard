import { MetricCard } from "@/components/MetricCard";
import { SocialLink } from "@/components/SocialLink";
import { ContractAddress } from "@/components/ContractAddress";
import { Twitter, MessageCircle, BarChart3, ExternalLink } from "lucide-react";

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
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-20 bg-blend-overlay"
        style={{
          backgroundImage: 'url("/lovable-uploads/4183c626-f78e-4e7f-957f-5f48277d742a.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.7) contrast(1.2)",
          transform: "scale(1.1)",
          height: "100vh",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-4 min-h-screen flex flex-col items-center">
        {/* Hero Section */}
        <div className="text-center mb-4 animate-fadeIn [animation-delay:200ms]">
          <img 
            src="/lovable-uploads/73c390be-2c30-45b4-83bd-264ba5051b45.png" 
            alt="DojoDoge Logo" 
            className="h-52 mx-auto mb-2 drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]"
          />
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto mb-8 animate-fadeIn [animation-delay:400ms]">
          <MetricCard title="Market Cap" value={tokenMetrics.marketCap} />
          <MetricCard title="Circulation" value={tokenMetrics.circulation} />
          <MetricCard title="Holders" value={tokenMetrics.holders} />
        </div>

        {/* Links Section */}
        <div className="flex flex-col items-center gap-8 mb-8 animate-fadeIn [animation-delay:600ms]">
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
          <div className="mt-4 flex justify-center">
            <SocialLink
              icon={ExternalLink}
              href={`https://solscan.io/token/${contractAddress}`}
              label="Solscan"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
