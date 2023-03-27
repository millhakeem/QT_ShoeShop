import { Mods, classNames } from '@/helpers/classNames';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import cls from './Button.module.scss';

export type ButtonTheme = 'default' | 'success' | 'danger';

export type ButtonSize = 'size_m' | 'size_lg';

export type ButtonWidth = 'full' | 'fit';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    size?: ButtonSize;
    width?: ButtonWidth;
    disabled?: boolean;
    children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const {
        children,
        className,
        theme = 'default',
        size = 'size_m',
        disabled,
        width = 'fit',
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.disabled]: disabled,
    };

    return (
        <button
            type='button'
            className={classNames(cls.Button, mods, [className, cls[theme], cls[size], cls[width]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
