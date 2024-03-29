import { BaseType, Prettify } from './base.types';

export enum EnumTaskPriority {
  low = 'low',
  medium = 'medium',
  high = 'high',
}

export type TaskType = Prettify<
  BaseType & {
    name: string;
    priority?: EnumTaskPriority;
    isCompleted: boolean;
  }
>;

export type TypeTaskFormStateType = Partial<Omit<TaskType, 'id' | 'updatedAt'>>;
