import type { Theme, El } from '../shared/types'

export interface SpinnerProps extends El<'div'> {
  /** The size to use */
  size?: keyof Pick<Theme['size'], '2' | '3' | '4' | '5' | '6' | '8' | '10'>
  /** The color to use */
  color?: keyof Pick<
    Theme['color'],
    | 'greyDarkest'
    | 'greyDarker'
    | 'greyDark'
    | 'greyBase'
    | 'greyLight'
    | 'primaryBase'
    | 'secondaryBase'
    | 'tertiaryBase'
    | 'whiteBase'
  >
  /** The ref to forward  */
  forwardRef?: React.RefObject<HTMLDivElement>
}
