import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/code-highlight/styles.css";
import "@mantine/nprogress/styles.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Center, ColorSchemeScript, MantineProvider } from "@mantine/core";
// import "./globals.css";
import { ReactNode } from "react";
import { NavigationProgress } from "@mantine/nprogress";

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
                    <NavigationProgress />
                    <Center>{children}</Center>
                </MantineProvider>
            </body>
        </html>
    );
}
