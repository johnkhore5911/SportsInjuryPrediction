"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"

interface FormData {
  [key: string]: number
}

interface PredictionFormProps {
  onSubmit: (data: FormData) => void
  isLoading: boolean
}

export default function PredictionForm({ onSubmit, isLoading }: PredictionFormProps) {
  const initialFormData: FormData = {
    "km sprinting": 0,
    "perceived exertion": 0,
    "strength training.1": 0,
    "perceived trainingSuccess.1": 0,
    "km Z3-4.2": 0,
    "hours alternative.2": 0,
    "perceived recovery.2": 0,
    "perceived exertion.3": 0,
    "strength training.3": 0,
    "perceived exertion.4": 0,
    "perceived trainingSuccess.4": 0,
    "total km.5": 0,
    "perceived exertion.5": 0,
    "perceived recovery.6": 0,
  }

  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const numValue = Number.parseFloat(value)

    setFormData((prev) => ({
      ...prev,
      [name]: isNaN(numValue) ? 0 : numValue,
    }))

    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    Object.entries(formData).forEach(([key, value]) => {
      if (value === 0 || isNaN(value)) {
        newErrors[key] = "This field is required"
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      onSubmit(formData)
    }
  }

  const formFields = [
    { name: "km sprinting", label: "Sprinting Distance (km)" },
    { name: "perceived exertion", label: "Perceived Exertion (0-10)" },
    { name: "strength training.1", label: "Strength Training Day 1 (hours)" },
    { name: "perceived trainingSuccess.1", label: "Training Success Day 1 (0-10)" },
    { name: "km Z3-4.2", label: "Zone 3-4 Distance Day 2 (km)" },
    { name: "hours alternative.2", label: "Alternative Training Day 2 (hours)" },
    { name: "perceived recovery.2", label: "Recovery Day 2 (0-10)" },
    { name: "perceived exertion.3", label: "Perceived Exertion Day 3 (0-10)" },
    { name: "strength training.3", label: "Strength Training Day 3 (hours)" },
    { name: "perceived exertion.4", label: "Perceived Exertion Day 4 (0-10)" },
    { name: "perceived trainingSuccess.4", label: "Training Success Day 4 (0-10)" },
    { name: "total km.5", label: "Total Distance Day 5 (km)" },
    { name: "perceived exertion.5", label: "Perceived Exertion Day 5 (0-10)" },
    { name: "perceived recovery.6", label: "Recovery Day 6 (0-10)" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8"
    >
      <h2 className="text-3xl font-bold text-[#1E3A8A] mb-8 text-center">Make a Prediction</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {formFields.map((field) => (
          <div key={field.name} className="flex flex-col">
            <label htmlFor={field.name} className="text-sm font-medium text-gray-700 mb-1">
              {field.label}
            </label>
            <input
              type="number"
              id={field.name}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
              step="0.1"
              min="0"
              max={
                field.name.includes("exertion") || field.name.includes("Success") || field.name.includes("recovery")
                  ? "10"
                  : undefined
              }
              className={`p-3 border rounded-lg focus:ring-2 focus:ring-[#3B82F6] outline-none transition-all ${
                errors[field.name] ? "border-red-500" : "border-gray-300"
              } text-gray-900`}
              aria-label={field.label}
            />
            {errors[field.name] && <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>}
          </div>
        ))}

        <div className="md:col-span-2 mt-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#3B82F6] hover:bg-[#F59E0B] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin mr-2" size={20} />
                Processing...
              </>
            ) : (
              "Predict"
            )}
          </motion.button>
        </div>
      </form>
    </motion.div>
  )
}
