import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Academy of Technology",
  description: "Where aspiration meets success",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={`${inter.className}`}>{children}</body>
      {/* <div>Footer</div> have to render condintioanlly according to pathname */}
    </html>
  );
}
