import { classNames } from '@/helpers/classNames';
import { imageLoader } from '@/helpers/imageLoader';
import { Product } from '@/types';
import { Button, Card } from '@/UI';
import { Badge, BadgeVariant } from '@/UI/Badge/Badge';
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
            </div>
            <div className={cls.cardCaption}>
                <h4 className={cls.captionTitle}>{product.title}</h4>
                <span className={cls.captionBrand}>от: {product.brand}</span>
            </div>
            <div className={cls.cardFooter}>
                <div className={cls.badge_container}>
                    {product.badge &&
                        product.badge?.map((b) => (
                            <Badge
                                key={b}
                                type={b as BadgeVariant}
                            />
                        ))}
                </div>
                <Button className={cls.cardButton}>В корзину</Button>
            </div>
        </Card>
    );
});
