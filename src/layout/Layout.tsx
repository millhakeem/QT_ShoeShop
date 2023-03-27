import { FunctionComponent, ReactNode } from 'react';
import { Header } from './Header/Header';
import cls from './Layout.module.scss';

export interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={cls.wrapper}>
            <Header />
            {children}
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T) {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};
