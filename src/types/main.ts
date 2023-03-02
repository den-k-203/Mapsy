export type Message = {
    message: string,
}

export type User = {
    _id?: string,
    email: string,
    login: string,
    firstName: string,
    secondName: string,
    password: string,
    role: string
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