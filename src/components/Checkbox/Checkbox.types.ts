import { PickAttributeFromHTMLElement } from './../../types';

export type ChecboxOwnType = {
  value?: boolean;
  onChange?: PickAttributeFromHTMLElement<'input', 'onChange'>;
};

export type CheckBoxWithChildren = ChecboxOwnType & {
  children?: React.ReactNode;
};

export type CheckBoxWithoutChildren = ChecboxOwnType & {
  id?: PickAttributeFromHTMLElement<'input', 'id'>;
};

export type CheckBoxType = CheckBoxWithChildren | CheckBoxWithoutChildren;
