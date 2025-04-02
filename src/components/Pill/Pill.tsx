import classNames from 'classnames'
import React from 'react'
import { ClassNameable } from '../types'
import useBaseUrl from '@docusaurus/useBaseUrl'
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
      <img className="h-8 p-0 mr-4" src={useBaseUrl(icon)} alt={title} />
      <h4 className="p-0 m-0 text-xl">{title}</h4>
    </span>
  )
}
