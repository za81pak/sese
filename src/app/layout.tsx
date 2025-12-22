import type { Metadata } from "next";
import { Playfair_Display, Open_Sans } from "next/font/google";
import "./globals.css";
import FixMobileJump from '../app/components/FixMobileJump';
import Header from "@/widgets/header";

const playFairDisplay = Playfair_Display ({
    variable: "--font-playfair",
    subsets: ["latin", "cyrillic"],
    weight: ["400", "500", "600", "700", "800", "900"],


});

const openSans = Open_Sans ({
    variable: "--font-open-sans",
    subsets: ["latin", "cyrillic"],
    weight: ["300", "400", "500", "600", "700",],


});

export const metadata: Metadata = {
  title: "rgd",
  description: "сайт ржд медецины",
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${playFairDisplay.variable}  font-sans bg-white-  text-white/60 antialiased`}>
      <FixMobileJump />
            <Header/>


        {children}
      </body>
    </html>
  );
}

