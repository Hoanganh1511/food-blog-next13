import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans, League_Spartan } from "next/font/google";
import ReactQueryProvider from "@/provider/ReactQueryProvider";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/config/site";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});
const league_spartan = League_Spartan({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-league-spartan",
});
export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Server Actions",
    "Tuananh.Cookies",
    "TuananhCookies",
    "Blogger",
  ],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  creator: "Tuấn Anh Cookies",
  authors: [
    {
      name: "Tuấn Anh Cookies",
      url: "https://github.com/anhht1511",
    },
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` ${league_spartan.variable}  ${dm_sans.variable}`}>
        <ReactQueryProvider>
          <div className="dark:bg-dark font-league-spartan min-h-screen">
            <main className="relative">{children}</main>
          </div>
        </ReactQueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
