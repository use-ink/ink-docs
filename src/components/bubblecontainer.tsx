import React, { ReactNode } from 'react'

export function BubbleContainer({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8c7cf714',
        borderRadius: '48px',
        boxShadow:
          'inset 0 .7113342898827977px .7113342898827977px -.75px #ffffff2e, inset 0 1.9371521717053837px 1.9371521717053837px -1.5px #ffffff2d, inset 0 4.253285051195417px 4.253285051195417px -2.25px #ffffff2a, inset 0 9.4413216807344px 9.4413216807344px -3px #ffffff23, inset 0 24px 24px -3.75px #ffffff10, 0 24px 24px #0000000d',
        display: 'flex',
        gap: '24px',
        overflow: 'visible',
        top: 'calc(30.864197530864217% - 500px / 2)',
      }}
      className="w-full lg:w-[1000px] lg:h-[500px] px-[30px] py-[50px] lg:px-[60px] lg:py-[60px] justify-center"
    >
      {children}
    </div>
  )
}
