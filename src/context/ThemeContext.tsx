import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type ThemeContextType = {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: {children : ReactNode}) => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === 'dark' ? true : false
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useDarkMode = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    
    if (!context) {
        throw new Error("useDarkMode must be used within a ThemeProvider");
    }

    return context;
};


export default ThemeProvider;
