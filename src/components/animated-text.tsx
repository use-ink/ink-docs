import React from 'react'
import { motion } from 'framer-motion'

export function AnimatedText({
  text,
  element: Wrapper = 'p',
  className,
}: {
  text: string
  element?: 'p' | 'span'
  className?: string
}) {
  const defaultAnimation = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: 'linear', bounce: 0, delay: 0.5 },
  }

  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        className="will-change-transform"
        initial="hidden"
        animate="visible"
        aria-hidden
        transition={{ staggerChildren: 0.06 }}
      >
        {text.split(' ').map((word, index) => (
          <span key={index} className="inline-block">
            {word.split('').map((letter, index) => (
              <motion.span key={index} className="inline-block" variants={defaultAnimation}>
                {letter}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </Wrapper>
  )
}
