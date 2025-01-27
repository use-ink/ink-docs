import React from 'react'
import { Waves } from '../../Waves'
import { BuilderTrackPhases } from './BuildTrackPhases'

export const BuilderTrack: React.FC = () => {
    return (
    <section>
      <Waves className="mb-28 w-full" />

      <div className="overflow-x-clip">
        <BuilderTrackPhases />
      </div>
    </section>
  )
}
