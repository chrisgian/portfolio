import type { Metadata } from "next";
import "./globals.css";
import DataSciencePortfolio from "./portfolio";

export const metadata: Metadata = {
  title: "Data Science Portfolio",
  description: "Data Scientist specializing in machine learning, predictive analytics, and AI solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <DataSciencePortfolio />
      </body>
    </html>
  );
}
