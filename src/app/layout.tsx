import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import HeaderApp from '@/components/header/HeaderApp'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chat with ChatGPT',
  description: "It's a project that allows you to chat with ChatGPT using Next.js and TypeScript. - by Mohamed Abdelrahman",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en" >
        <meta name="twitter:image:src" content="https://avatars.githubusercontent.com/u/54208900" />
        <meta name="twitter:site" content="@m7md_0a" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Chat with ChatGPT" />
        <meta name="twitter:description" className="meta_description" content="It's a project that allows you to chat with ChatGPT using Next.js and TypeScript. - by Mohamed Abdelrahman" />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/54208900" />
        <meta property="og:image:alt" className="meta_description" content="It's a project that allows you to chat with ChatGPT using Next.js and TypeScript. - by Mohamed Abdelrahman" />
        <meta property="og:site_name" content="Chat with ChatGPT" />
        <meta property="og:type" content="Translator" />
        <meta property="og:title" content="Chat with ChatGPT" />
        <meta property="og:url" content="https://m-abdelrahman.vercel.app" />
        <meta property="og:description" className="meta_description" content="It's a project that allows you to chat with ChatGPT using Next.js and TypeScript. - by Mohamed Abdelrahman" />
        <meta property="profile:username" content="It's a project that allows you to chat with ChatGPT using Next.js and TypeScript. - by Mohamed Abdelrahman" />
        <body className={'min-h-screen bg-base-200'}>
          <div id='modal-root'></div>
            <HeaderApp />
            <main className={inter.className + 'mb-8'}>
              {children}
            </main>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <aside>
              <p>Copyright © {new Date().getFullYear()} - <a target='_blank' href='https://github.com/m7md0a' className='link link-hover'>Mohamed</a></p>
            </aside>
          </footer>
        </body>
      </html>
  )
}
