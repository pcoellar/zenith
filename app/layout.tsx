import type { Metadata } from "next";
import "./ui/css/globals.css";
import "./ui/css/linearicons.css";
import "./ui/css/animate.css";
import "./ui/css/flaticon.css";
import "./ui/css/slick.css";
import "./ui/css/slick-theme.css";
import "./ui/css/bootstrap.min.css";
import "./ui/css/bootsnav.css";
import "./ui/css/style.css";
import "./ui/css/responsive.css";
import "./ui/css/font-awesome.min.css";
import "./ui/css/responsive.css";
import "./ui/css/slick-theme.css";
import "./ui/css/slick.css";
import { poppins } from '@/app/ui/fonts/fonts';
import Script from "next/script";
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

      <body className={`${poppins.className} antialiased`}>{children}</body>

      <Script src="js/jquery.js" strategy="afterInteractive"></Script>            
      <Script src="js/bootstrap.min.js" strategy="afterInteractive"></Script>  
      <Script src="js/bootsnav.js" strategy="afterInteractive"></Script>
      <Script src="js/feather.min.js" strategy="afterInteractive"></Script>
      <Script src="js/waypoints.min.js" strategy="afterInteractive"></Script>
      <Script src="js/slick.min.js" strategy="afterInteractive"></Script>
      <Script src="js/jquery.counterup.min.js" strategy="lazyOnload"></Script>
      <Script src="js/custom.js" strategy="lazyOnload"></Script>
    </html>
  );
}
