import { getDefaultPropsFromTheme } from '../../helpers/helpers';
import { Root } from './Textarea.styled';
import { TextareaProps } from './Textarea.types';
import { textareaDefaultProps } from './Textarea.defaultProps';

const Textarea = (props: TextareaProps) => {
  return <Root {...props} />;
};

export default Textarea;

const defaultPropsFromTheme = getDefaultPropsFromTheme('TextArea');
Root.defaultProps = { ...textareaDefaultProps, ...defaultPropsFromTheme };
