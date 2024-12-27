import React from 'react';
import { MetricCard } from './MetricCard';

interface MetricsGridProps {
  marketCap: string;
  circulation: string;
  holders: string;
}

export const MetricsGrid = ({ marketCap, circulation, holders }: MetricsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto mb-6 animate-fadeIn [animation-delay:400ms]">
      <MetricCard title="Market Cap" value={marketCap} />
      <MetricCard title="Circulation" value={circulation} />
      <MetricCard title="Holders" value={holders} />
    </div>
  );
};