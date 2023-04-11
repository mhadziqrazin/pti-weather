import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/Navbar'

export const metadata = {
  title: 'PTI - Weather',
  description: 'PTI Frontend Task',
}

const font = Poppins({ subsets: ['latin'], weight: ['400', '500', '700'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
