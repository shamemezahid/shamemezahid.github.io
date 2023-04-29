import './globals.css'
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'

const font = Plus_Jakarta_Sans({ subsets: ['latin'] })
// const font = JetBrains_Mono({ subsets: ['latin-ext'] })

export const metadata = {
  title: 'shamemezahid',
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
