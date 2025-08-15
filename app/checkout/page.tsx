import { CheckoutProcess } from "@/components/checkout-process"
import { Header } from "@/components/header"

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <CheckoutProcess />
      </main>
    </div>
  )
}
