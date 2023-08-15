import Header from "./components/header/header"

import "./global.css"

export const metadata = {
  title: 'Matheus',
  description: 'Portifólio profissional de Matheus Souza',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
