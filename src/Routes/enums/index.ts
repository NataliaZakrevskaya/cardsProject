export enum routesPathsEnum {
  PROFILE = '/',
  LOGIN = '/login',
  REGISTER = '/register',
  RECOVERY = '/passwordRecovery',
  PACKS = '/packs',
  CARDS = '/cards',
  CARDS_WITH_ID = '/cards/:packId',
  SET_PASS = '/set-new-password/:token',
  NOT_FOUND = '/404',
  LOGOUT = '/logout',
  LEARNED_CARD = '/card',
  LEARNED_CARD_WITH_ID = '/card/:packId/:cardId',
}