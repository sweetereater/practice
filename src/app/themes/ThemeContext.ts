import { createContext } from "react";

export type Themes = 'light' | 'dark';

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export interface ThemeContextProps {
    theme?: Themes
    setTheme: (theme: Themes) => void
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: 'light',
    setTheme: () => null,
});
