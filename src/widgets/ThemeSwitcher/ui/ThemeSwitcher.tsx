import { useTheme } from 'app/themes';
import { classNames } from 'shared/lib/classNames';
import cls from './ThemeSwitcher.module.scss';


interface ThemeSwitcherProps {
    className?: string;
}

export function ThemeSwitcher(props: ThemeSwitcherProps) {
    const { className } = props;

    const { theme, toggleTheme } = useTheme()

    return (
        <button
            className={classNames({ mainCls: null, additional: [className] })}
            onClick={toggleTheme}
        >
            Сменить тему
        </button>
    );
}