import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";
import Footer from "@/components/Footer";

// className="flex-grow mt-32 mx-5"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "Home Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className=" bg-white text-black min-h-screen">
          <Navbar />
          <div className="max-w-[1536px] ml-auto mr-auto p-8 md:p-0">
            {children}
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
