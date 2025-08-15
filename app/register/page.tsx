import { RegisterForm } from "@/components/register-form"
import { Header } from "@/components/header"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <RegisterForm />
      </main>
    </div>
  )
}
