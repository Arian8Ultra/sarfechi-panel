import type { Metadata } from "next";
import "./globals.css";
import "@/assets/Webfonts/style.css";
import PanelMenu from "@/components/panelMenu/PanelMenu";
import { SidebarProvider } from "@/components/ui/sidebar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "پنل صرفه چی",
  description: "پنل صرفه چی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fa' dir='rtl'>
      <body className={`antialiased ss01 relative`}>
        <SidebarProvider dir="rtl">
          <div className='flex md:flex-row flex-col'>
            <PanelMenu />
            <div className='flex-[1]'>{children}</div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
