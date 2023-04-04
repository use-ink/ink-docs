import classNames from 'classnames'
import React from 'react'
import { ClassNameable } from '../types'

export interface InfoCardProps extends ClassNameable {
  superTitle: string
  title: string
  info?: string[]
  bullets?: string[]
}

export const InfoCard: React.FC<InfoCardProps> = ({ title, superTitle, info, bullets, className }) => {
  return (
    <div
      className={classNames(
        'border-background-300 border-solid border',
        'bg-none ring-brand-500 outline-brand-500 p-6 rounded-xl dark:border-background-700',
        className,
      )}
    >
      <hgroup>
        {<h5 className="uppercase text-base p-0 m-0">{superTitle}</h5>}
        {<h4 className="text-3xl p-0 mt-4 text-brand-500 font-bold">{title}</h4>}
      </hgroup>

      <div className="mt-8">
        {info?.map((blurb) => (
          <p key={blurb} className="text-md font-montserrat m-0 mt-2">
            {blurb}
          </p>
        ))}

        <ul className="m-0 list-disc">
          {bullets?.map((blurb) => (
            <li key={blurb} className="text-md font-montserrat m-0 mt-2">
              {blurb}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
