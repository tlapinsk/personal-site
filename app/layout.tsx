import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata = {
  title: "Tim Lapinskas",
  description: "AI Product Leader",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
