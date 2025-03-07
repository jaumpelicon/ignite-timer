import styled from 'styled-components'
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    gap: 1rem;

    a {
      width: 3rem;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      color: ${(props) => props.theme['gray-100']};
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:focus,
      &:active {
        outline: none;
        box-shadow: none;
      }

      &:hover {
        border-top: 3px solid transparent;
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }

      &.active {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`
