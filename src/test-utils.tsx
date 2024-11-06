import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { AppProviders } from './providers/AppProviders';
import styled, { css } from 'styled-components';

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AppProviders, ...options });

export { customRender as render };

/**
 * Helper function to extract all CSS properties from a styled-components CSS template.
 *
 * This function renders a temporary component that applies the given CSS and retrieves
 * the computed styles of that component. It then returns an object where each key is
 * a CSS property name and each value is the corresponding value of that property.
 *
 * The returned object is useful for testing or checking if the styles applied to a component
 * match the expected values.
 *
 * @param cssStyle - A styled-components CSS template or object. This can be a result of
 *                   using the `css` function from `styled-components` to create a
 *                   block of CSS rules.
 * @returns An object where keys are CSS property names (e.g., 'font-size', 'color')
 *          and values are the corresponding CSS values (e.g., '1rem', 'blue').
 *
 * @example
 * // Usage example
 * const smallStyle = css`
 *   font-size: 1rem;
 *   color: blue;
 *   padding: 10px;
 * `;
 *
 * const styles = getStylesFromCss(smallStyle);
 * console.log(styles); // { 'font-size': '1rem', 'color': 'blue', 'padding': '10px' }
 */
export const getStylesFromCss = (
  cssStyle: ReturnType<typeof css>
): Record<string, string> => {
  // Create a temporary component that applies the given CSS
  const TestComponent = styled.div`
    ${cssStyle}
  `;

  // Render it
  const { container } = render(<TestComponent />);
  const element = container.firstChild as HTMLElement;

  // Get the computed styles
  const computedStyles = getComputedStyle(element);

  const styleObject: Record<string, string> = {};

  // Iterate through all the CSS properties and build the styleObject
  Array.from(computedStyles).forEach((property) => {
    styleObject[property] = computedStyles.getPropertyValue(property);
  });

  return styleObject;
};
