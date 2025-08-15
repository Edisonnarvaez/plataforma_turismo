import { FlightResults } from "@/components/flight-results"
import { Header } from "@/components/header"

export default function FlightsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <FlightResults />
      </main>
    </div>
  )
}
