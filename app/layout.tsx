import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/theme/globals.css";
import "@/theme/icons.css";

const roboto = localFont({
  src: [
    {
      path: "../fonts/Roboto-100.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/Roboto-300.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Roboto-400.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Roboto-500.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Roboto-700.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Roboto-900.ttf",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Christian Keller",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
