import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: {
    mobile?: string;
    tablet?: string;
    desktop?: string;
  };
  quality?: number;
}

const Image = ({ 
  src, 
  alt, 
  className = '', 
  sizes = {
    mobile: '320w',
    tablet: '768w',
    desktop: '1200w'
  },
  quality = 70 
}: ImageProps) => {
  const getWebPUrl = (url: string, width: number) => {
    const baseUrl = url.split('?')[0];
    return `${baseUrl}?w=${width}&q=${quality}&fmt=webp`;
  };

  return (
    <picture>
      <source
        media="(min-width: 1024px)"
        srcSet={getWebPUrl(src, 1200)}
        type="image/webp"
      />
      <source
        media="(min-width: 768px)"
        srcSet={getWebPUrl(src, 768)}
        type="image/webp"
      />
      <source
        media="(min-width: 320px)"
        srcSet={getWebPUrl(src, 320)}
        type="image/webp"
      />
      <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        decoding="async"
      />
    </picture>
  );
};

export default Image;
