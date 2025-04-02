import React from 'react'

export function TutorialBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="tutorial-box bg-[#bd82fd1a] p-6 rounded-[10px] border-[rgba(140,124,247,.15)] border border-solid shadow-[0px_12px_12px_#0000001f] mb-4">
      <div className="tutorial-box-content [&>p:last-child]:mb-0 [&>h4]:font-freude [&>h4]:text-[36px] [&>hr]:my-4 [&>hr]:!border-solid [&>hr]:!border-b">
        {children}
      </div>
    </div>
  )
}
