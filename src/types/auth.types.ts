import { UserType } from "./user.types";

export type AuthFormType = {
  email: string
  password: string
}

export type AuthResponseType = {
  accessToken: string
  user: UserType
}

