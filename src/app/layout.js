import './globals.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Chatsworth Code',
  description: "Chatsworth Charter's Coding Club",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className='bg-slate-100'>
        <div className='py-1'>
          <p className='text-center'>This website is a work-in progress. If you'd like to improve it or have any suggestions, feel free to contact us.</p>
        </div>
        <Navbar />
        {children}
        <Footer />
        </body>
      
    </html>
  )
}
