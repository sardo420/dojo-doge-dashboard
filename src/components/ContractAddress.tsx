import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ContractAddressProps {
  address: string;
}

export const ContractAddress = ({ address }: ContractAddressProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      toast.success("Address copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy address");
    }
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm">
      <code className="text-dojo-light flex-1 font-mono text-sm">
        {address}
      </code>
      <button
        onClick={copyToClipboard}
        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-500" />
        ) : (
          <Copy className="w-4 h-4 text-dojo-light" />
        )}
      </button>
    </div>
  );
};