import { Mail, Linkedin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const navItems = [
    { sectionId: 'introduction', label: 'Home' },
    { sectionId: 'skills', label: 'Skills' },
    { sectionId: 'experience', label: 'Experience' },
    { sectionId: 'contact', label: 'Contact' },
];

const pillars = [
    'UX Engineering',
    'Crypto',
    'Fintech',
    'AI',
];


const Sidebar = ({ activeSection, onNavigate }) => {
    const { isMatrix, enterMatrix } = useTheme();

    return (
        <aside className="fixed left-0 top-0 h-screen w-52 bg-ink text-newsprint z-50 flex flex-col max-md:fixed max-md:w-full max-md:h-auto border-r-2 border-ink" id="menu">
            <div className="p-6 text-center max-md:p-2 relative">
                <div className="text-xs tracking-[0.4em] uppercase text-newsprint/50" style={{ fontFamily: "'Oswald', sans-serif" }}>PAVLENKO</div>
                <button onClick={() => onNavigate('introduction')} className="text-2xl relative tracking-wider cursor-pointer" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    FullStack JS
                </button>
            </div>

            <div className="flex flex-wrap justify-center gap-1 px-6 pb-6 max-md:hidden">
                {pillars.map((pillar) => (
                    <span key={pillar} className="px-2 py-1 border border-brand/30 text-brand text-xs tracking-wider uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
                        {pillar}
                    </span>
                ))}
                {!isMatrix ? <span onClick={enterMatrix} className="cursor-not-allowed px-2 py-1 border border-brand/30 text-brand/40 text-xs tracking-wider uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    Do not click
                </span> : null}
            </div>

            <nav className="mt-auto flex flex-col max-md:flex-row max-md:flex-nowrap max-md:justify-center max-md:pb-0 max-md:pt-2 py-6 max-md:gap-0">
                {navItems.map(({ sectionId, label }) => (
                    <button
                        key={sectionId}
                        onClick={() => onNavigate(sectionId)}
                        className={`max-md:w-1/4 px-6 py-2.5 text-xs tracking-[0.25em] uppercase transition-colors text-left cursor-pointer max-md:text-center max-md:px-3 max-md:py-2 flex items-center justify-between max-md:justify-center gap-2 ${
                            activeSection === sectionId
                                ? 'text-brand bg-brand/10'
                                : 'text-newsprint/60 hover:text-newsprint'
                        }`}
                        style={{ fontFamily: "'Oswald', sans-serif" }}
                    >
                        {label}
                        {activeSection === sectionId && <span className="max-md:hidden w-1.5 h-1.5 rounded-full bg-brand shrink-0" />}
                    </button>
                ))}
            </nav>

            <div className="px-0 py-6  max-md:hidden">
                <p className="text-xs text-newsprint/40 leading-relaxed text-center mb-3 italic" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                    Let's build something great together
                </p>

                <div className="flex justify-center gap-3">
                    <a href="mailto:pavlenkovictor92@gmail.com" target="_blank" className="text-newsprint/40 hover:text-brand transition-colors">
                        <Mail size={14} />
                    </a>
                    <a href="https://www.linkedin.com/in/victor-pavlenko/" target="_blank" className="text-newsprint/40 hover:text-brand transition-colors">
                        <Linkedin size={14} />
                    </a>
                    <a href="https://www.upwork.com/freelancers/~016ea051ceaaf85ca4" target="_blank" className="text-newsprint/40 hover:text-brand transition-colors text-xs leading-sm" style={{ fontFamily: "'Oswald', sans-serif" }}>
                        Upwork
                    </a>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
