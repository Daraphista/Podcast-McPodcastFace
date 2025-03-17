import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "The Expert's Voice",
  description: "Real Experts. Real Answers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="font-body">
      <head>
        <meta name="apple-mobile-web-app-title" content="The Expert's Voice" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
