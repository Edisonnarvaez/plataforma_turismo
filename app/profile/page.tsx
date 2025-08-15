import { UserProfile } from "@/components/user-profile"
import { Header } from "@/components/header"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <UserProfile />
      </main>
    </div>
  )
}
