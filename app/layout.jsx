import Footer from '@/components/Footer';
import './globals.css';
import Navbar from '@/components/Navbar';


export const metadata = {
  title : 'Sheer Analytics and Insights',
  description: 'Sheer Analytics and Insights provides B2B and B2C consulting services to help businesses grow and succeed',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/> 
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
