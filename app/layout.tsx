import type { Metadata } from "next";
import "./ui/css/globals.css";
import "./ui/css/flaticon.css";
import "./ui/css/bootstrap.min.css";
import "./ui/css/bootsnav.css";
import "./ui/css/style.css";
import "./ui/css/font-awesome.min.css";
import "./ui/css/responsive.css";
import "./ui/css/slick-theme.css";
import "./ui/css/slick.css";
import { poppins } from '@/app/ui/fonts/fonts';
import Head from "next/head";

export const metadata: Metadata = {
  title: "Test Pedro Coellar",
  description: "Next.js test",
  keywords: ["Restaurants", "Automotive", "Health Care", "Real State"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Directory Landing Page</title>
      </Head>
      <link rel="prefetch" href="/images/welcome-hero/banner.webp" />
      <body className={`${poppins.className} antialiased`}>{children}</body>

    </html>
  );
}
