import classNames from 'classnames'
import React from 'react'
import { ClassNameable } from 'src/components/types'

const notices = ['First Cohort Full']

export const ClosedNotice: React.FC<ClassNameable> = ({ className }) => {
  return (
    <ul className={classNames('flex items-center gap-1 text-xs list-none p-0 m-0 font-bold', className)}>
      {notices.map((n) => (
        <li key={n} className="rounded-full py-1 px-3 bg-brand-500">
          {n}
        </li>
      ))}
    </ul>
  )
}
