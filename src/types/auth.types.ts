export type AuthFormType = {
  email: string
  password: string
}

export type UserType = {
  id: string
  name?: string
  email: string

  workInterval?: number
  breakInterval?: number
  intervalsCount?: number
}

export type AuthResponseType = {
  accessToken: string
  user: UserType
}
