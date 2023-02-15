import { classNames } from 'shared/lib/classNames';
import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';


export enum AppLinkThemes {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkThemes
}

export function AppLink(props: AppLinkProps) {
    const {
        to,
        className,
        children,
        theme = AppLinkThemes.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames({ mainCls: cls.link, additional: [className, cls[theme]] })}
            {...otherProps}
        >
            {children}
        </Link>
    );
}