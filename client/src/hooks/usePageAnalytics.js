// src/hooks/usePageAnalytics.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function usePageAnalytics() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-4XVV2TRRHT', { page_path: pathname });
    }
  }, [pathname]);
}
