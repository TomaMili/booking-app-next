import Navigation from "./_components/Navigation";
import Logo from "./_components/Logo";

import "@/app/_styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-blue-400 bg-">
        <header>
          <Logo />
        </header>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
