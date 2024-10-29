import type { Metadata } from "next";
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import "./globals.css";

export const metadata: Metadata = {
  title: "Justin Jue",
  description: "Justin Jue's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="light"/>
      </head>
      <body>
        <MantineProvider defaultColorScheme="light">{children}</MantineProvider>
      </body>
    </html>
  );
}