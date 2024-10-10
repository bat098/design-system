import { RuleSet } from 'styled-components';
import { IStyledComponentBase, Substitute } from 'styled-components/dist/types';
import { Colors } from '../../@types/styled';

export type componenetType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeaderInterface {
  children: React.ReactNode;
  component?: componenetType;
  variant?: componenetType;
  color?: keyof Colors;
}

export type PickVariantStyles = (
  variant: componenetType | undefined
) => RuleSet<object>;

export type pickStyledComponent = (
  component: componenetType
) => IStyledComponentBase<
  'web',
  Substitute<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
    HeaderInterface
  >
> &
  string;

export type stylesType = Record<componenetType, RuleSet<object>>;
