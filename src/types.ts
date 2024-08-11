/**
 * Extracts the type of a specified attribute from a given HTML element type in JSX.
 *
 * This utility type allows you to retrieve the type of a specific attribute from an HTML element type within the JSX namespace.
 *
 * @typeParam TElement - The key of the HTML element type from JSX.IntrinsicElements.
 * @typeParam TAttribute - The key of the attribute whose type you want to extract from the specified HTML element type.
 *
 * @returns The type of the specified attribute from the given HTML element type.
 *
 * @example
 * ```typescript
 * // Retrieves the type of the 'href' attribute from an anchor (<a>) element
 * type AnchorHrefType = PickAttributeFromHTMLElement<'a', 'href'>;
 * // AnchorHrefType is of type string | undefined
 *
 * // Retrieves the type of the 'disabled' attribute from a button (<button>) element
 * type ButtonDisabledType = PickAttributeFromHTMLElement<'button', 'disabled'>;
 * // ButtonDisabledType is of type boolean | undefined
 * ```
 */
export type PickAttributeFromHTMLElement<
  TElement extends keyof JSX.IntrinsicElements,
  TAttribute extends keyof React.ComponentProps<TElement>,
> = React.ComponentProps<TElement>[TAttribute];

/**
 * Constructs a type by excluding properties K from type T.
 *
 * This utility type takes two type parameters:
 * - `T` which represents the original type.
 * - `K` which represents the keys to be excluded from the type `T`.
 *
 * It produces a new type which has all the properties of `T` except the ones specified in `K`.
 *
 * @typeParam T - The original type from which properties will be excluded.
 * @typeParam K - The keys that should be excluded from the original type `T`.
 *
 * @example
 * ```typescript
 * type User = {
 *   id: number;
 *   name: string;
 *   email: string;
 *   age: number;
 * };
 *
 * type UserWithoutEmail = ExcludeKeys<User, 'email'>;
 * // Resulting type:
 * // {
 * //   id: number;
 * //   name: string;
 * //   age: number;
 * // }
 * ```
 */
export type ExcludeKeys<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};
