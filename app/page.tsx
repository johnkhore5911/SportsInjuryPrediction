"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import axios from "axios"
import Hero from "@/components/hero"
import About from "@/components/about"
import PredictionForm from "@/components/prediction-form"
import DeveloperProfiles from "@/components/developer-profiles"
import Footer from "@/components/footer"
import PredictionResult from "@/components/prediction-result"

export default function Home() {
  const [predictionResult, setPredictionResult] = useState<{
    prediction: number
    probability: number[]
  } | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (formData: Record<string, number>) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await axios.post("https://injuryprediction.onrender.com/predict", formData)
      setPredictionResult(response.data)
    } catch (err) {
      setError("Error: Unable to fetch prediction. Please try again later.")
      console.error("API Error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-16"
        id="predict"
      >
        <PredictionForm onSubmit={handleSubmit} isLoading={isLoading} />

        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-4 bg-red-100 text-red-700 rounded-lg"
          >
            {error}
          </motion.div>
        )}

        {predictionResult && !error && <PredictionResult result={predictionResult} />}
      </motion.div>

      <DeveloperProfiles />
      <Footer />
    </main>
  )
}
