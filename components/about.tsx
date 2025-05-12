"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"
import Link from "next/link"

export default function About() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-8 text-center">About InjuryPredictionML</h2>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            InjuryPredictionML is a machine learning project by 3rd-year IT students at UIET PU. It predicts sports
            injury likelihood and recovery time based on training metrics like sprinting distance and perceived
            exertion. Built with Python, Scikit-learn, and Flask, this 6th-semester project showcases our passion for
            coding and sports analytics.
          </p>

          <div className="flex justify-center">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link
                href="https://github.com/johnkhore5911/InjuryPredictionML"
                target="_blank"
                className="inline-flex items-center gap-2 bg-[#1E3A8A] hover:bg-[#F59E0B] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
              >
                <Github size={20} />
                View on GitHub
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
