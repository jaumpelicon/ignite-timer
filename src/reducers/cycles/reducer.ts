import { CycleActions } from './actions'
import { produce } from 'immer'
export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishDate?: Date
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

interface StartCyclePayload {
  newCycle: Cycle
}

export type StopCyclePayload = null
export type FinishCyclePayload = null

export type CycleCallAction =
  | { type: CycleActions.start; payload: StartCyclePayload }
  | { type: CycleActions.stop; payload: StopCyclePayload }
  | { type: CycleActions.finish; payload: FinishCyclePayload }

export function cyclesReducer(
  state: CyclesState,
  action: CycleCallAction,
): CyclesState {
  switch (action.type) {
    case CycleActions.start:
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })
    case CycleActions.stop: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })
      if (currentCycleIndex < 0) return state
      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].interruptedDate = new Date()
      })
    }
    case CycleActions.finish: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })
      if (currentCycleIndex < 0) return state
      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].finishDate = new Date()
      })
    }
    default:
      return state
  }
}
