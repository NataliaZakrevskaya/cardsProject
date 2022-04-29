export type addCardType = {
  cardsPack_id: string
  question: string
  answer: string
  grade: number
  shots: number
  answerImg: string
  questionImg: string
  questionVideo: string
  answerVideo: string
}

export type UpdatedGradeType = {
  _id: string
  cardsPack_id: string
  card_id: string
  user_id: string
  grade: number
  shots: number
}