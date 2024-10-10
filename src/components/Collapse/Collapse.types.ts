export interface CollapseInterface {
  isOpen: boolean;
  children: React.ReactNode;
  onAnimationEnd?: React.TransitionEventHandler<HTMLDivElement>;
  onAnimationStart?: () => void;
}
