import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import AuthComponent from "@/components/AuthComponent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Room-Ease</title>
      </Head>
      <div>
        <AuthComponent />
      </div>
    </>
  );
}
