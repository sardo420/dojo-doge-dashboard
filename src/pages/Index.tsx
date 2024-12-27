import { MetricCard } from "@/components/MetricCard";
import { SocialLink } from "@/components/SocialLink";
import { ContractAddress } from "@/components/ContractAddress";
import { Twitter, MessageCircle, BarChart3, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const tokenMetrics = {
    marketCap: "$10.5M",
    circulation: "1B DOJO",
    holders: "15,000+",
  };

  const contractAddress = "0x1234...5678";

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-dojo to-black">
      {/* First Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 opacity-40 bg-blend-overlay -z-10"
        style={{
          backgroundImage: 'url("/lovable-uploads/4183c626-f78e-4e7f-957f-5f48277d742a.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          maskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex flex-col items-center">
        {/* Hero Section */}
        <div className="text-center mb-0 animate-fadeIn [animation-delay:200ms] mt-2">
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
        <div className="flex flex-col items-center gap-6 mb-6 animate-fadeIn [animation-delay:600ms] relative z-20">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://x.com/dojodoge"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm cursor-pointer"
            >
              <svg className="w-5 h-5 text-dojo-light group-hover:text-white transition-colors" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
              <span className="text-dojo-light group-hover:text-white transition-colors">X</span>
            </a>
            <a
              href="https://t.me/dojodoge"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 text-dojo-light group-hover:text-white transition-colors" />
              <span className="text-dojo-light group-hover:text-white transition-colors">Telegram</span>
            </a>
            <div className="flex items-center gap-2">
              <a
                href="https://dexscreener.com/dojodoge"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm cursor-pointer"
              >
                <BarChart3 className="w-5 h-5 text-dojo-light group-hover:text-white transition-colors" />
                <span className="text-dojo-light group-hover:text-white transition-colors">DEX Screener</span>
              </a>
              <a
                href={`https://solscan.io/token/${contractAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm cursor-pointer"
              >
                <ExternalLink className="w-5 h-5 text-dojo-light group-hover:text-white transition-colors" />
                <span className="text-dojo-light group-hover:text-white transition-colors">Solscan</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contract Address */}
        <div className="w-full max-w-2xl mx-auto animate-fadeIn [animation-delay:800ms] relative z-20 mb-12">
          <h2 className="text-white text-xl mb-4 text-center">Contract Address</h2>
          <ContractAddress address={contractAddress} />
        </div>

        {/* New Placeholder Paragraph Box */}
        <div className="w-full max-w-2xl mx-auto mb-24 animate-fadeIn [animation-delay:900ms] relative z-20">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-white text-xl mb-4">About DojoDoge</h3>
            <p className="text-dojo-light leading-relaxed">
              Join the most ambitious meme coin project on Solana. DojoDoge combines the playful spirit of meme coins with real utility and community governance. Our mission is to create a decentralized ecosystem that rewards holders and contributes to the broader Solana ecosystem.
            </p>
          </div>
        </div>

        {/* Bottom Image with Gradient Transition */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[100vh] -z-10"
          style={{
            backgroundImage: 'url("/lovable-uploads/b513bfe2-91cf-454c-9651-3124b114ef60.png")',
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            maskImage: "linear-gradient(to top, black 80%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to top, black 80%, transparent 100%)",
            opacity: 0.6,
            marginTop: "10vh", // Creates space between background images
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