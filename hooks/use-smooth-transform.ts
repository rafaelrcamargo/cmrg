import { MotionValue, useSpring, useTransform } from "framer-motion"

export function useSmoothTransform(
  value: MotionValue<number>,
  transformer: (v: number) => number,
  springOptions: { [key: string]: number }
) {
  return useSpring(useTransform(value, transformer), springOptions)
}
