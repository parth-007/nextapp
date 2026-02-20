import "./globals.css";
import { Roboto } from "next/font/google";
import { Noto_Sans_Thai } from "next/font/google";


export const metadata = {
    title: {
        default: "My Website",
        template: "%s | My Website",
    },
    openGraph: {
        title: "My Website",
        description: "This is the description of my website",
        url: "https://www.mywebsite.com",
        siteName: "My Website",
        images: [
            {url: "/x.jpeg", width: 1200, height: 630},
        ],
    },
    description: "This is the description of my website",
    keywords: ["website", "next.js", "react"],
    authors: [{name: "Parth", url: "https://www.parth.com"}, {name: "John", url: "https://www.john.com"}],
    robots: "index, follow",
    canonical: "https://www.mywebsite.com",
    icons: {
        icon: "/x.jpeg",
    },
    twitter: {
        card: "summary_large_image",
        title: "My Website",
        description: "This is the description of my website",
        images: ["/x.jpeg"],
    },
}

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
const notoSansThai = Noto_Sans_Thai({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-thai",
});
export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html>
            <body className={`${roboto.variable} ${notoSansThai.variable}`}>{children}</body>
        </html>
    );
}