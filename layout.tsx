import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "BIHAR AI GURU | Your Personal AI University Teacher",
  description: "Learn your university syllabus with a personal AI teacher in Hindi, English and Hinglish."
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}