import type { Viewport } from 'next'
import type { Metadata } from 'next'

import '@/styles/globals.css'
import Favicon from '../../public/favicon.ico'
import { IntlClientProvider } from '@/translations/intlClientContext'
import { ScrollToTop } from '@/utilities/ScrollToTop'
import { ChecklistsProvider } from '@/utilities/checklistsContext'

export const metadata: Metadata = {
  title: {
    default: 'Design System Checklist',
    template: 'Design System Checklist',
  },
  description:
    'An open-source checklist to help you plan, build and grow your design system.',
  icons: [{ rel: 'icon', url: Favicon.src }],
  robots: 'index, follow',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang={'en'}>
      <head>
        <meta name="googlebot" content="index,follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://designsystemchecklist.com/" />
        <meta property="og:title" content="Design System Checklist" />
        <meta
          property="og:description"
          content="An open-source checklist to help you plan, build and grow your design system."
        />
        <meta
          property="og:image"
          content="https://designsystemchecklist.com/meta-v2.png"
        />
        <meta property="og:image:alt" content="Design System Checklist" />
        <meta property="og:locale" content="en_US" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://designsystemchecklist.com/"
        />
        <meta property="twitter:title" content="Design System Checklist" />
        <meta
          property="twitter:description"
          content="An open-source checklist to help you plan, build and grow your design system."
        />
        <meta
          property="twitter:image"
          content="https://designsystemchecklist.com/meta-v2.png"
        />
      </head>
      <body>
        <IntlClientProvider>
          <ChecklistsProvider>
            <div id="__DESYSCHECK">
              {children}
              <ScrollToTop />
            </div>
          </ChecklistsProvider>
        </IntlClientProvider>
      </body>
    </html>
  )
}
