import React, { useState } from 'react';

interface ImageOptimizedProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  placeholder?: string;
  style?: React.CSSProperties;
  loading?: 'lazy' | 'eager';
  [key: string]: any;
}

const ImageOptimized: React.FC<ImageOptimizedProps> = ({
  src,
  alt,
  className = '',
  priority = false,
  placeholder,
  style,
  loading = 'lazy',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  // Create optimized image URLs for different sizes
  const getOptimizedUrl = (url: string, width?: number) => {
    if (url.includes('pexels.com')) {
      // For Pexels images, we can add size parameters
      const baseUrl = url.split('?')[0];
      return width ? `${baseUrl}?auto=compress&cs=tinysrgb&w=${width}` : `${baseUrl}?auto=compress&cs=tinysrgb&w=1200`;
    }
    return url;
  };

  const optimizedSrc = getOptimizedUrl(src);

  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      {/* Placeholder/Loading state */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          {placeholder && (
            <div className="text-gray-400 text-sm">{placeholder}</div>
          )}
        </div>
      )}
      
      {/* Main image */}
      {!hasError && (
        <img
          src={optimizedSrc}
          alt={alt}
          loading={priority ? 'eager' : loading}
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          style={style}
          {...props}
        />
      )}
      
      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-gray-400 text-sm">Image unavailable</div>
        </div>
      )}
    </div>
  );
};

export default ImageOptimized;