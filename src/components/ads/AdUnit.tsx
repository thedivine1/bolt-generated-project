import React, { useEffect, useRef } from 'react';

interface AdUnitProps {
  adSlot: string;
  calculatorType?: string;
  format?: 'banner' | 'rectangle' | 'leaderboard';
}

const AdUnit = ({ adSlot, calculatorType = 'general', format = 'banner' }: AdUnitProps) => {
  const adRef = useRef<HTMLDivElement>(null);
  const isClient = typeof window !== 'undefined';

  const getAdDimensions = (format: string) => {
    switch (format) {
      case 'rectangle':
        return { width: 300, height: 250 };
      case 'leaderboard':
        return { width: 728, height: 90 };
      default:
        return { width: 320, height: 90 }; // banner
    }
  };

  const { width, height } = getAdDimensions(format);

  useEffect(() => {
    if (isClient && adRef.current && (window as any).googletag) {
      const googletag = (window as any).googletag;
      googletag.cmd.push(() => {
        googletag.defineSlot(adSlot, [width, height], adRef.current.id)
          ?.addService(googletag.pubads())
          ?.setTargeting('calculator', calculatorType);

        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
        googletag.display(adRef.current.id);
      });
    }
  }, [adSlot, width, height, calculatorType]);

  return (
    <div 
      ref={adRef}
      id={`ad-${adSlot}-${Math.random().toString(36).substring(7)}`}
      className="bg-muted/30"
      style={{
        minHeight: height,
        minWidth: width,
        margin: '0 auto',
      }}
    />
  );
};

export default AdUnit;
