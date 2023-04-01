import { Mods, classNames } from '@/helpers/classNames';
import { ReactNode } from 'react';
import cls from './Button.module.scss';

export type ButtonTheme = 'default' | 'success' | 'danger';

export type ButtonSize = 'size_m' | 'size_lg';

export type ButtonWidth = 'full' | 'fit';

type ButtonElements = 'button' | 'a';

type ButtonProps<T extends ButtonElements | React.ComponentType> = {
    className?: string;
    theme?: ButtonTheme;
    size?: ButtonSize;
    width?: ButtonWidth;
    disabled?: boolean;
    as?: T;
    children?: ReactNode;
} & ButtonAdditionalProps<T>;

type ButtonAdditionalProps<T extends ButtonElements | React.ComponentType> =
    T extends keyof JSX.IntrinsicElements
        ? JSX.IntrinsicElements[T]
        : React.ComponentPropsWithoutRef<T>;

export const Button = <T extends ButtonElements | React.ComponentType<any> = 'button'>(
    props: ButtonProps<T>,
) => {
    const {
        children,
        className,
        theme = 'default',
        size = 'size_m',
        disabled,
        width = 'fit',
        as,
        ...otherProps
    } = props;

    const ButtonComponent = as || 'button';

    const mods: Mods = {
        [cls.disabled]: disabled,
    };

    return (
        <ButtonComponent
            className={classNames(cls.Button, mods, [className, cls[theme], cls[size], cls[width]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </ButtonComponent>
    );
};
