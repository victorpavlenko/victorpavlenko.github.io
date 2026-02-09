import { useTheme } from '../contexts/ThemeContext';

const LEVELS = {
    1: { scale: 4,  baseFreq: '0.02 0.03', blur: 0,   scanOpacity: 0.12, scanSize: 2, vignetteStart: 40, vignetteOpacity: 0.50, glowOpacity: 0.03 },
    2: { scale: 10, baseFreq: '0.04 0.06', blur: 0,   scanOpacity: 0.25, scanSize: 3, vignetteStart: 30, vignetteOpacity: 0.65, glowOpacity: 0.05 },
    3: { scale: 22, baseFreq: '0.05 0.08', blur: 0.5, scanOpacity: 0.40, scanSize: 3, vignetteStart: 20, vignetteOpacity: 0.80, glowOpacity: 0.08 },
    4: { scale: 45, baseFreq: '0.07 0.12', blur: 2.5, scanOpacity: 0.55, scanSize: 4, vignetteStart: 10, vignetteOpacity: 0.90, glowOpacity: 0.12 },
};

const CrtEffect = () => {
    const { matrixLevel } = useTheme();
    const lvl = LEVELS[matrixLevel] || LEVELS[1];

    return (
        <>
            <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
                <defs>
                    <filter id="crt-warp" x="-10%" y="-10%" width="120%" height="120%">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency={lvl.baseFreq}
                            numOctaves="4"
                            seed="3"
                            result="noise"
                        />
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="noise"
                            scale={lvl.scale}
                            xChannelSelector="R"
                            yChannelSelector="G"
                            result="displaced"
                        />
                        {lvl.blur > 0 && (
                            <feGaussianBlur in="displaced" stdDeviation={lvl.blur} />
                        )}
                    </filter>
                </defs>
            </svg>

            <div
                className="fixed inset-0 pointer-events-none"
                style={{
                    zIndex: 9999,
                    background: `repeating-linear-gradient(
                        0deg,
                        transparent 0px,
                        transparent ${lvl.scanSize}px,
                        rgba(0, 0, 0, ${lvl.scanOpacity}) ${lvl.scanSize}px,
                        rgba(0, 0, 0, ${lvl.scanOpacity}) ${lvl.scanSize * 2}px
                    )`,
                }}
            />

            <div
                className="fixed inset-0 pointer-events-none"
                style={{
                    zIndex: 9998,
                    background: `radial-gradient(ellipse at center, transparent ${lvl.vignetteStart}%, rgba(0, 6, 1, ${lvl.vignetteOpacity}) 100%)`,
                }}
            />

            <div
                className="fixed inset-0 pointer-events-none"
                style={{
                    zIndex: 9997,
                    background: `radial-gradient(ellipse at 65% 20%, rgba(0, 255, 65, ${lvl.glowOpacity}) 0%, transparent 40%)`,
                }}
            />

            {matrixLevel >= 4 && (
                <div
                    className="fixed inset-0 pointer-events-none"
                    style={{
                        zIndex: 9996,
                        backgroundColor: 'rgba(0, 20, 5, 0.4)',
                        mixBlendMode: 'multiply',
                    }}
                />
            )}
        </>
    );
};

export default CrtEffect;
