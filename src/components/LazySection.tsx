import React, { lazy, Suspense } from 'react';

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
}

const LazySection: React.FC<LazySectionProps> = ({ 
  children, 
  fallback = <div className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>,
  className = ""
}) => {
  return (
    <Suspense fallback={fallback}>
      <div className={className}>
        {children}
      </div>
    </Suspense>
  );
};

export default LazySection;