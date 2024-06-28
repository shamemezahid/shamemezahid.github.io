import './globals.css'
import {Merriweather_Sans } from 'next/font/google'

const font = Merriweather_Sans({ subsets: ['latin-ext'] })

export const metadata = {
  title: 'Shamim Bin Zahid',
  description: "Hi, I'm Shamim 👋",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
      </body>
    </html>
  )
}
