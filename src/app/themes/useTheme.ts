import { useContext } from "react";
import { ThemeContext, LOCAL_STORAGE_THEME_KEY, Themes } from "./ThemeContext";

interface UseThemeResult {
    theme: Themes
    toggleTheme: () => void
}

export function useTheme(): UseThemeResult {

    const { theme, setTheme } = useContext(ThemeContext)

    function toggleTheme() {
        const newThemeValue = theme === 'light' ? 'dark' : 'light';
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newThemeValue)
        setTheme(newThemeValue)
    }

    return {
        theme,
        toggleTheme
    }
}