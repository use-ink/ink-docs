import React from 'react'
import { ClassNameable } from '../types'
import '@lottiefiles/lottie-player'
import { useLottie, useLottieInteractivity } from 'lottie-react'

interface ScrollPlayerProps extends ClassNameable {
  animationData: object
}

export const ScrollPlayer: React.FC<ScrollPlayerProps> = ({ animationData, className }) => {
  const lottieObj = useLottie({ animationData })
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: 'scroll',
    actions: [
      {
        visibility: [0, 1],
        type: 'seek',
        frames: [0, lottieObj?.getDuration(true) || 0],
      },
    ],
  })

  return <div className={className}>{Animation}</div>
}
