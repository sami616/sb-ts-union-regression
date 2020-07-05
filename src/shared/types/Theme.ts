export interface Theme {
  font: {
    primary: string
    secondary: string
  }
  color: {
    primaryLight: string
    primaryBase: string
    primaryBaseAlpha50: string
    primaryBaseAlpha80: string
    primaryDark: string

    secondaryLight: string
    secondaryBase: string
    secondaryBaseAlpha50: string
    secondaryBaseAlpha80: string
    secondaryDark: string

    tertiaryLight: string
    tertiaryBase: string
    tertiaryBaseAlpha50: string
    tertiaryBaseAlpha80: string
    tertiaryDark: string

    whiteBase: string
    whiteBaseAlpha50: string
    whiteBaseAlpha80: string

    blackBase: string
    blackBaseAlpha50: string
    blackBaseAlpha80: string

    greyLightest: string
    greyLighter: string
    greyLight: string
    greyBase: string
    greyDark: string
    greyDarker: string
    greyDarkest: string

    negativeBase: string
    negativeBaseAlpha50: string
    negativeBaseAlpha80: string

    current: 'currentColor'
    transparent: 'transparent'
  }
  size: Sizes
  margin: Sizes & NegativeSizes
  padding: Omit<Sizes, 'auto'>
  radius: Pick<Units, 'none' | 'sm' | 'base' | 'md' | 'lg' | 'full'>
  shadow: Pick<
    Units,
    'none' | 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | 'xxl'
  >
}

export interface Units {
  none: string
  xs: string
  sm: string
  base: string
  md: string
  lg: string
  xl: string
  xxl: string
  full: string
}

export interface Sizes {
  '0': string
  '1': string
  '2': string
  '3': string
  '4': string
  '5': string
  '6': string
  '8': string
  '10': string
  '12': string
  '16': string
  '20': string
  '24': string
  '32': string
  '40': string
  '48': string
  '56': string
  '64': string
  auto: 'auto'
}

export interface NegativeSizes {
  neg1: string
  neg2: string
  neg3: string
  neg4: string
  neg5: string
  neg6: string
  neg8: string
  neg10: string
  neg12: string
  neg16: string
  neg20: string
  neg24: string
  neg32: string
  neg40: string
  neg48: string
  neg56: string
  neg64: string
}
