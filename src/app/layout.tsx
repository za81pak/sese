import type { Metadata } from "next";
import { Playfair_Display, Open_Sans } from "next/font/google";
import "./globals.css";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${playFairDisplay.variable}  font-sans bg-white-  text-white/60 antialiased`}>
            <Header/>


        {children}
      </body>
    </html>
  );
}

