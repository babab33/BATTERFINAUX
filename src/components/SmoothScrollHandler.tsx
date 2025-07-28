import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SmoothScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if we're on the spring lawn care blog post page
    const isSpringLawnCarePost = location.pathname === '/blog/spring-lawn-care-tips';
    
    if (isSpringLawnCarePost) {
      // Implement subtle upward-then-downward scroll animation
      const performScrollAnimation = () => {
        // Start at the very top
        window.scrollTo({ top: 0, behavior: 'auto' });
        
        // Small delay to ensure page is fully loaded
        setTimeout(() => {
          // Scroll slightly upward (negative value creates upward motion)
          window.scrollTo({ top: -20, behavior: 'smooth' });
          
          // Then gently scroll back down to natural top position
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }, 300); // 0.3 seconds for upward motion
          
        }, 100); // Initial delay
      };

      performScrollAnimation();
    }
  }, [location.pathname]);

  return null;
};

export default SmoothScrollHandler;