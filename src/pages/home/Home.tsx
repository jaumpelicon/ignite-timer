import { Play } from '@phosphor-icons/react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartButton,
  TaskInput,
} from './home_styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="De um nome ao seu projeto"
            type="text"
          />
          <datalist id="task-suggestions">
            <option value="projeto x" />
          </datalist>

          <label htmlFor="MinutesAmount">Durante</label>
          <MinutesAmountInput
            id="MinutesAmount"
            type="number"
            placeholder="00"
            step={5}
            max={60}
            min={5}
          />
          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartButton type="submit">
          <Play size={24} />
          Começar
        </StartButton>
      </form>
    </HomeContainer>
  )
}
