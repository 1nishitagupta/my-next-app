import './globals.css'

export const metadata = {
  title: 'MY FIRST NEXT APP',
  description: 'By Nish',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
