import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mama Pilar App",
  description: "Mama Pilar App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="flex flex-col min-h-screen">
          <div className="flex-1">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
