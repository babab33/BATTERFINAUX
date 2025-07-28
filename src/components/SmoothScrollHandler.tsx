import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SmoothScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if we're on a blog post page
    const isBlogPost = location.pathname.startsWith('/blog/') && location.pathname !== '/blog';
    
    if (isBlogPost) {
      // Small delay to ensure the page has fully loaded
      const timer = setTimeout(() => {
        // First scroll to top instantly
        window.scrollTo({ top: 0, behavior: 'auto' });
        
        // Then smooth scroll to content after a brief moment
        const contentTimer = setTimeout(() => {
          const contentElement = document.getElementById('blog-content');
          if (contentElement) {
            contentElement.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start',
              inline: 'nearest'
            });
          }
        }, 100);

        return () => clearTimeout(contentTimer);
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return null;
};

export default SmoothScrollHandler;