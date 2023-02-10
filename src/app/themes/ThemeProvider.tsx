import { FC, useMemo, useState } from 'react';
import { Themes, ThemeContext, LOCAL_STORAGE_THEME_KEY } from "./ThemeContext";

const ThemeProvider: FC = ({ children }) => {

    const [theme, setTheme] = useState<Themes>(
        localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes
        || 'light'
    );

    const themeValue = useMemo(() => {
        return {
            theme,
            setTheme
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={themeValue}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;