import './global.css'
import clsx from 'clsx'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const graphik = localFont({
  src: [
    {
      path: '../public/fonts/Graphik-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Graphik-Medium.ttf',
      weight: '600',
      style: 'bold',
    },
  ],
  variable: '--font-graphik',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://obandev.io'),
  description: 'Developer',
  openGraph: {
    title: 'Pablo Obando',
    description: 'Developer',
    url: 'https://obandev.io',
    siteName: 'Pablo Obando',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      className={clsx('text-[#bfc7d5] bg-[#292d3e]', graphik.variable)}
    >
      <body className='antialiased max-w-2xl flex flex-col md:flex-row mx-4 lg:mx-auto'>
        <main className='flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0'>
          {children}
        </main>
      </body>
    </html>
  )
}
