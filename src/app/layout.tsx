import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './Components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex'>
          <NavBar />
          <div className='w-full'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
