export type Role = 'admin' | 'manager' | 'valet'

export type typeGetUserType = {
  uid: string
  roles: Role[]
}