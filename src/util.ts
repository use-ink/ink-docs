import { clsx, type ClassValue } from 'clsx'
import { motion, type MotionValue, useScroll, useSpring, useTransform } from 'motion/react'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}
