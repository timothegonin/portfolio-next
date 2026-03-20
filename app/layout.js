import {Inter, Poppins} from 'next/font/google'
import "./globals.css";
import Navigation from "@/components/Navigation/Navigation"
import Footer from "@/components/Footer/Footer"

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'], 
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata = {
  title: "Portfolio de Timothé GONIN",
  description: "Développeur front-end React et Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.varibale} ${poppins.variable}`}>
      <body className={inter.className}>
        <Navigation/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
