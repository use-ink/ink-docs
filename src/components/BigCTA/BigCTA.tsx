import classNames from 'classnames'
import React, { useState } from 'react'
import { CtaArrow } from '../icons'
import { ClassNameable } from '../types'

interface BigCtaProps extends ClassNameable {
  title: string
  emphasized?: string
  cta: string
  url: string
  tabIndex: number
}

export const BigCTA: React.FC<BigCtaProps & React.HtmlHTMLAttributes<HTMLDivElement>> = ({
  title,
  emphasized,
  cta,
  url,
  tabIndex,
  className,
  style,
}) => {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div
      role="link"
      style={style}
      onFocus={() => {
        setIsHovering(true)
      }}
      onMouseOver={() => {
        setIsHovering(true)
      }}
      onMouseOut={() => {
        setIsHovering(false)
      }}
      onBlur={() => {
        setIsHovering(false)
      }}
      tabIndex={tabIndex}
      className={classNames(
        'flex flex-col justify-between',
        'ring-brand-500 outline-brand-500 p-6 rounded-xl dark:border-background-700',
        'border-background-300 hover:cursor-pointer min-h-[180px] border-solid border',
        isHovering && 'text-white bg-brand-gradient',
        className,
      )}
      onClick={() => window.open(url, '_blank')}
      onKeyDown={({ key }) => {
        if (key === 'Enter') window.open(url, '_blank')
      }}
    >
      <span className="flex justify-between">
        {title && <h5 className="uppercase text-base mb-12">{title}</h5>}
        <CtaArrow className="h-6" white={isHovering} />
      </span>

      {cta && (
        <h3 className="md:text-7xl text-5xl font-montserrat m-0 font-bold leading-[120%]">
          {emphasized && (
            <i className={classNames('mb-12 mr-6 underline', isHovering ? 'text-white' : 'text-brand-500')}>
              {emphasized}
            </i>
          )}
          {cta}
        </h3>
      )}
    </div>
  )
}
