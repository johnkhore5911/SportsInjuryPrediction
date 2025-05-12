"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/sports-injury-bg.webp')",
          filter: "blur(5px) brightness(0.4)",
        }}
      />

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          InjuryPredictionML
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Predict Sports Injuries with Machine Learning – A 6th Semester Project by UIET PU Students
        </motion.p>

        <motion.p
          className="text-lg text-gray-200 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Enter player training details to predict injury likelihood using our advanced ML model
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <Link
            href="#predict"
            className="inline-flex items-center gap-2 bg-[#3B82F6] hover:bg-[#F59E0B] text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
          >
            <motion.span whileHover={{ scale: 1.1 }} className="flex items-center gap-2">
              Predict Now <ArrowDown size={18} />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
