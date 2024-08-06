import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import "@/styles/globals.css";
import { WeddingProvider } from "@/contexts/WeddingContext";
import { AuthProvider } from "@/contexts/AuthContext";

export default function App({ Component, pageProps }) {
  return (
    <AppCacheProvider {...pageProps}>
      <AuthProvider>
        <WeddingProvider>
          <Component {...pageProps} />
        </WeddingProvider>
      </AuthProvider>
    </AppCacheProvider>
  );
}
