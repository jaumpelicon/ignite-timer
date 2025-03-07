import {
  createContext,
  ReactNode,
  useState,
  useReducer,
  useEffect,
} from 'react'
import { Cycle, cyclesReducer } from '../reducers/cycles/reducer'
import {
  addNewCycleAction,
  finishCycleAction,
  stopCycleAction,
} from '../reducers/cycles/actions'

interface CycleData {
  task: string
  minutesAmount: number
}

interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCycleFinish: () => void
  setSecondsPassed: (time: number) => void
  createNewCycle: (data: CycleData) => void
  stopCycle: () => void
}

interface CyclesContextProviderProps {
  children: ReactNode
}

export const CyclesContext = createContext({} as CyclesContextType)

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    () => {
      const storageState = localStorage.getItem(
        '@ignite-timer:cycles-state-1.0.0',
      )
      if (storageState) {
        console.log(storageState)
        return JSON.parse(storageState)
      }
    },
  )

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)
    localStorage.setItem('@ignite-timer:cycles-state-1.0.0', stateJSON)
  }, [cyclesState])

  const { cycles, activeCycleId } = cyclesState

  const activeCycle = cycles.find((cycle) => cycle?.id === activeCycleId)

  function markCycleFinish() {
    dispatch(finishCycleAction())
  }

  function setSecondsPassed(time: number) {
    setAmountSecondsPassed(time)
  }

  function createNewCycle(data: CycleData) {
    const newCycle = {
      id: String(Date.now()),
      ...data,
      startDate: new Date(),
    }
    dispatch(addNewCycleAction(newCycle))
    setAmountSecondsPassed(0)
  }

  function stopCycle() {
    dispatch(stopCycleAction())
  }
  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCycleFinish,
        amountSecondsPassed,
        setSecondsPassed,
        createNewCycle,
        stopCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
