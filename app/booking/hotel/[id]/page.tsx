import { HotelBooking } from "@/components/hotel-booking"
import { Header } from "@/components/header"

export default function HotelBookingPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HotelBooking hotelId={params.id} />
      </main>
    </div>
  )
}
