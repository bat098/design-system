import { RuleSet } from 'styled-components';
import { Colors, Size } from '../../@types/styled';
import { PickAttributeFromHTMLElement } from '../../types';

export type SwitchColors = keyof Pick<
  Colors,
  | 'black'
  | 'danger'
  | 'gray'
  | 'info'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warn'
>;

export interface SwitchProps {
  checked: boolean;
  onChange: PickAttributeFromHTMLElement<'input', 'onChange'>;
  color?: SwitchColors;
  size?: Size;
  disabled?: boolean;
  innerRef?: React.RefObject<HTMLInputElement>;
}

export interface BallProps {
  checked: boolean;
  size: Size;
}

export interface WrapperProps
  extends Pick<SwitchProps, 'color' | 'size' | 'checked' | 'disabled'> {}

export type pickColorType = (
  color: SwitchColors | undefined,
  checked: SwitchProps['checked']
) => RuleSet<object>;

export type pickSizeType = (size: SwitchProps['size']) => RuleSet<object>;
