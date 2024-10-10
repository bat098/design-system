import { CollapseInterface } from './Collapse.types';
import { Content, StyledCollapse } from './Collapse.styled';
import { useEffect, useState } from 'react';

const Collapse = (props: CollapseInterface) => {
  const {
    isOpen,
    children,
    onAnimationStart = () => {},
    onAnimationEnd = () => {},
  } = props;
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    hasMounted ? onAnimationStart() : setHasMounted(true);
    //eslint-disable-next-line
  }, [isOpen]);

  return (
    <StyledCollapse
      isOpen={isOpen}
      onAnimationStart={onAnimationStart}
      onTransitionEnd={onAnimationEnd}
    >
      <Content>{children}</Content>
    </StyledCollapse>
  );
};

export default Collapse;
