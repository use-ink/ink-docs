import React from 'react'
import Layout from './layout'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { useRive, Layout as RiveLayout, Fit, Alignment } from '@rive-app/react-canvas'

export default function PageRiveDemo() {
  const { RiveComponent: Rocket } = useRive({
    // Load a local riv `clean_the_car.riv` or upload your own!
    src: useBaseUrl('/animations/rocket.riv'),
    // This is optional.Provides additional layout control.
    autoplay: true,
  })

  const { RiveComponent: Medal } = useRive({
    src: useBaseUrl('/animations/medal.riv'),
    autoplay: true,
  })

  return (
    <Layout>
      <div className="flex flex-col gap-4">
        <h1>Rive Demo</h1>
        <div className="w-[500px] h-[500px] bg-transparent">
          <Rocket style={{ width: '100%', height: '100%', background: 'transparent' }} />
        </div>
        <div className="w-[500px] h-[500px] bg-transparent">
          <Medal style={{ width: '100%', height: '100%', background: 'transparent' }} />
        </div>
      </div>
    </Layout>
  )
}
