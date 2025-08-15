import { HotelResults } from "@/components/hotel-results"
import { Header } from "@/components/header"

export default function HotelsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HotelResults />
      </main>
    </div>
  )
}
