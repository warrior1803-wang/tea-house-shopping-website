"use client";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Provider } from "react-redux";
import { store } from "@/store/store";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200"], // Light weight
  variable: "--font-manrope",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased`}
      >
        <Provider store={store}>
          <Header />

          <main className="min-h-screen">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
