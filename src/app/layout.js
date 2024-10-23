import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "fonts/suravaram-Regular.ttf",
  variable: "--font-suravaram-Regular-sans",
  weight: "400",
});

const geistMono = localFont({
  src: "fonts/suravaram-Regular.ttf", 
  variable: "--font-suravaram-Regular-mono",
  weight: "400", 
});

export const metadata = {
  title: "BM Social Welfare Trust",
  description: "BM Social Welfare Trust",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
