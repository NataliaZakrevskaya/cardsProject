export type meActionsTypes<T> = T extends { [key: string]: infer A } ? A : never