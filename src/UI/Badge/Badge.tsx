/* eslint-disable indent */
import { classNames } from '@/helpers/classNames';
import { memo } from 'react';
import cls from './Badge.module.scss';
import { FaHotjar } from 'react-icons/fa';
import { MdFiberNew } from 'react-icons/md';

export type BadgeVariant = 'new' | 'top';

interface BadgeProps {
    className?: string;
    type: BadgeVariant;
}

export const Badge = memo((props: BadgeProps) => {
    const { className, type } = props;

    let content;

    switch (type) {
        case 'new':
            content = <MdFiberNew />;
            break;
        case 'top':
            content = <FaHotjar />;
            break;
        default:
            content = null;
            break;
    }

    return <div className={classNames(cls.badge, {}, [className, cls[type]])}>{content}</div>;
});
