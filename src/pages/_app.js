import Layout from "@/components/layout";
import { useRouter } from 'next/router';
import Loading from './Loading/index';
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import Notification from "@/components/globalComponents/Notification";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
    };

    const handleComplete = () => {
      setIsLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

