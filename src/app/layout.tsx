import { Roboto } from "next/font/google";
import "./globals.css";
import ToggleTheme from "../components/toggleTheme";

// Mengimpor font Roboto
const roboto = Roboto({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Authentication",
  description: "Authentication",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-lightBg dark:bg-darkBg`}>
        <ToggleTheme />
        {children}
      </body>
    </html>
  );
}
