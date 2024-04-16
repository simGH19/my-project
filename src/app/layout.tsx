import type { Metadata } from "next";
import { Bebas_Neue, Inter, Lora, Poppins } from "next/font/google";
import { cn } from "./components/Utils/cn";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simon porfolio",
  description: "Simon porfolio",
};

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400"
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(poppins.variable, bebas.variable)}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
