import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    color: {
      mainColor: string,
      baseColor: string,
      textColor: string,
      lightGray: string,
      gray: string,
      paleGray: string,
      lightGreen: string,
      darkGreen: string,
      pink: string,
      white: string
    }
  }
}