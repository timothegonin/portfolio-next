import "./globals.css";

export const metadata = {
  title: "Portfolio de Timothé GONIN",
  description: "Développeur front-end React et Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
