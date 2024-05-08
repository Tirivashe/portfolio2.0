// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "./globals.scss";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tirivashe Shamhu Web Portfolio",
  description: "Welcome To Tirivashe Shamhu's Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
