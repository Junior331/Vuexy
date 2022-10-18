import { MouseEvent, ReactNode, RefObject } from 'react';

export type Props = {
  disabled?: boolean;
  type?: string;
  onClick?: (e: MouseEvent) => void;
  submit?: boolean;
  children?: ReactNode;
  isUpperCase?: boolean;
};

export type StyledButtonProps = Props & {
  ref?: RefObject<HTMLButtonElement>;
  isuppercase?: string;
};
