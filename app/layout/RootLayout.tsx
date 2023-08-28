import Header from '../components/Header';
import Footer from '../components/Footer';
import {ReactNode} from 'react';
function RootLayout({children}: {children: ReactNode}) {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-4 md:px-0 overflow-hidden">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
