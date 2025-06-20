import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Raja Z - Backend Developer Portfolio",
  description: "Portofolio, projects, dan pengalaman Raja Z sebagai backend engineer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100 min-h-screen overflow-hidden">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
