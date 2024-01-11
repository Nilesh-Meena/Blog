import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "@/providers/ThemeProvider";

// className="flex-grow mt-32 mx-5"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Blogs",
  description: "Home Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} dark:bg-bgDark dark:text-white `}>
        <Providers>
          <div className="  min-h-screen">
            <Navbar />
            <div className="wrapper mt-12  md:mt-32 ">{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
