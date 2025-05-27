import type { Metadata } from "next";
// import { Header } from "./components/Header";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import { DisableDraftMode } from "./components/DisableDraftMode";
// import { Roboto } from "next/font/google"  !import your fonts
import "./globals.css";
import { SanityLive } from "@/sanity/lib/live";

export const metadata: Metadata = {
  title: "Cosmodrome Agency",
  description:
    "Cosmodrome Agency exists to support businesses of every size create great experiences for everyone they come into contact with. Contact us today to get started.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <SanityLive />
        {(await draftMode()).isEnabled && (
          <>
            <DisableDraftMode />
            <VisualEditing />
          </>
        )}
      </body>
    </html>
  );
}
