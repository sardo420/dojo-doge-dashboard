import React from 'react';
import { MessageCircle, BarChart3, ExternalLink } from 'lucide-react';

interface SocialLinksProps {
  contractAddress: string;
}

export const SocialLinks = ({ contractAddress }: SocialLinksProps) => {
  return (
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
  );
};