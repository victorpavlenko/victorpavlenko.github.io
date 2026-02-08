import { useRef } from 'react';
import { useHashNav } from './hooks/useHashNav';
import Sidebar from './components/Sidebar';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

const sections = [
  { id: 'introduction', Component: Introduction },
  { id: 'skills', Component: Skills },
  { id: 'experience', Component: Experience },
  { id: 'contact', Component: Contact },
];

function App() {
  const scrollRef = useRef(null);
  const { activeSection, scrollTo } = useHashNav(scrollRef);

  return (
    <div className="flex h-screen overflow-hidden max-md:flex-col max-md:h-auto max-md:overflow-visible">
      <Sidebar activeSection={activeSection} onNavigate={scrollTo} />

      <main
        ref={scrollRef}
        className="flex-1 flex ml-52 max-md:ml-0 overflow-x-auto no-scroll overflow-y-hidden snap-x snap-mandatory scroll-smooth max-md:flex-col max-md:overflow-visible max-md:snap-none max-md:flex-none"
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
                  ? 'w-[850px] max-w-full'
                  : 'w-[850px] max-w-full blur-[1px] opacity-20 cursor-pointer'
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
