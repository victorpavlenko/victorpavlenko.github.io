import { useRef, useEffect } from 'react';
import { useHashNav } from './hooks/useHashNav';
import { useTheme } from './contexts/ThemeContext';
import Sidebar from './components/Sidebar';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import MatrixRain from './components/MatrixRain';
import CrtEffect from './components/CrtEffect';

const sections = [
  { id: 'introduction', Component: Introduction },
  { id: 'skills', Component: Skills },
  { id: 'experience', Component: Experience },
  { id: 'contact', Component: Contact },
];

function App() {
  const scrollRef = useRef(null);
  const { activeSection, scrollTo } = useHashNav(scrollRef);
  const { isMatrix, matrixExited } = useTheme();

  useEffect(() => {
    if (matrixExited) {
      scrollTo('introduction');
    }
  }, [matrixExited]);

  useEffect(() => {
    ['/images/me.webp', '/images/me-matrxi-1.webp', '/images/me-matrxi-2.webp', '/images/me-creep.webp']
      .forEach(src => { const img = new Image(); img.src = src; });
  }, []);

  return (
    <div className="flex h-screen overflow-hidden max-md:flex-col max-md:h-auto max-md:overflow-visible">
      {isMatrix && <MatrixRain />}
      {isMatrix && <CrtEffect />}

      <Sidebar activeSection={activeSection} onNavigate={scrollTo} />

      <main
        ref={scrollRef}
        className="flex-1 flex ml-52 max-md:ml-0 overflow-x-auto no-scroll overflow-y-hidden snap-x snap-mandatory scroll-smooth max-md:flex-col max-md:overflow-visible max-md:snap-none max-md:flex-none"
        style={{ position: 'relative', zIndex: 1 }}
      >
        {sections.map(({ id, Component }) => {
          const isActive = activeSection === id;
          return (
            <section
              key={id}
              id={id}
              onClick={() => { if (!isActive) scrollTo(id); }}
              className={`max-md:min-h-dvh shrink-0 h-screen snap-start snap-always overflow-y-auto no-scroll transition-all duration-500 max-md:!h-auto max-md:!w-full max-md:!shrink max-md:!blur-none max-md:!opacity-100 max-md:!cursor-auto max-md:overflow-visible ${
                isActive
                  ? 'w-214 max-w-full'
                  : 'w-214 max-w-full blur-[1px] opacity-20 cursor-pointer'
              }`}
            >
              <Component />
            </section>
          );
        })}
      </main>
    </div>
  );
}

export default App;
