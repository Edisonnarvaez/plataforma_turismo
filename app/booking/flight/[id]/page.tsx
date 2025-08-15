import { FlightBooking } from "@/components/flight-booking"
import { Header } from "@/components/header"

export default function FlightBookingPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <FlightBooking flightId={params.id} />
      </main>
    </div>
  )
}
