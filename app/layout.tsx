import type { Metadata } from "next";
import { Inter as InterFont } from 'next/font/google';
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";

const inter = InterFont({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Vinz Portfolio",
  description: "Esse é o meu portfólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        {children}
        <StarsCanvas/>
      </body>
    </html>
  );
}
