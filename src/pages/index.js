import Image from "next/image";
import { Inter } from "next/font/google";
import Gallery from '../components/Gallery'
import ResponsiveAppBar from '../components/ResponsiveAppBar'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <main
        className={`max-w-6xl mx-auto ${inter.className}`}
      >
        <Gallery></Gallery>
      </main>
    </div>
  );
}

  // <main
    //   className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    // >
