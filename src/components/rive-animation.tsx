import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { Alignment, Fit, Layout, useRive, UseRiveParameters } from '@rive-app/react-canvas'

export function RiveAnimation(params: UseRiveParameters) {
  const { RiveComponent } = useRive({
    src: useBaseUrl(params.src),
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.TopCenter,
    }),
    ...params,
  })

  return <RiveComponent className="w-full h-full will-change-transform" />
}
