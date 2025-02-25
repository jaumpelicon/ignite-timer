import { createContext, ReactNode, useState } from 'react'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishDate?: Date
}

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
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function markCycleFinish() {
    setCycles((state) =>
      state.map((cycle) => {
        return cycle.id === activeCycleId
          ? { ...cycle, finishDate: new Date() }
          : cycle
      }),
    )
    setActiveCycleId(null)
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
    setCycles((prevCycles) => [...prevCycles, newCycle])
    setActiveCycleId(newCycle.id)
    setAmountSecondsPassed(0)
  }

  function stopCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        return cycle.id === activeCycleId
          ? { ...cycle, interruptedDate: new Date() }
          : cycle
      }),
    )
    setActiveCycleId(null)
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
