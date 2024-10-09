import { RuleSet } from 'styled-components';
import { Colors } from '../../@types/styled';

export type OrientationType = 'vertical' | 'horizontal';

export interface DividerInterface {
  orientation?: OrientationType;
  color?: keyof Colors;
}

export type PickOrientation = (
  orientation: OrientationType | undefined
) => RuleSet<object>;
