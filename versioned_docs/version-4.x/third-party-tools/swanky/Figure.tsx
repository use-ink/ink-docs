import React from 'react'

type Props = {
  src: string
  caption: string
  width?: string
}

const Figure: React.FC<Props> = ({ src, caption, width = '460px' }) => {
  return (
    <center>
      <figure>
        <img src={src} alt={caption} width={width}></img>
        <figcaption>{caption}</figcaption>
      </figure>
    </center>
  )
}

export default Figure
