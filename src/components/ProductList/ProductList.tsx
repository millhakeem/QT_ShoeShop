import { classNames } from '@/helpers/classNames';
import { Product } from '@/types';
import { memo } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';

export interface ProductListProps {
    clasName?: string;
    products: Product[];
}

export const ProductList = memo((props: ProductListProps) => {
    const { products, clasName } = props;

    return (
        <div className={classNames('', {}, [clasName])}>
            {products &&
                products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
        </div>
    );
});
