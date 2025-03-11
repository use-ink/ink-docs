import React from 'react'
import { useColorMode } from '@docusaurus/theme-common'

export default function IconHome(props) {
  const { colorMode, setColorMode } = useColorMode()
  const isDarkTheme = colorMode === 'dark'
  if (isDarkTheme) {
    return (
      <svg
        version="1.1"
        id="svg-701448692_806"
        x="0"
        y="0"
        viewBox="0 0 44.5 76"
        style={{
          enableBackground: 'new 0 0 44.5 76',
          color: '#bc83fb',
        }}
        fill="currentColor"
        xmlSpace="preserve"
        role="img"
        {...props}
      >
        <circle className="st0" cx="22.2" cy="33.7" r="14.7"></circle>
        <path
          className="st0"
          d="M22.2 49.5c-1.4 0-2.5-1.1-2.5-2.5v-4.7c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5V47c0 1.4-1.1 2.5-2.5 2.5zM20.1 1l-7.5 9.5c-1.4 1.8-.1 4.4 2.1 4.4h15c2.3 0 3.6-2.6 2.1-4.4L24.4 1c-1.1-1.3-3.2-1.3-4.3 0z"
        ></path>
        <path
          className="st0"
          d="M2.5 66.9c-.7 0-1.4-.3-1.9-.8-.9-1-.8-2.6.2-3.5l21.4-18.9 21.4 18.9c1 .9 1.1 2.5.2 3.5-.9 1-2.5 1.1-3.5.2l-18.1-16-18.1 16c-.4.4-1 .6-1.6.6z"
        ></path>
        <path
          className="st0"
          d="M30.9 76c-1.1 0-2-.7-2.4-1.7l-6.2-19.2L16 74.3c-.4 1.3-1.8 2-3.2 1.6-1.3-.4-2-1.8-1.6-3.2l11-33.8 11 33.8c.4 1.3-.3 2.7-1.6 3.2-.2.1-.5.1-.7.1z"
        ></path>
      </svg>
    )
  } else {
    return (
      <svg
        id="prefix__Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x={0}
        y={0}
        viewBox="0 0 75 73.3"
        style={{
          enableBackground: 'new 0 0 75 73.3',
        }}
        xmlSpace="preserve"
        role="img"
        {...props}
      >
        <style>
          {
            '.prefix__st0{opacity:.75}.prefix__st1{fill-rule:evenodd;clip-rule:evenodd;fill:#1c1e21}.prefix__st2{fill:#fff}'
          }
        </style>
        <g className="prefix__st0">
          <g className="prefix__st0">
            <path className="prefix__st1" d="M6.9 47.1h2.4c8.8-26.7-22.6-20.4-2.4 0z" />
          </g>
          <g className="prefix__st0">
            <path className="prefix__st1" d="M6.9 49.1h2.4c8.8 26.7-22.6 20.4-2.4 0z" />
          </g>
          <g className="prefix__st0">
            <path
              className="prefix__st2"
              d="M12.2 50.6H5.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5h7.1c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5z"
            />
          </g>
          <g className="prefix__st0">
            <path
              className="prefix__st1"
              d="M37.4 19.7V5.9C37.4 2.7 40 0 43.3 0h11.9v10.7h-4.7c-1.2 0-2.2 1-2.2 2.2v6.7l-10.9.1z"
            />
          </g>
          <path
            d="m58.5 31.2-1.2-9.4c-.2-1.7-1.7-3-3.4-3H33.3c-1.7 0-3.2 1.3-3.4 3l-1.2 9.4h29.8z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              fill: '#fff',
            }}
            className="prefix__st0"
          />
          <g className="prefix__st0">
            <path
              className="prefix__st1"
              d="M43.6 22.9c-17.4 0-31.4 11.3-31.4 25.2s14.1 25.2 31.4 25.2S75 62 75 48.1 60.9 22.9 43.6 22.9zm0 36.5c-6.6 0-11.9-5.3-11.9-11.9S37 35.6 43.6 35.6 55.5 41 55.5 47.5s-5.4 11.9-11.9 11.9z"
            />
          </g>
          <path
            d="M38 52.8c-.6 0-1.3-.2-1.8-.7-1-1-1-2.6 0-3.5l8.4-8.4c1-1 2.6-1 3.5 0 1 1 1 2.6 0 3.5l-8.4 8.4c-.4.5-1 .7-1.7.7z"
            style={{
              fill: '#1c1e21',
            }}
            className="prefix__st0"
          />
          <g className="prefix__st0">
            <path
              className="prefix__st2"
              d="M43.6 63.7c-8.9 0-16.2-7.3-16.2-16.2s7.3-16.2 16.2-16.2 16.2 7.3 16.2 16.2-7.3 16.2-16.2 16.2zm0-27.3c-6.2 0-11.2 5-11.2 11.2s5 11.2 11.2 11.2 11.2-5 11.2-11.2-5.1-11.2-11.2-11.2z"
            />
          </g>
        </g>
        <g className="prefix__st0">
          <path className="prefix__st2" d="M52.8 0h5v10.7h-5z" />
        </g>
      </svg>
    )
  }
}
