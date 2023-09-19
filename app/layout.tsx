import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FloridaBlanca - Bar à Poulpe",
  description: "Generated by create next app",
  icons: "/logo.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>FloridaBlanca - Bar à Poulpe</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta name="keywords" content="" />
        <meta property="og:title" content="FloridaBlanca - Bar à Poulpe" />
        <meta charSet="utf-8"></meta>
        <link rel="icon" href="/logo.png"></link>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
