import "./styles.css"

export const metadata = {
  title: {
    default: 'David Boo',
    template: '%s | David Boo',
  },
  description: 'My personal site',
}

export default function RootLayout({
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
