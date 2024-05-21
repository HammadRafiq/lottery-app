import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const proxima = localFont({
  variable: '--font-proxima',
  src: [
    {
      path: '../public/fonts/Mark Simonson  Proxima Nova Regular.otf',
      style: 'normal',
      weight: '400'
    },
    {
      path: '../public/fonts/Mark Simonson  Proxima Nova Semibold.otf',
      style: 'semibold',
      weight: '600'
    },
    {
      path: '../public/fonts/Mark Simonson  Proxima Nova Bold.otf',
      style: 'bold',
      weight: '700'
    },
    {
      path: '../public/fonts/Mark Simonson  Proxima Nova Extrabold.otf',
      style: 'extrabold',
      weight: '800'
    }
  ]
})

export const metadata: Metadata = {
  title: "Lottery App",
  description: "A simple lottery web application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${proxima.variable} font-sans`}>
        <div className="flex justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
