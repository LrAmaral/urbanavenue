import React from "react"

export default function SizeSelection() {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="font-semibold">Sizes</h1>
      <div className="flex flex-row items-center justify-center gap-2 text-black">
        <input
          className="border-2 px-2 hover:border-zinc-300 hover:bg-zinc-50"
          type="button"
          value="40"
          required
        />
        <input
          className="border-2 px-2 hover:border-zinc-300 hover:bg-zinc-50"
          type="button"
          value="42"
          required
        />
        <input
          className="border-2 px-2 hover:border-zinc-300 hover:bg-zinc-50"
          type="button"
          value="44"
          required
        />
      </div>
    </div>
  )
}
