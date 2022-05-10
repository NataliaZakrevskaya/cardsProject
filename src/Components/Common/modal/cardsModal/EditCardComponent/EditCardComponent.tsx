import React, { ChangeEvent, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { EditCardComponentType } from './types';
import { getIsLoad } from '../../../../../Redux/Selectors/appSelectors/appSelectors';
import { updateCardTC } from '../../../../../Redux/Thunk/cardsThunk/cardsThunk';
import style from './EditCardComponent.module.css';
import commonStyle from '../../commonModalStyles.module.css';

export const EditCardComponent = ( { card, setMode }: EditCardComponentType ) => {

  const { question, answer, _id } = { ...card };

  const dispatch = useDispatch();

  const isLoad = useSelector( getIsLoad );

  const [ newQuestion, setNewQuestion ] = useState<string>( question );
  const [ newAnswer, setNewAnswer ] = useState<string>( answer );

  const updatedCard = {
    _id,
    question: newQuestion,
    answer: newAnswer,
    comments: '',
  };

  const onCancelButtonClick = () => {
    setMode();
  };
  const onSaveButtonClick = () => {
    console.log( updatedCard );
    dispatch( updateCardTC( updatedCard ) );
    setMode();
  };
  const onQuestionInputChange = ( e: ChangeEvent<HTMLInputElement> ) => {
    setNewQuestion( e.currentTarget.value );
  };
  const onAnswerInputChange = ( e: ChangeEvent<HTMLInputElement> ) => {
    setNewAnswer( e.currentTarget.value );
  };

  return (
    <div className={ style.editCardModalContainer }>
      <h2>Card info:</h2>
      <div className={ style.editBlock }>
        <span>Question</span>
        <input disabled={ isLoad }
               type="text"
               value={ newQuestion }
               onChange={ onQuestionInputChange }
        />
        <span>Answer</span>
        <input disabled={ isLoad }
               type="text"
               value={ newAnswer }
               onChange={ onAnswerInputChange }
        />
      </div>
      <div className={ commonStyle.btnGroup }>
        <button className={ commonStyle.cancelBtn } onClick={ onCancelButtonClick } disabled={ isLoad }>Cancel</button>
        <button className={ commonStyle.actionBtn } onClick={ onSaveButtonClick } disabled={ isLoad }>Save</button>
      </div>
    </div>
  );
};

export default EditCardComponent;
