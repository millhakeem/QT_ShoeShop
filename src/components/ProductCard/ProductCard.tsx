import { classNames } from '@/helpers/classNames';
import { imageLoader } from '@/helpers/imageLoader';
import { Product } from '@/types';
import { Button, Card } from '@/UI';
import Image from 'next/image';
import { memo } from 'react';

import cls from './ProductCard.module.scss';

interface ProductCardProps {
    className?: string;
    product: Product;
}

// TODO create a badge UI-component

export const ProductCard = memo((props: ProductCardProps) => {
    const { product, className } = props;

    return (
        <Card className={classNames(cls.ProductCard, {}, [className])}>
            <div className={cls.imageWrapper}>
                <Image
                    loader={imageLoader}
                    priority
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes='270'
                />
                {/* {product.badge && <Badge text={product.badge} />} */}
            </div>
            <div className={cls.cardCaption}>
                <h4 className={cls.captionTitle}>{product.title}</h4>
                <span className={cls.captionBrand}>от: {product.brand}</span>
            </div>
            <Button className={cls.cardButton}>В корзину</Button>
        </Card>
    );
});
