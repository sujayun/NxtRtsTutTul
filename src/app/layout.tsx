import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata =
{
  title: 'Nam Nxt Jvs App',
  description: 'Nam Dtl Txt',
}

export default function RutLyoFnc({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
