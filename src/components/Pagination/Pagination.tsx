import { classNames } from '@/helpers/classNames';
import { Card, Button, Input } from '@/UI';
import { memo } from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

import cls from './Pagination.module.scss';

interface PaginationProps {
    className?: string;
    items: number;
    pageSize: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

export const Pagination = memo((props: PaginationProps) => {
    const { className, items, pageSize = 12, currentPage, onPageChange } = props;

    const pagesCount = Math.ceil(items / pageSize);
    const isFirst = currentPage === 1;
    const isLast = currentPage === pagesCount;

    if (pagesCount === 1) return null;

    const prevHandler = () => {
        if (currentPage <= 1) {
            return;
        }
        onPageChange(currentPage - 1);
    };

    const nextHandler = () => {
        if (currentPage >= pagesCount) {
            return;
        }
        onPageChange(currentPage + 1);
    };

    return (
        <Card className={classNames(cls.Pagination, {}, [className])}>
            <Button
                className={cls.btn}
                disabled={isFirst}
                onClick={prevHandler}
            >
                <MdArrowBackIos />
            </Button>
            <Input
                className={cls.paginationInput}
                type='text'
                value={currentPage}
                readonly
            />
            <Button
                className={cls.btn}
                disabled={isLast}
                onClick={nextHandler}
            >
                <MdArrowForwardIos />
            </Button>
        </Card>
    );
});
