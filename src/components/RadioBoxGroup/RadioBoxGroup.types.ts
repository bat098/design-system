import { RadioBoxType } from '../RadioBox/RadioBox.types';

export type SignleRadioBox = Pick<
  RadioBoxType,
  'label' | 'value' | 'color' | 'size'
>;

export type RadioBoxGroupType = {
  items: SignleRadioBox[];
  name?: string;
  value: string;
  onChange?: React.Dispatch<React.SetStateAction<string>>;
};

export type HandleChangeType = (e: React.ChangeEvent<HTMLInputElement>) => void;
