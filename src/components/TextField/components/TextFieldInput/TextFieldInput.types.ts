import { RuleSet } from 'styled-components';
import { Size } from '../../../../@types/styled';

export type SideType = 'left' | 'right' | 'both' | 'none';

export type PickType = (isLeft: boolean, isRight: boolean) => SideType;

export type PickSizeType = (size: Size | undefined) => RuleSet<object>;
