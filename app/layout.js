import "./globals.css";
import Navigation from "@/components/Navigation/Navigation"
import Footer from "@/components/Footer/Footer"

export const metadata = {
  title: "Portfolio de Timothé GONIN",
  description: "Développeur front-end React et Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navigation/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
