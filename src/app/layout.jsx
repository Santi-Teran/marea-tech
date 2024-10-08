import { Comfortaa } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import CallToAction from "@/components/CallToAction";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: "/logo.png",
  },
  title: "Marea Tech",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Metaetiqueta para la verificación del dominio de Facebook */}
        <meta
          name="facebook-domain-verification"
          content="vi924l7ia8aklhqgh6t7rlcv072udf"
        />
      </head>
      <body
        className={`${comfortaa.className} dark:bg-dark-blue dark:text-arena`}
      >
        <NavBar />
        {children}
        <FloatingWhatsAppButton />
        <CallToAction />
        <Footer />
      </body>
    </html>
  );
}
