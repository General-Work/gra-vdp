import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nprogressprovider from "@app/providers/Nprogress";
import "./globals.css";
import { cn } from "@app/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GRA-VDP",
  description: "Created by Connect Solutions Ghana",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn("w-screen h-screen overflow-hidden ", inter.className)}
      >
        <Nprogressprovider>{children}</Nprogressprovider>
      </body>
    </html>
  );
}
