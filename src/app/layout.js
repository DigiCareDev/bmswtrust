import "./globals.css";

export const metadata = {
  title: "BM Social Welfare Trust",
  description: "BM Social Welfare Trust",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
