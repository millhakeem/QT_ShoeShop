import { Pagination, ProductList } from '@/components';
import { classNames } from '@/helpers/classNames';
import { paginate } from '@/helpers/paginate';
import { Product } from '@/types';
import { memo, useMemo, useState } from 'react';
import cls from './ProductGridWithPagination.module.scss';

interface ProductGridWithPaginationProps {
    className?: string;
    products: Product[];
}

const PAGE_SIZE = 12;

export const ProductGridWithPagination = memo((props: ProductGridWithPaginationProps) => {
    const { className, products } = props;
    const [currentPage, setCurrentPage] = useState<number>(1);

    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };

    const paginatedProducts = useMemo(
        () => paginate(products, currentPage, PAGE_SIZE),
        [currentPage, products],
    );

    return (
        <div className={classNames(cls.gridWrapper, {}, [className])}>
            <ProductList
                clasName={cls.productGrid}
                products={paginatedProducts}
            />
            <Pagination
                items={products.length}
                currentPage={currentPage}
                pageSize={PAGE_SIZE}
                onPageChange={onPageChange}
            />
        </div>
    );
});
