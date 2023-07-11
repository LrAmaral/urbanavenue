import Login from '../components/Login'

export const metadata = {
  title: 'login | UrbanAvenue®',
  description: 'Shop',
}

export default function Sign() {
  return (
    <div className="h-screen w-full bg-white text-black">
      <Login />
    </div>
  )
}
