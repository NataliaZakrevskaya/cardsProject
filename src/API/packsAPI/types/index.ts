export type UpdatedType =
  '0updated'
  | '1updated'
  | '0cardsCount'
  | '1cardsCount'
  | '0packName'
  | '1packName'
  | '0grade'
  | '1grade'
  | '1created'
  | '0created'

export type newPackType = {
  name: string
  deckCover: string
  private: boolean
}

export type UpdatedPackType = {
  _id: string
  name: string
}