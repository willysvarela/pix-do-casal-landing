"use client"

import { motion } from "framer-motion"
import { UserPlus, ListChecks, Share2 } from "lucide-react"

export function StepGuide() {
  const steps = [
    {
      icon: UserPlus,
      title: "1. Crie sua conta",
      description: "Processo rápido e simples, leva menos de 1 minuto",
    },
    {
      icon: ListChecks,
      title: "2. Monte sua lista",
      description: "Escolha entre produtos pré-selecionados ou crie sua própria lista",
    },
    {
      icon: Share2,
      title: "3. Compartilhe",
      description: "Envie o link para seus convidados e receba os presentes via Pix",
    },
  ]

  return (
    <section className="container py-12 md:py-24 px-10">
      <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 sm:text-4xl">Como funciona</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center space-y-4"
          >
            <div className="rounded-full bg-primary p-4">
              <step.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

