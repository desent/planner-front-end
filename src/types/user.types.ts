export type UserType = {
  id: string;
  name?: string;
  email: string;

  workInterval?: number;
  breakInterval?: number;
  intervalsCount?: number;
};

export type UserFormType = Partial<Omit<UserType, 'id'>> & { password: string };
