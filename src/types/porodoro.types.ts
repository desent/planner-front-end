import { BaseType } from "./base.types"

export type PomodoroRoundResponseType = BaseType & {
  isCompleted?: boolean
  totalSeconds: number
}

export type PomodoroSessionResponseType = BaseType & {
  isCompleted?: boolean
  rounds?: PomodoroRoundResponseType[]
}

export type PomodoroSessionStateType = Partial<Omit<PomodoroSessionResponseType, keyof BaseType>>

export type PomodoroRoundStateType = Partial<Omit<PomodoroRoundResponseType,  keyof BaseType>>
