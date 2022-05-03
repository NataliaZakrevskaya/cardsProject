import React, { ChangeEvent, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { EditCardComponentType } from './types';
import { getIsLoad } from '../../../../../Redux/Selectors/appSelectors/appSelectors';
import { updateCardTC } from '../../../../../Redux/Thunk/cardsThunk/cardsThunk';

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
    console.log(updatedCard);
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
    <div >
      <h2>Edit card:</h2>
      <div>
        <span>Enter new card question ✎</span>
        <input disabled={ isLoad }
               type="text"
               value={ newQuestion }
               onChange={ onQuestionInputChange }
        />
        <span>Enter new card answer ✎</span>
        <input disabled={ isLoad }
               type="text"
               value={ newAnswer }
               onChange={ onAnswerInputChange }
        />
      </div>
      <div>
        <button onClick={ onCancelButtonClick } disabled={ isLoad }>Cancel</button>
        <button onClick={ onSaveButtonClick } disabled={ isLoad }>Save changes</button>
      </div>
    </div>
  );
};

export default EditCardComponent;
