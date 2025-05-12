import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "InjuryPredictionML - Sports Injury Prediction with Machine Learning",
  description:
    "Predict sports injuries and recovery time with InjuryPredictionML, a machine learning project by UIET PU students. Enter training details to get instant predictions.",
  keywords:
    "sports injury prediction, injury prediction ML, machine learning sports, athlete injury risk, sports analytics, UIET PU project, 6th semester project",
  openGraph: {
    title: "InjuryPredictionML - Sports Injury Prediction",
    description:
      "Use our ML model to predict sports injuries and recovery times. A 6th-semester project by UIET PU students.",
    images: [
      {
        url: "/sports-injury-bg.webp",
        width: 1200,
        height: 630,
        alt: "InjuryPredictionML",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
