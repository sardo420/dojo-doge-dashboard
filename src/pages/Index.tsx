import { MetricCard } from "@/components/MetricCard";
import { SocialLink } from "@/components/SocialLink";
import { ContractAddress } from "@/components/ContractAddress";
import { Twitter, Globe, BarChart3, ExternalLink } from "lucide-react";

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
          backgroundImage: 'url("/lovable-uploads/129cdd43-185d-4ed6-b9bd-7dbe99b817a2.png")',
          backgroundSize: "75%",
          backgroundPosition: "center",
          filter: "brightness(0.8) contrast(1.1)",
          transform: "scale(1.1)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 min-h-screen flex flex-col items-center justify-center">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fadeIn [animation-delay:200ms]">
          <h1 className="text-6xl font-bold text-white mb-4">
            DojoDoge
          </h1>
          <p className="text-dojo-light text-xl max-w-2xl mx-auto">
            The cryptocurrency that embodies the spirit of the Dojo
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto mb-16 animate-fadeIn [animation-delay:400ms]">
          <MetricCard title="Market Cap" value={tokenMetrics.marketCap} />
          <MetricCard title="Circulation" value={tokenMetrics.circulation} />
          <MetricCard title="Holders" value={tokenMetrics.holders} />
        </div>

        {/* Links Section */}
        <div className="flex flex-col items-center gap-8 mb-16 animate-fadeIn [animation-delay:600ms]">
          <div className="flex flex-wrap justify-center gap-4">
            <SocialLink
              icon={Twitter}
              href="https://twitter.com/dojodoge"
              label="Twitter"
            />
            <SocialLink
              icon={Globe}
              href="https://dojodoge.com"
              label="Website"
            />
            <SocialLink
              icon={BarChart3}
              href="https://dexscreener.com/dojodoge"
              label="DEX Screener"
            />
            <SocialLink
              icon={ExternalLink}
              href={`https://solscan.io/token/${contractAddress}`}
              label="Solscan"
            />
          </div>
        </div>

        {/* Contract Address */}
        <div className="w-full max-w-2xl mx-auto animate-fadeIn [animation-delay:800ms]">
          <h2 className="text-white text-xl mb-4 text-center">Contract Address</h2>
          <ContractAddress address={contractAddress} />
        </div>
      </div>
    </div>
  );
};

export default Index;