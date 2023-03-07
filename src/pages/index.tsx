import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>AMAZON PRIME</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/dist/output.css" rel="stylesheet" />
      </Head>
      <main>
        <Navbar />
        <main className="bg-[#0f161f]">
          <div>jsqh</div>
        </main>
        <Footer />
      </main>
    </>
  );
}
