
import { Footer, Navbar } from '@/src/components';
import './globals.css';



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
