"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    {
      src: "/placeholder.svg",
      alt: "Exemplo de página de presentes 1",
    },
    {
      src: "/placeholder.svg",
      alt: "Exemplo de página de presentes 2",
    },
    {
      src: "/placeholder.svg",
      alt: "Exemplo de página de presentes 3",
    },
  ]

  const next = () => {
    setCurrentIndex((currentIndex + 1) % images.length)
  }

  const previous = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="relative overflow-hidden rounded-xl">
      <div className="flex items-center justify-center">
        <Button variant="outline" size="icon" className="absolute left-4 z-10 rounded-full" onClick={previous}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="aspect-video w-full max-w-4xl"
          >
            <Image
              src={images[currentIndex].src || "/placeholder.svg"}
              alt={images[currentIndex].alt}
              width={1200}
              height={675}
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <Button variant="outline" size="icon" className="absolute right-4 z-10 rounded-full" onClick={next}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-primary" : "bg-muted"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

