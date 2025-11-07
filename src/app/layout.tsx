import type { Metadata } from "next";
import Menu from "./components/Menu/menu";
import Footer from "./components/Footer/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Destinos de Viagem",
  description: "Explore os melhores destinos de viagem ao redor do mundo.",
  icons: {
    icon: "/imgs/logo.webp",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
