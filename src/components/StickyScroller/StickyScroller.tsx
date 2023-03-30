import classNames from 'classnames'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useWindow } from '../../hooks'
import { useMediaQuery } from 'usehooks-ts'

export interface StickyScrollerProps {
  stickyAt: number
  containerWidth: number
  mediaMinWidth?: number
}

export const StickyScroller: React.FC<React.PropsWithChildren<StickyScrollerProps>> = ({
  children,
  containerWidth,
  mediaMinWidth,
  stickyAt,
}) => {
  const hasMinMediaSize = useMediaQuery(`(min-width: ${mediaMinWidth || 1024}px)`)
  const [left, setLeft] = useState(0)
  const [deltaX, setDeltaX] = useState(0)
  const { scrollY } = useWindow()
  const stickyListRef = React.useRef<HTMLUListElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)

  const setWidthDelta = useCallback(() => {
    if (!stickyListRef.current || !containerRef.current) return
    const d = stickyListRef.current.getBoundingClientRect().width - containerRef.current.getBoundingClientRect().width
    const delta = d < 0 ? 0 : d
    setDeltaX(delta)
  }, [])

  useEffect(() => {
    setWidthDelta()
    window.addEventListener('resize', setWidthDelta)
    return () => window.removeEventListener('resize', setWidthDelta)
  }, [])

  const stickyListHeight: number = useMemo(
    () => (stickyListRef.current ? stickyListRef.current.getBoundingClientRect().height : 0),
    [stickyListRef.current],
  )

  useEffect(() => {
    if (!stickyListRef.current || !containerRef.current) return

    const stickyYPosition = stickyListRef.current?.getBoundingClientRect().y
    const containerOffsetTop = containerRef.current?.offsetTop
    if (containerOffsetTop === undefined) return

    const isSticky = stickyYPosition <= stickyAt

    if (isSticky) {
      const stickyScrollProgressY = scrollY + stickyAt - containerOffsetTop
      const percentage = stickyScrollProgressY / deltaX
      const normalizedPercentage = percentage <= 0.02 ? 0 : percentage > 0.98 ? 1 : percentage

      const value = normalizedPercentage * deltaX
      setLeft(-value)
    }
  }, [scrollY])

  const overallHeight = hasMinMediaSize ? { height: deltaX + stickyListHeight } : undefined
  const positionTop = hasMinMediaSize ? { top: stickyAt } : undefined
  const positionLeft = hasMinMediaSize ? { left } : undefined

  return (
    <div className="max-w-biggest mx-auto" ref={containerRef} style={overallHeight}>
      <div className="lg:sticky block" style={positionTop}>
        <ul
          className={classNames(
            'list-none m-0 px-4 py-0 lg:flex-row justify-start flex-col',
            'flex lg:flex-nowrap relative gap-6',
          )}
          ref={stickyListRef}
          style={{ ...positionLeft, width: hasMinMediaSize ? containerWidth : 'unset' }}
        >
          {children}
        </ul>
      </div>
    </div>
  )
}
