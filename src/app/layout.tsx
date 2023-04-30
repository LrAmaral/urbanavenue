// These styles apply to every route in the application
import Head from "next/head";
import "./globals.css";
import { Vollkorn } from "@next/font/google";

const vollkorn = Vollkorn({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "UrbanAvenue",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/Urban-logo.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <body
        className={`scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-300 ${vollkorn.className}`}
      >
        {children}
      </body>
    </html>
  );
}
