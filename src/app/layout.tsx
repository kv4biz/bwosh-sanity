import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const openSans = Open_Sans({
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bwosh Interiors",
  description:
    "Explore exceptional interior designs crafted by Bwosh for stylish and functional living spaces.",
  icons: {
    icon: "/b-logo.svg",
  },
  keywords:
    "Interior design Nigeria, Home decor ideas Nigeria, Modern interior design Lagos, Contemporary home design Abuja, Luxury interior design Nigeria, Affordable interior design Nigeria, Custom home interiors Nigeria, Residential interior design Nigeria, Office interior design Nigeria, Hospitality interior design Nigeria, Kitchen design Nigeria, Living room design ideas Nigeria, Bedroom interior design Lagos, Bathroom design inspiration Nigeria, Dining room decor Nigeria, Luxury kitchen design Abuja, Small space interior design Nigeria, Kids' room decor Nigeria, Home office design Nigeria, Open-plan living design Nigeria, Modern decor ideas Nigeria, Contemporary design styles Nigeria, Minimalist interior design Nigeria, Industrial interior design Nigeria, Scandinavian decor Nigeria, Bohemian interior design Nigeria, Rustic home decor Nigeria, Eclectic interior design Lagos, Art deco design Nigeria, Traditional Nigerian interiors, Renovation services Nigeria, Home remodeling ideas Nigeria, Sustainable home design Nigeria, Interior painting services Nigeria, Lighting solutions Nigeria, Flooring options Nigeria, Ceiling designs Nigeria, Wall decor ideas Nigeria, Home automation Nigeria, Space-saving furniture Nigeria, Custom furniture Nigeria, Affordable furniture Lagos, Luxury furniture Abuja, Sofas and sectionals Nigeria, Dining tables Nigeria, Interior accessories Nigeria, Rugs and carpets Nigeria, Curtains and blinds Nigeria, Throw pillows Nigeria, Wall art Nigeria, Best interior designers Nigeria, Top interior design firms Lagos, Nigerian decor trends 2025, Interior design services Nigeria, Local furniture stores Nigeria, Interior contractors Nigeria, Home staging services Nigeria, Interior design blog Nigeria, Portfolio of interior designers Nigeria, Project management interiors Nigeria, Lagos interior design services, Abuja home decor ideas, Port Harcourt interior design, Kaduna home remodeling, Ibadan furniture stores, Benin City interior decor, Enugu kitchen design, Kano office interiors, Calabar home accessories, Jos luxury interiors, Interior design expo Nigeria, Home decor deals Nigeria, Interior design workshops Nigeria, Decor trends 2025 Nigeria, Interior design events Lagos, Home and garden exhibitions Nigeria, Renovation packages Nigeria, Furniture sales Lagos, Seasonal decor ideas Nigeria, Exclusive interior offers Nigeria, Best colors for Nigerian homes, Trends in Nigerian decor, Budget-friendly interiors Lagos, How to design a small space Nigeria, African-inspired interiors Nigeria, Modern Nigerian architecture, Creative space planning Nigeria, DIY home decor Nigeria, Local artisans for furniture Nigeria, Eco-friendly interior design Nigeria, Top interior design companies Nigeria, Interior design consultation Nigeria, Project management for interiors Lagos, Interior design portfolio Nigeria, 3D interior design Nigeria, Interior design software Nigeria, Custom lighting design Nigeria, Best home accessories in Nigeria, Nigerian home trends 2025, Luxury home ideas Lagos",
  openGraph: {
    title: "Bwosh - Modern Interior Design",
    description:
      "Explore exceptional interior designs crafted by Bwosh for stylish and functional living spaces.",
    url: "https://bwosh.com",
    images: [
      {
        url: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1735899323/Bwosh/hero/hero1_ovzfek.jpg",
        width: 1200,
        height: 630,
        alt: "Modern Interior Design by Bwosh",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
