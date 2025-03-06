import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const lemonada = Poppins({ subsets: ["latin"], weight: ["400", "600", "800"] });

export const metadata: Metadata = {
  title: "Maksym Kondratov",
  description: "Created by Maksym Kondratov",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lemonada.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
