import { PickAttributeFromHTMLElement } from '../../types';
import { CSSProperties } from 'react';

export type TextareaProps = {
  rows?: number;
  disabled?: PickAttributeFromHTMLElement<'textarea', 'disabled'>;
  resize?: CSSProperties['resize'];
  placeholder?: string;
  isError?: boolean;
};
