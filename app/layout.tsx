import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/ui/Footer";
import { Providers } from "@/providers/ThemeProvider";
import AuthProvider from "@/providers/AuthProvider";

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
      <body className={`${inter.className} dark:bg-[#161616] dark:text-white `}>
        <AuthProvider>
          <Providers>
            <div className="min-h-screen ">
              <Navbar />
              <div className="mt-6 ">{children}</div>
              <Footer />
            </div>
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
