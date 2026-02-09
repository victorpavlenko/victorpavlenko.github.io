import { useRef, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const CHARS = '{}[]<>|/\\$01';

const LEVEL_CONFIG = {
    1: { fontSize: 11, fps: 12, fadeAlpha: 0.05, dimChance: 0.5, resetChance: 0.975 },
    2: { fontSize: 10, fps: 22, fadeAlpha: 0.04, dimChance: 0.6, resetChance: 0.965 },
    3: { fontSize: 9,  fps: 32, fadeAlpha: 0.03, dimChance: 0.7, resetChance: 0.950 },
    4: { fontSize: 7,  fps: 48, fadeAlpha: 0.02, dimChance: 0.85, resetChance: 0.930 },
};

const MatrixRain = () => {
    const canvasRef = useRef(null);
    const { matrixLevel } = useTheme();
    const cfg = LEVEL_CONFIG[matrixLevel] || LEVEL_CONFIG[1];

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height, columns, drops;

        const init = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            columns = Math.floor(width / cfg.fontSize) + 1;
            drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));
        };

        init();
        window.addEventListener('resize', init);

        let animId;
        let last = 0;
        const interval = 1000 / cfg.fps;

        const draw = (time) => {
            animId = requestAnimationFrame(draw);
            if (time - last < interval) return;
            last = time;

            ctx.fillStyle = `rgba(0, 0, 0, ${cfg.fadeAlpha})`;
            ctx.fillRect(0, 0, width, height);

            for (let i = 0; i < drops.length; i++) {
                const char = CHARS[Math.floor(Math.random() * CHARS.length)];
                const x = i * cfg.fontSize;
                const y = drops[i] * cfg.fontSize;

                ctx.fillStyle = '#aaffaa';
                ctx.font = `bold ${cfg.fontSize}px 'Share Tech Mono', monospace`;
                ctx.fillText(char, x, y);

                if (Math.random() > (1 - cfg.dimChance)) {
                    const dimChar = CHARS[Math.floor(Math.random() * CHARS.length)];
                    ctx.fillStyle = `rgba(0, ${140 + Math.random() * 80}, 30, 0.6)`;
                    ctx.font = `${cfg.fontSize}px 'Share Tech Mono', monospace`;
                    ctx.fillText(dimChar, x, y - cfg.fontSize * 2);
                }

                if (y > height && Math.random() > cfg.resetChance) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        animId = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', init);
        };
    }, [cfg]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none"
            style={{ zIndex: 0 }}
        />
    );
};

export default MatrixRain;
