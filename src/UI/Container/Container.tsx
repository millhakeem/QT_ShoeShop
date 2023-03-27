import { classNames } from '@/helpers/classNames';
import { ReactNode } from 'react';
import cls from './Container.module.scss';

interface ContainerProps {
    className?: string;
    children: ReactNode;
}

export const Container = (props: ContainerProps) => {
    const { children, className } = props;
    return <div className={classNames(cls.container, {}, [className])}>{children}</div>;
};
