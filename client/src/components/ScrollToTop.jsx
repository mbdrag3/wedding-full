import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // try window first
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    // if the root element is the scroller
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.scrollTo({ top: 0, behavior: 'smooth' });

    // if your main wrapper scrolls (adjust selector if needed)
    const container = document.querySelector('.app-container');
    if (container) container.scrollTo({ top: 0, behavior: 'smooth' });

    if (process.env.NODE_ENV !== 'production') {
      console.log('[ScrollToTop] scrolled on route', pathname);
    }
  }, [pathname]);

  return null;
}
