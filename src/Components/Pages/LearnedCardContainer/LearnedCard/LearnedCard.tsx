import React, { useState } from 'react';
import style from './LearnedCard.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { gradeCardTC } from '../../../../Redux/Thunk/cardsThunk/cardsThunk';
import { Undetectable } from '../../../../types';
import { getIsLoad } from '../../../../Redux/Selectors/appSelectors/appSelectors';
import { AppStateType } from '../../../../Redux/Store/types';
import { CardType } from '../../../../Redux/Reducers/cardsReducer/types';
import { PackType } from '../../../../Redux/Reducers/packsReducer/types';
import { routesPathsEnum } from '../../../../Routes/enums';

export const LearnedCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cardId } = useParams<'cardId'>();
  const { packId } = useParams<'packId'>();

  const learnedCard = useSelector<AppStateType, CardType>( state => state.cards.cards.filter( card => card._id === cardId )[ 0 ] );
  const actualPack = useSelector<AppStateType, PackType>( state => state.packs.cardPacks.filter( card => card._id === packId )[ 0 ] );
  const actualPackCards = useSelector<AppStateType, CardType[]>( state => state.cards.cards.filter( card => card.cardsPack_id === packId ) );
  const isLoad = useSelector( getIsLoad );

  const [ showAnswer, setShowAnswer ] = useState<boolean>( false );
  const [ actualCard, setActualCard ] = useState<CardType>( learnedCard );
  const [ cardRate, setCardRate ] = useState<Undetectable<number>>( undefined );

  const getCard = ( cards: CardType[] ) => {
    const sum = cards.reduce( ( acc, card ) => acc + ( 6 - card.grade ) * ( 6 - card.grade ), 0 );
    const rand = Math.random() * sum;
    const res = cards.reduce( ( acc: { sum: number, id: number }, card, i ) => {
        const newSum = acc.sum + ( 6 - card.grade ) * ( 6 - card.grade );
        return { sum: newSum, id: newSum < rand ? i : acc.id };
      }
      , { sum: 0, id: -1 } );

    setActualCard( cards[ res.id + 1 ] );
  };

  const onNextCardButtonClick = () => {
    if ( cardRate ) {
      dispatch( gradeCardTC( cardRate, learnedCard._id ) );
    }
    getCard( actualPackCards );
    setShowAnswer( false );
  };

  const onShowAnswerButtonClick = () => {
    setShowAnswer( !showAnswer );
  };

  const goBack = () => {
    navigate( `${ routesPathsEnum.CARDS }/${ packId }` );
  };

  return (
    <div className={ style.addItemContainer }>
      <h2>Learn "{ actualPack?.name }"</h2>
      <div className={ style.mainText }>
        <b> Question: </b>"{ actualCard?.question }"
      </div>
      {
        showAnswer &&
          <div>
              <div className={ style.answer }>
                  <b>Answer:</b> "{ actualCard?.answer }"
              </div>
              <div className={style.variantsContainer}>
                  <div className={ style.mainText }>
                      <b>Rate yourself:</b>
                  </div>
                  <label className={ style.inputForm }>
                      <input type="radio" onChange={ () => setCardRate( 5 ) } value={ cardRate }
                             name="rate"/> Deep knowledge
                  </label>
                  <label className={ style.inputForm }>
                      <input type="radio" onChange={ () => setCardRate( 4 ) } value={ cardRate }
                             name="rate"/> I knew, but I thought for a long time
                  </label>
                  <label className={ style.inputForm }>
                      <input type="radio" onChange={ () => setCardRate( 3 ) } value={ cardRate }
                             name="rate"/> Confused
                  </label>
                  <label className={ style.inputForm }>
                      <input type="radio" onChange={ () => setCardRate( 2 ) } value={ cardRate }
                             name="rate"/> Forgot

                  </label>
                  <label className={ style.inputForm }>
                      <input type="radio" onChange={ () => setCardRate( 1 ) } value={ cardRate }
                             name="rate"/> I didn't know
                  </label>
              </div>
          </div>
      }
      <div className={ style.btnGroup }>
        <button className={ style.cancelBtn } onClick={ goBack } disabled={ isLoad }>Cancel</button>
        {
          !showAnswer
            ? <button className={ style.actionBtn } onClick={ onShowAnswerButtonClick } disabled={ isLoad }>Show
              answer</button>
            : <button className={ style.actionBtn } onClick={ onNextCardButtonClick } disabled={ isLoad }>Next
              card</button>
        }
      </div>
    </div>
  );
};