import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SocialLinkProps {
  icon: LucideIcon;
  href: string;
  label: string;
  className?: string;
}

export const SocialLink = ({ icon: Icon, href, label, className }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300",
        "hover:bg-white/10 backdrop-blur-sm",
        className
      )}
    >
      <Icon className="w-5 h-5 text-dojo-light group-hover:text-white transition-colors" />
      <span className="text-dojo-light group-hover:text-white transition-colors">{label}</span>
    </a>
  );
};