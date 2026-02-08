import { useState, useEffect, useCallback, useRef } from 'react';

const SECTIONS = ['introduction', 'skills', 'experience', 'contact'];
const MOBILE_BP = 765;

function isMobile() {
  return window.innerWidth <= MOBILE_BP;
}

export function useHashNav(scrollContainerRef) {
  const [activeSection, setActiveSection] = useState('introduction');
  const isScrollingRef = useRef(false);

  const scrollTo = useCallback((sectionId) => {
    const el = document.getElementById(sectionId);
    const container = scrollContainerRef?.current;
    if (!el) return;

    isScrollingRef.current = true;
    setActiveSection(sectionId);
    window.history.replaceState(null, '', `#${sectionId}`);

    if (isMobile()) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (container) {
      const left = el.offsetLeft - container.offsetLeft;
      container.scrollTo({ left, behavior: 'smooth' });
    }

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  }, [scrollContainerRef]);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && SECTIONS.includes(hash)) {
      setTimeout(() => {
        scrollTo(hash);
      }, 100);
    }
  }, [scrollTo]);

  useEffect(() => {
    const container = scrollContainerRef?.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return;

        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
            window.history.replaceState(null, '', `#${id}`);
            break;
          }
        }
      },
      {
        root: isMobile() ? null : container,
        threshold: isMobile() ? 0.3 : 0.5,
      }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [scrollContainerRef]);

  return { activeSection, scrollTo };
}
