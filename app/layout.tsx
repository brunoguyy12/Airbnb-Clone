import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import ClientOnly from "./Components/ClientsOnly";
import RegisterModal from "./Components/modals/RegisterModal";
import ToastProvider from "./providers/ToasterProvider";
import LoginModal from "./Components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./Components/modals/RentModal";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <ToastProvider />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
