import { BaseType, Prettify } from './base.types';

export type PomodoroRoundResponseType = Prettify<
  BaseType & {
    isCompleted?: boolean;
    totalSeconds: number;
  }
>;

export type PomodoroSessionResponseType = Prettify<
  BaseType & {
    isCompleted?: boolean;
    rounds?: PomodoroRoundResponseType[];
  }
>;

export type PomodoroSessionStateType = Partial<
  Omit<PomodoroSessionResponseType, keyof BaseType>
>;

export type PomodoroRoundStateType = Partial<
  Omit<PomodoroRoundResponseType, keyof BaseType>
>;
