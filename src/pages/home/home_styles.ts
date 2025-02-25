import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3.5rem;
  }
`

const BaseButton = styled.button`
  color: ${(props) => props.theme['gray-100']};

  padding: 1rem;
  border-radius: 8px;
  width: 100%;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartButton = styled(BaseButton)`
  background: ${(props) => props.theme['green-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
`

export const StopButton = styled(BaseButton)`
  background: ${(props) => props.theme['red-500']};

  &:focus {
    box-shadow: none;
  }
  &:not(:disabled):hover {
    background: ${(props) => props.theme['red-700']};
  }
`
