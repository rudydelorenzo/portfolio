import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/code-highlight/styles.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
// import "./globals.css";
import { ReactNode } from "react";
import { CustomAppShell } from "@/components/CustomAppShell";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Rudy de Lorenzo",
    description: "Rudy's Portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <head>
                <ColorSchemeScript />
            </head>
            <body className={inter.className}>
                <MantineProvider>
                    <CustomAppShell>{children}</CustomAppShell>
                </MantineProvider>
            </body>
        </html>
    );
}
