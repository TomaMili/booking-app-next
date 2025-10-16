import Navigation from "./_components/Navigation";
import Logo from "./_components/Logo";

import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "./_styles/globals.css";
import Header from "./_components/Header";

export const metadata = {
  title: {
    template: "%s / The Booking App",
    default: "Welcome / The Booking App",
  },
  description: "Booking page for reserving hotel rooms in the forest hotel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen`}
      >
        <Header />
        <main className="text-4xl">{children}</main>
      </body>
    </html>
  );
}
