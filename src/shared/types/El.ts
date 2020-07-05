/*
El: Helper that automatically omits ref & children from elements,
optionally can pass custom union of attributes to omit as a second argument
*/

export type El<
  K extends keyof JSX.IntrinsicElements,
  O extends keyof JSX.IntrinsicElements[K] = 'children' | 'ref'
> = Omit<JSX.IntrinsicElements[K], 'children' | 'ref' | O>
