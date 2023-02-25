export type User = {
  _id?: string | null,
  email?: string | null,
  login?: string | null,
  firstName?: string | null,
  secondName?: string | null,
  password?: string | null,
  role?: string | null
}
export type Token = {
  accessToken: string | null
}