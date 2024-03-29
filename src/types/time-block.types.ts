import { BaseType } from './base.types';

export type TimeBlockResponseType = BaseType & {
  name: string;
  color?: string;
  duration: number;
  order: number;
};

export type TimeBlockFormStateType = Partial<
  Omit<TimeBlockResponseType, 'createdAt' | 'updatedAt'>
>;
