export type BaseType = {
  id: string;
  createdAt?: string;
  updatedAt?: string;
};

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
