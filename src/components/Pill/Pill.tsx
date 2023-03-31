import classNames from 'classnames'
import React from 'react'
import { ClassNameable } from '../types'

export interface PillProps extends ClassNameable {
  title: string
  icon: string
}

export const Pill: React.FC<PillProps> = ({ title, className, icon }) => {
  return (
    <span
      className={classNames(
        'md:p-4 py-3 px-3 m-0 rounded-2xl  border border-background-300 ',
        'flex items-center dark:border-background-700 border-solid',
        className,
      )}
    >
      <img className="h-8 mr-4 p-0" src={icon} alt={title} />
      <h4 className="m-0 p-0 text-xl">{title}</h4>
    </span>
  )
}
