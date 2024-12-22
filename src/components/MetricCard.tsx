import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  className?: string;
}

export const MetricCard = ({ title, value, className }: MetricCardProps) => {
  return (
    <div className={cn(
      "bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 transition-all duration-300 hover:scale-105",
      className
    )}>
      <h3 className="text-dojo-light text-sm mb-2">{title}</h3>
      <p className="text-white text-2xl font-bold">{value}</p>
    </div>
  );
};