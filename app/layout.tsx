import "styles/globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black text-white antialiased">
      <head />
      <body>{children}</body>
    </html>
  )
}
