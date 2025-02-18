import styled, { css } from 'styled-components'

export type ButtonVariants = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariants
}

const ButtonVariant = {
  primary: 'purple',
  secondary: 'blue',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 6px;
  margin: 10px;
  border: none;
  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  /* ${(props) => {
    return css`
      background-color: ${ButtonVariant[props.variant]};
    `
  }} */
`
