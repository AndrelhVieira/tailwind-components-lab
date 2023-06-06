import { Menu } from "./components/Menu";
import "./globals.css";

export const metadata = {
  title: "Tailwind CSS",
  description: "Learnig tailwid from docs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex bg-gray-800 text-white">
        <Menu />
        {children}
      </body>
    </html>
  );
}
