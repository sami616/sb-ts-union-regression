import { Theme } from '../types'

export const myTheme: Theme = {
  font: {
    primary: "'Helvetica', 'Arial', sans-serif",
    secondary: "'Helvetica', 'Arial', sans-serif",
  },
  color: {
    primaryLight: 'hsla(120, 100%, 27%, 1)',
    primaryBase: 'hsla(120, 100%, 22%, 1)',
    primaryBaseAlpha50: 'hsla(120, 100%, 22%, 0.5)',
    primaryBaseAlpha80: 'hsla(120, 100%, 22%, 0.8)',
    primaryDark: 'hsla(120, 100%, 17%, 1)',

    secondaryLight: 'hsla(75, 100%, 45%, 1)',
    secondaryBase: 'hsla(75, 100%, 40%, 1)',
    secondaryBaseAlpha50: 'hsla(75, 100%, 40%, 0.5)',
    secondaryBaseAlpha80: 'hsla(75, 100%, 40%, 0.8)',
    secondaryDark: 'hsla(75, 100%, 35%, 1)',

    tertiaryLight: 'hsla(54, 100%, 55%, 1)',
    tertiaryBase: 'hsla(54, 100%, 50%, 1)',
    tertiaryBaseAlpha50: 'hsla(54, 100%, 50%, 0.5)',
    tertiaryBaseAlpha80: 'hsla(54, 100%, 50%, 0.8)',
    tertiaryDark: 'hsla(54, 100%, 45%, 1)',

    greyLightest: '#f8fafc',
    greyLighter: '#f1f5f8',
    greyLight: '#e2ebf3',
    greyBase: '#b8c2cc',
    greyDark: '#8795a1',
    greyDarker: '#606f7b',
    greyDarkest: '#3d4852',

    whiteBase: 'hsla(0, 0%, 100%, 1)',
    whiteBaseAlpha50: 'hsla(0, 0%, 100%, 0.5)',
    whiteBaseAlpha80: 'hsla(0, 0%, 100%, 0.8)',

    blackBase: 'hsla(0, 0%, 0%, 1)',
    blackBaseAlpha50: 'hsla(0, 0%, 0%, 0.5)',
    blackBaseAlpha80: 'hsla(0, 0%, 0%, 0.8)',

    negativeBase: 'hsla(0, 67%, 50%, 1)',
    negativeBaseAlpha50: 'hsla(0, 67%, 50%, 0.5)',
    negativeBaseAlpha80: 'hsla(0, 67%, 50%, 0.8)',

    current: 'currentColor',
    transparent: 'transparent',
  },

  size: {
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem',
    '40': '10rem',
    '48': '12rem',
    '56': '14rem',
    '64': '16rem',
    auto: 'auto',
  },

  margin: {
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem',
    '40': '10rem',
    '48': '12rem',
    '56': '14rem',
    '64': '16rem',
    auto: 'auto',
    neg1: '-0.25rem',
    neg2: '-0.5rem',
    neg3: '-0.75rem',
    neg4: '-1rem',
    neg5: '-1.25rem',
    neg6: '-1.5rem',
    neg8: '-2rem',
    neg10: '-2.5rem',
    neg12: '-3rem',
    neg16: '-4rem',
    neg20: '-5rem',
    neg24: '-6rem',
    neg32: '-8rem',
    neg40: '-10rem',
    neg48: '-12rem',
    neg56: '-14rem',
    neg64: '-16rem',
  },

  padding: {
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem',
    '40': '10rem',
    '48': '12rem',
    '56': '14rem',
    '64': '16rem',
  },

  radius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px',
  },

  shadow: {
    none: 'none',
    xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg:
      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl:
      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    xxl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },
}
