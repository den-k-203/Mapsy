export type Message = {
    message: string,
}

export type User = {
    _id?: string | undefined,
    email: string,
    login: string,
    firstName: string,
    secondName: string,
    password: string,
    role: string
}

export type UserDTO = {
    _id?: string | undefined,
    email: string,
    login: string,
    firstName: string,
    secondName: string,
    role: string
}

export type UserId = {
    _id: string
}

export type LoginData = {
    logIdent: string,
    password: string,
}
export type AccessToken = {
    accessToken: string
}

export type IdDO = {
    _id: string
}

export type Role = {
    value: string
}