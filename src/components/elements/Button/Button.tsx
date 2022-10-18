import React from 'react';
import { Props } from './@types';
import { ButtonLarge, ButtonSmall } from './ButtonStyled';

const Button = ({
  type,
  onClick,
  children,
  disabled = false,
  isUpperCase = false,
  ...rest
}: Props) => {
  return (
    (
      <ButtonLarge
        type={type}
        onClick={onClick}
        disabled={disabled}
        isuppercase={isUpperCase ? 'true' : 'false'}
        {...rest}
      >
        {children}
      </ButtonLarge>
    ) || (
      <ButtonSmall
        type={type}
        onClick={onClick}
        disabled={disabled}
        isuppercase={isUpperCase ? 'true' : 'false'}
        {...rest}
      >
        {children}
      </ButtonSmall>
    )
  );
};

export { Button };
