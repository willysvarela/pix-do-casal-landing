"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { submitToWaitlist } from "@/actions/waitlist"

export function WaitlistForm() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)

    try {
      const result = await submitToWaitlist(formData)

      if (result.success) {
        toast.success("Ótimo! Você está na lista de espera. Enviaremos novidades em breve pelo seu WhatsApp e email.")
        setFormData({ email: "", phone: "" })
      } else {
        throw new Error(result.error)
      }
    } catch (error) {
      toast.error("Erro ao realizar cadastro. Tente novamente.")
      console.error("Submission error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-md flex-col gap-4">
      <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Digite seu melhor email"
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              required
              className="flex-1"
              aria-label="Seu endereço de email"
            />
            <Input
              type="tel"
              placeholder="Digite seu WhatsApp"
              value={formData.phone}
              onChange={(e) => {
                let phone = e.target.value.replace(/\D/g, '');
                if (phone.length > 2) {
                  phone = `(${phone.slice(0, 2)}) ${phone.slice(2, 11)}`;
                }
                setFormData((prev) => ({ ...prev, phone }));
              }}
              required
              className="flex-1"
              aria-label="Seu número de WhatsApp"
            />
      </div>
      <Button type="submit" className="w-full sm:w-auto" disabled={isLoading}>
        {isLoading ? "Enviando..." : "Entrar na lista de espera"}
      </Button>
    </form>
  )
}

