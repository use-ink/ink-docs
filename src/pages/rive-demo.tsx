import React from 'react'
import Layout from './layout'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { useRive, Layout as RiveLayout, Fit, Alignment } from '@rive-app/react-canvas'

export default function PageRiveDemo() {
  const { rive, RiveComponent } = useRive({
    // Load a local riv `clean_the_car.riv` or upload your own!
    src: useBaseUrl('/animations/rocket.riv'),
    // This is optional.Provides additional layout control.
    autoplay: true,
  })

  return (
    <Layout>
      <div>
        <h1>Rive Demo</h1>
        <div className="w-[500px] h-[500px]">
          <RiveComponent onMouseEnter={() => rive && rive.play()} onMouseLeave={() => rive && rive.pause()} />
        </div>
      </div>
    </Layout>
  )
}
