'use client'

function Buttons() {
  return (
    <div className="flex flex-row gap-6 text-white">
      <button className="h-[30px] w-[80px] cursor-pointer rounded-lg border-none bg-blue-700 transition-all hover:bg-blue-800">
        Allow
      </button>
      <button className="h-[30px] w-[80px] cursor-pointer rounded-lg border-none bg-slate-700 transition-all hover:bg-slate-600">
        Decline
      </button>
    </div>
  )
}

export default Buttons
