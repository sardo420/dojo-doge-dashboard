import { ContractAddress } from "@/components/ContractAddress";
import { MessageCircle } from "lucide-react";
import { Hero } from "@/components/Hero";
import { MetricsGrid } from "@/components/MetricsGrid";
import { SocialLinks } from "@/components/SocialLinks";

const Index = () => {
  const tokenMetrics = {
    marketCap: "$10.5M",
    circulation: "1B DOJO",
    holders: "15,000+",
  };

  const contractAddress = "0x1234...5678";

  return (
    <div className="min-h-screen bg-dojo relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("/lovable-uploads/dbd55c84-2d2d-48c0-9056-44ac9cccccc5.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
        }}
      />

      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-dojo/60 to-black/90"
        style={{ opacity: 0.9 }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex flex-col items-center">
        <Hero />
        <MetricsGrid {...tokenMetrics} />
        <SocialLinks contractAddress={contractAddress} />

        {/* Contract Address */}
        <div className="w-full max-w-2xl mx-auto animate-fadeIn [animation-delay:800ms] relative z-20 mb-12">
          <h2 className="text-white text-xl mb-4 text-center">Contract Address</h2>
          <ContractAddress address={contractAddress} />
        </div>

        {/* About Section */}
        <div className="w-full max-w-2xl mx-auto mb-24 animate-fadeIn [animation-delay:900ms] relative z-20">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-white text-xl mb-4">About DojoDoge</h3>
            <p className="text-dojo-light leading-relaxed">
              Join the most ambitious meme coin project on Solana. DojoDoge combines the playful spirit of meme coins with real utility and community governance. Our mission is to create a decentralized ecosystem that rewards holders and contributes to the broader Solana ecosystem.
            </p>
          </div>
        </div>

        {/* Bottom Image */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[100vh]"
          style={{
            backgroundImage: 'url("/lovable-uploads/b513bfe2-91cf-454c-9651-3124b114ef60.png")',
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            maskImage: "linear-gradient(to top, black 80%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to top, black 80%, transparent 100%)",
            opacity: 0.6,
            marginTop: "10vh",
          }}
        />

        {/* Telegram Button */}
        <div className="relative z-20 mt-8 mb-16 animate-fadeIn">
          <a 
            href="https://t.me/dojodoge" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-purple-600/80 to-blue-500/80 hover:from-purple-600 hover:to-blue-500 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer backdrop-blur-sm border border-white/10"
          >
            <MessageCircle className="w-6 h-6" />
            Find out who will join our Dojo next!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
