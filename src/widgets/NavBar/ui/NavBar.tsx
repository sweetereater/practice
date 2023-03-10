import { classNames } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/Link/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './NavBar.module.scss';


interface NavBarProps {
    className?: string;
}

export function NavBar(props: NavBarProps) {
    const { className } = props;

    return (
        <div className={classNames({ mainCls: cls.navbar, additional: [className] })}>
            <ThemeSwitcher />
            <div className={cls.links}>
                <AppLink to='/'>Главная</AppLink>
                <AppLink to='/about'>О сайте</AppLink>
            </div>
        </div>
    );
}