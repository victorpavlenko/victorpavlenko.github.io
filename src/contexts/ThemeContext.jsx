import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        try { return localStorage.getItem('theme') || 'newspaper'; } catch { return 'newspaper'; }
    });

    const [matrixLevel, setMatrixLevel] = useState(() => {
        try { return parseInt(localStorage.getItem('matrixLevel') || '0', 10); } catch { return 0; }
    });

    const [matrixExited, setMatrixExited] = useState(() => {
        try { return localStorage.getItem('matrixExited') === '1'; } catch { return false; }
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        if (theme === 'matrix') {
            document.documentElement.setAttribute('data-matrix-level', String(matrixLevel));
        } else {
            document.documentElement.removeAttribute('data-matrix-level');
        }
    }, [theme, matrixLevel]);

    const enterMatrix = () => {
        setTheme('matrix');
        setMatrixLevel(1);
        try {
            localStorage.setItem('theme', 'matrix');
            localStorage.setItem('matrixLevel', '1');
        } catch {}
        document.documentElement.setAttribute('data-theme', 'matrix');
        document.documentElement.setAttribute('data-matrix-level', '1');
    };

    const clearExited = () => {
        setMatrixExited(false);
        try { localStorage.removeItem('matrixExited'); } catch {}
    };

    const isMatrix = theme === 'matrix';

    return (
        <ThemeContext.Provider value={{ theme, isMatrix, matrixLevel, enterMatrix, matrixExited, clearExited }}>
            {children}
        </ThemeContext.Provider>
    );
};
