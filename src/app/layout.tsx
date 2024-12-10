import "./globals.css"
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}