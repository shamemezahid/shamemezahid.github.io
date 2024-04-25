import TopNav from '@/components/TopNav'
import './globals.css'
import { Plus_Jakarta_Sans, JetBrains_Mono, EB_Garamond, Domine, Roboto_Slab, SomeType, SomeType_Mono } from 'next/font/google'

// const font = Plus_Jakarta_Sans({ subsets: ['latin'] })
const font = Roboto_Slab({ subsets: ['latin'] })
// const font = JetBrains_Mono({ subsets: ['latin-ext'] })
// const font = Domine({ subsets : ['latin']})

export const metadata = {
  title: 'shamemezahid',
  description: "Hi, I'm Shamim 👋",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <TopNav/>
        {children}
      </body>
    </html>
  )
}
