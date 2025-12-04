import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "MBTA Monitoring App",
  description: "Author: Seth Culberson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-teal-800">
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
