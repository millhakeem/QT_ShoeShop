import { classNames } from '@/helpers/classNames';
import cls from './Logo.module.scss';

interface LogoProps {
    className?: string;
}

export const Logo = ({ className }: LogoProps) => {
    return <h1 className={classNames(cls.logo, {}, [className])}>Shoes Shop</h1>;
};
