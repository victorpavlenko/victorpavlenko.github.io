import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const MATRIX_NAME = {
    1: 'ヴィクトル',
    2: 'ヴィ░ト▒ル',
    3: '█▓░▒▓█▒░▓',
    4: '██████████',
};

const MATRIX_GREETING = {
    1: '>_',
    2: '>_ERR',
    3: '>>>>>>',
    4: '█████',
};

const Introduction = () => {
    const { isMatrix, matrixLevel, matrixExited, clearExited } = useTheme();
    const [showCreep, setShowCreep] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = '/images/me-creep.png';
    }, []);

    useEffect(() => {
        if (!matrixExited) return;

        const showTimer = setTimeout(() => {
            setShowCreep(true);

            const hideTimer = setTimeout(() => {
                setShowCreep(false);
                clearExited();
            }, 500);

            return () => clearTimeout(hideTimer);
        }, 1000);

        return () => clearTimeout(showTimer);
    }, [matrixExited, clearExited]);

    const photoUrl = showCreep
        ? '/images/me-creep.png'
        : '/images/me.jpg';

    return (
        <article className="relative h-full min-h-screen max-md:min-h-dvh bg-ink">
            <div className="absolute bottom-0 right-0 z-20 p-8 max-w-md max-md:p-5 max-md:max-w-full">
                <h2 className="border-none text-newsprint uppercase text-5xl max-md:text-3xl font-black leading-tight tracking-wide" style={{ fontFamily: isMatrix ? undefined : "'Playfair Display', Georgia, serif" }}>
                    <span className="text-brand">{isMatrix ? (MATRIX_GREETING[matrixLevel] || '>_') : 'Hello.'}</span><br/>
                    {isMatrix ? (MATRIX_NAME[matrixLevel] || 'ヴィクトル') : "I'm Victor"}
                </h2>
                <div className="rule-double my-4" style={{ borderColor: 'var(--color-newsprint)' }} />
                <span className="block text-newsprint/90 uppercase text-xs tracking-[0.3em]" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    {isMatrix && matrixLevel >= 3
                        ? '░▒▓█ ████████ ████ █ ██ █████'
                        : 'FullStack JavaScript Lead \u00b7 14 Years'
                    }
                </span>
                <p className="text-newsprint/50 text-sm mt-3 italic leading-relaxed">
                    {isMatrix && matrixLevel >= 3
                        ? '█▓░▒ · ░▒▓█ · ▓█▓░ · ▒░ · ▓█'
                        : isMatrix
                            ? '350K+ merchants · 5M+ users · ₿ · AI · UX'
                            : <>350K+ merchants &middot; 5M+ users &middot; Crypto &middot; AI &middot; UX</>
                    }
                </p>
            </div>

            <div
                className="absolute top-0 left-0 w-full h-full bg-ink bg-contain bg-no-repeat max-md:bg-cover max-md:bg-center transition-none contrast-75 grayscale sepia-[0.15]"
                style={{ backgroundImage: `url(${photoUrl})` }}
            />
        </article>
    );
}

export default Introduction;
