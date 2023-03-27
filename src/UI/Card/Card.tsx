import { classNames, Mods } from '@/helpers/classNames';
import { HTMLAttributes, memo, ReactNode } from 'react';

import cls from './Card.module.scss';

export type CardTheme = 'normal' | 'outlined';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
    max?: boolean;
}

export const Card = memo((props: CardProps) => {
    const { className, children, theme = 'normal', max = false, ...otherProps } = props;

    const mods: Mods = {
        [cls.max]: max,
    };

    return (
        <div
            className={classNames(cls.Card, mods, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    );
});