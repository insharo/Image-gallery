import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AppCacheProvider {...pageProps}>
      <Component {...pageProps} />
    </AppCacheProvider>
  );
}
