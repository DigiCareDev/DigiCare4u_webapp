import '@/app/globals.css'; // Import global styles
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
