import { Github } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#1E3A8A] text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Link
            href="https://github.com/johnkhore5911/InjuryPredictionML"
            target="_blank"
            className="text-white hover:text-[#F59E0B] transition-colors"
          >
            <Github size={24} />
          </Link>
        </div>
        <p className="text-sm">
          © 2025 InjuryPredictionML | 7th Semester Project by UIET PU Students |
          <Link
            href="https://github.com/johnkhore5911/InjuryPredictionML"
            target="_blank"
            className="ml-1 hover:text-[#F59E0B] transition-colors"
          >
            GitHub: InjuryPredictionML
          </Link>
        </p>
      </div>
    </footer>
  )
}
