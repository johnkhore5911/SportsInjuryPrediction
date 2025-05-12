"use client"

import { motion } from "framer-motion"
import { AlertTriangle, CheckCircle } from "lucide-react"

interface PredictionResultProps {
  result: {
    prediction: number
    probability: number[]
  }
}

export default function PredictionResult({ result }: PredictionResultProps) {
  const { prediction, probability } = result
  const isLowRisk = prediction === 0

  // Format probabilities as percentages
  const lowRiskPercentage = Math.round(probability[0] * 100)
  const highRiskPercentage = Math.round(probability[1] * 100)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-12 max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8 border-t-4 border-t-[#10B981]"
    >
      <div className="flex flex-col items-center text-center">
        <div className={`p-4 rounded-full ${isLowRisk ? "bg-green-100" : "bg-amber-100"} mb-4`}>
          {isLowRisk ? (
            <CheckCircle className="w-12 h-12 text-[#10B981]" />
          ) : (
            <AlertTriangle className="w-12 h-12 text-[#F59E0B]" />
          )}
        </div>

        <h3 className="text-2xl font-bold mb-2">Prediction: {isLowRisk ? "Low Risk" : "High Risk"}</h3>

        <p className="text-gray-600 mb-6">
          Based on the training data provided, our model predicts a {isLowRisk ? "low" : "high"} risk of injury.
        </p>

        <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
          <div
            className={`h-4 rounded-full ${isLowRisk ? "bg-[#10B981]" : "bg-[#F59E0B]"}`}
            style={{ width: `${isLowRisk ? lowRiskPercentage : highRiskPercentage}%` }}
          ></div>
        </div>

        <div className="flex justify-between w-full text-sm text-gray-600">
          <div>
            <span className="font-medium">Low Risk:</span> {lowRiskPercentage}%
          </div>
          <div>
            <span className="font-medium">High Risk:</span> {highRiskPercentage}%
          </div>
        </div>
      </div>
    </motion.div>
  )
}
