import { Logo, Navbar } from '@/UI';
import { Container } from '@/UI/Container/Container';
import { memo } from 'react';
import cls from './Header.module.scss';

export const Header = memo(() => {
    return (
        <header className={cls.header}>
            <Container className={cls.header_container}>
                <Logo />
                <Navbar />
            </Container>
        </header>
    );
});
