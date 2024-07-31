import Image from "next/image";
import { Inter } from "next/font/google";
import Gallery from "../components/Gallery";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import NayyaraLayout from "../components/NayyaraLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const ClientID = process.env.NEXT_PUBLIC_CLIENT_ID;

  return (
    <div>
      {/* <ResponsiveAppBar></ResponsiveAppBar> */}
      {ClientID == 2 ? (
        <NayyaraLayout>
          <main
            className={`max-w-6xl mx-auto ${inter.className} mt-14 pt-96 px-10 pb-20`}
          >
            <Gallery></Gallery>
          </main>
        </NayyaraLayout>
      ) : (
        <div>
          <section
            className="container-fluid mb-4 has-image-bg title-hero text-bg-dark min-h-64 pt-16 pl-12"
            style={{
              backgroundColor: "rgb(50,24,54)",
              backgroundImage:
                "linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 100%), url('/path-to-your-image.jpg')",
            }}
          >
            <h1 className="text-white text-5xl font-thin">
              YOUR WEDDING GALLERY
            </h1>
          </section>
          <main
            className={`max-w-6xl mx-auto ${inter.className} mt-14 px-10 pb-20`}
          >
            <Gallery></Gallery>
          </main>
        </div>
      )}
    </div>
  );
}

// <main
//   className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
// >
