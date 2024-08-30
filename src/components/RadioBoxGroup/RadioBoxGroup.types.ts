import { RadioBoxProps } from '../RadioBox/RadioBox.types';

export type SignleRadioBox = Pick<
  RadioBoxProps,
  'label' | 'value' | 'color' | 'size'
>;

export interface RadioBoxGroupProps {
  items: SignleRadioBox[];
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export type HandleChangeType = (e: React.ChangeEvent<HTMLInputElement>) => void;
