import { useMediaQuery } from './useMediaQuery'
import { BREAKPOINTS } from '@shared/config/breakpoints'

export const useIsMobile = () =>
  useMediaQuery(`(max-width: ${BREAKPOINTS.mobile}px)`)

export const useIsTablet = () =>
  useMediaQuery(`(max-width: ${BREAKPOINTS.tablet}px)`)

export const useIsLaptop = () =>
  useMediaQuery(`(max-width: ${BREAKPOINTS.laptop}px)`)

export const useIsDesktop = () =>
  useMediaQuery(`(max-width: ${BREAKPOINTS.desktop}px)`)
