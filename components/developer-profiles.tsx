"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface Developer {
  name: string
  role: string
  bio: string
  image: string
}

export default function DeveloperProfiles() {
  const developers: Developer[] = [
    {
      name: "Aarish Garg",
      role: "Developed the machine learning model, focusing on data preprocessing and model training.",
      bio: "4th-year IT student at UIET PU with a passion for ML and sports analytics.",
      image: "/aarish.png",
    },
    {
      name: "Lakhan Vashney",
      role: "Contributed to model development and feature engineering.",
      bio: "4th-year IT student at UIET PU, enthusiastic about applying ML to real-world problems.",
      image: "/lakhan.png",
    },
    {
      name: "John",
      role: "Fixed bugs, built the website and mobile app, and handled frontend-backend integration. Deployed the model on Render for scalable API access.",
      bio: "4th-year IT student at UIET PU, loves building user-friendly interfaces.",
      image: "/john.png",
    },
    {
      name: "Ankush",
      role: "Help in documentation and file making",
      bio: "4th-year IT student at UIET PU, enjoys organizing and documenting projects.",
      image: "/ankush.png",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-4">Meet the Team</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Developed by 4th-year IT students at UIET PU, passionate about coding, machine learning, and sports
            analytics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {developers.map((developer, index) => (
            <motion.div
              key={developer.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="h-48 relative">
                <Image
                  src={developer.image || "/placeholder.svg"}
                  alt={`${developer.name}, ${developer.role.split(",")[0]}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">{developer.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{developer.role}</p>
                <p className="text-gray-700">{developer.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
