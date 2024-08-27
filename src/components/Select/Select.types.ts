import { RuleSet } from 'styled-components';
import { Size } from '../../@types/styled';

export interface SelectProps {
  options?: {
    label: string;
    value: string;
  }[];
  size?: Size;
  icon?: React.ReactNode;
  value?: string;
  onChange?: (e: string) => void;
  disabled?: boolean;
  isError?: boolean;
}

export interface SelectWrapperProps {
  size?: Size;
  disabled: boolean;
}

export interface SelectRootProps {
  size?: Size;
  children: React.ReactNode;
  onClick: () => void;
  isOpen: boolean;
  isError: boolean;
}

export type PickSizeType = (size: Size | undefined) => RuleSet<object>;
export type PickFontSizeType = (size: Size | undefined) => RuleSet<object>;
