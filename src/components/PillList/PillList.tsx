import classNames from 'classnames'
import React from 'react'
import { Pill, PillProps } from '../Pill/Pill'
import { ClassNameable } from '../types'

interface PillListProps extends ClassNameable {
  pills: PillProps[]
}

export const PillList: React.FC<PillListProps> = ({ pills, className }) => {
  return (
    <ul className={classNames('list-none p-0 m-0 mt-10 flex flex-wrap gap-4', className)}>
      {pills.map((pillProps) => (
        <li className="p-0 m-0" key={pillProps.title}>
          <Pill {...pillProps} />
        </li>
      ))}
    </ul>
  )
}
