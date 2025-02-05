import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import { Toaster } from "sonner"
import { ThemeProvider } from "../components/theme-provider"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pix do Casal - Lista de Presentes via Pix",
  description: "Crie sua lista de presentes e receba transferências diretamente via Pix. Sem taxas, sem complicação.",
  openGraph: {
    title: "Pix do Casal - Lista de Presentes via Pix",
    description: "Crie sua lista de presentes e receba transferências diretamente via Pix. Sem taxas, sem complicação.",
    locale: "pt_BR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

