import { ConfigProvider } from 'antd'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeConfig from "./theme/themeConfig"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Casa dos Girassóis',
  description: 'Casa dos Girassóis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfigProvider theme={ThemeConfig}>
          {children}
        </ConfigProvider>
      </body>
    </html>
  )
}
