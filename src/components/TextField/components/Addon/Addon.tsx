import { AddonProps } from './Addon.types';
import styled, { css } from 'styled-components';

const Addon = (props: AddonProps) => {
  const { position, children } = props;
  return <Root position={position}>{children}</Root>;
};

export default Addon;

const leftStyle = css`
  border-left: 0.1rem solid ${(props) => props.theme.colors.gray};
  border-radius: 0.4rem 0 0 0.4rem;
`;

const rightStyle = css`
  border-radius: 0 0.4rem 0.4rem 0;
  border-right: 0.1rem solid ${(props) => props.theme.colors.gray};
`;

const Root = styled.div<AddonProps>`
  color: ${(props) => props.theme.colors.gray};
  background-color: ${(props) => props.theme.colors.lightGray};
  padding: 0 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => (props.position === 'left' ? leftStyle : rightStyle)}
  border-top: 0.1rem solid ${(props) => props.theme.colors.gray};
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.gray};
`;
