import { Cycle, CycleCallAction } from "./reducer";

export enum CycleActions {
  start = 'ADD_NEW_CYCLE',
  stop = 'STOP_CYCLE',
  finish = 'FINISH_CURRENT_CYCLE',
}

export function addNewCycleAction(newCycle: Cycle): CycleCallAction {
  return {
    type: CycleActions.start,
    payload: {
      newCycle,
    },
  }
}

export function stopCycleAction(): CycleCallAction {
  return {
    type: CycleActions.stop,
    payload: null,
  }
}

export function finishCycleAction(): CycleCallAction {
  return {
    type: CycleActions.finish,
    payload: null,
  }
}