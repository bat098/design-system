import Color from 'color';
import { theme } from '../theme';

/**
 * The base class for controls that can be rendered.
 *
 * @deprecated Use the new {@link Control} base class instead.
 */
export const sayHello = () => {
  console.log('hallo');
};
/**
 * Determines the most suitable text color (either black or white) for a given background color to ensure optimal contrast.
 *
 * The function calculates the contrast ratio between the given background color and white, and between the given background color and black.
 * It then returns the text color that provides the highest contrast with the background color.
 *
 * @param backgroundColor - A string representing the background color in any valid CSS color format (e.g., hex, rgb, hsl, etc.).
 * @returns The text color that provides the highest contrast with the specified background color. This will either be `'white'` or `'black'`, based on the contrast ratio.
 *
 * @example
 * ```typescript
 * const textColor = getTextColorForBackground('#ff5733');
 * console.log(textColor); // Outputs 'white' or 'black', depending on the contrast calculation
 * ```
 *
 * @remarks
 * The function relies on the `Color` library to compute color contrast and assumes the existence of a `theme` object with `colors.white` and `colors.black` properties.
 * Ensure that the `theme` object and `Color` library are properly imported and configured in your project.
 */
export const getTextColorForBackground = (backgroundColor: string): string => {
  const white = Color(theme.colors.white);
  const black = Color(theme.colors.black);
  const bgColor = Color(backgroundColor);

  return bgColor.contrast(white) > bgColor.contrast(black)
    ? theme.colors.white
    : theme.colors.black;
};
