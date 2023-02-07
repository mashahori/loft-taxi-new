import {
  DefaultTheme,
  css,
  CSSObject,
  InterpolationFunction,
  ThemedStyledProps,
  Interpolation,
  FlattenInterpolation,
} from "styled-components";

const breakpoints = {
  mobile: 740,
  small: 1280,
  medium: 1640,
  large: 1920,
};

export type MediaFunction = <P extends object>(
  first:
    | TemplateStringsArray
    | CSSObject
    | InterpolationFunction<ThemedStyledProps<P, DefaultTheme>>,
  ...interpolations: Array<Interpolation<ThemedStyledProps<P, DefaultTheme>>>
) => FlattenInterpolation<ThemedStyledProps<P, DefaultTheme>>;

export const media = (
  Object.keys(breakpoints) as Array<keyof typeof breakpoints>
).reduce((acc, label) => {
  acc[label] = (first: any, ...interpolations: any[]) => css`
    @media (max-width: ${breakpoints[label]}px) {
      ${css(first, ...interpolations)}
    }
  `;

  return acc;
}, {} as { [key in keyof typeof breakpoints]: MediaFunction });

export const theme: DefaultTheme = {
  breakpoints,
  media,
};
