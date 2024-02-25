import MainNavigation from "./components/main-navigation";
import "./globals.css";
import { Inter } from "next/font/google";
import { VT323 } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
const vt323 = VT323({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-vt323",
});
const designer = localFont({
  src: "../../public/fonts/Designer.otf",
  variable: "--font-designer",
});
const osake = localFont({
  src: "../../public/fonts/Osake.otf",
  variable: "--font-osake",
});

let title = "Cyber Kyodai";
let description =
  "A competitive and strategic on-chain game where Kyodais fight for dominance of Neo Tokyo underworld.";
let ogimage = "./public/vercel.svg"; // TODO change to image to embed twitter
let sitename = "cyberkyodai.com";

// set dynamic metadata based on route
export const metadata = {
  title,
  description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: "https://localhost:3000", //change to website URL
    siteName: sitename,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html style={{ scrollBehavior: "smooth" }} lang="en">
      {/* <body className={inter.className}> */}
      <body
        className={`${vt323.variable} ${designer.variable} ${osake.variable}`}
      >
        <MainNavigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
