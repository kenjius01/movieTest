import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
    const [showChild, setShowChild] = useState<boolean>(false);
    useEffect(() => {
        setShowChild(true);
    }, []);

    if (!showChild) {
        return null;
    }

    if (typeof window === 'undefined') {
        return <></>;
    } else {
        return (
            <Layout>
                <Component {...pageProps} />
            </Layout>
        );
    }
}

export default MyApp;
