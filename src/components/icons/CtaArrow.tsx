import classNames from 'classnames'
import React from 'react'

export const CtaArrow: React.FC<{ className?: string; white?: boolean }> = ({ className, white }) => {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        className={classNames('dark:stroke-white stroke-black', white && 'stroke-white')}
        d="M10.827 3.284h26.399m0 0v26.399m0-26.399L3.285 37.225"
        strokeWidth="5.333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
