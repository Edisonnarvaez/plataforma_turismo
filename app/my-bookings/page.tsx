import { MyBookings } from "@/components/my-bookings"
import { Header } from "@/components/header"

export default function MyBookingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <MyBookings />
      </main>
    </div>
  )
}
