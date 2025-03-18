import React from 'react'

export function ImageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center max-w-[300px] w-full h-auto rounded-lg border-[rgba(140,124,247,.15)] border border-solid bg-[#241a38] p-4">
      {children}
    </div>
  )
}
