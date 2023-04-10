'use client';
import { ArrowLongUpIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return isVisible ? (
    <button
      type="button"
      className="umami--click--totop fixed transition-all z-50 bottom-8 right-8 inline-flex items-center rounded-full border border-black bg-white/70 backdrop-blur-sm p-3 text-zinc-600 hover:bg-zinc-50"
      onClick={handleScrollToTop}
    >
      <ArrowLongUpIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  ) : null;
}

export default ScrollToTop; 