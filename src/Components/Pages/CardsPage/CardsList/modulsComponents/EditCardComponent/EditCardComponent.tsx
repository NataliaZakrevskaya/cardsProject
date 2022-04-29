import React, { ChangeEvent, useState } from 'react';
import style
  from '../../../../PacksPage/PacksPage/PackList/modulsComponents/AddPackComponent/AddPackComponent.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateCardTC } from '../../../../../../Redux/Thunk/cardsThunk/cardsThunk';
import { getIsLoad } from '../../../../../../Redux/Selectors/appSelectors/appSelectors';
import { EditCardComponentType } from './types';

const EditCardComponent = ( { card, setMode }: EditCardComponentType ) => {

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

  const saveCard = () => {
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
    <div className={ style.addItemContainer }>
      <h2>Edit card:</h2>
      <div className={ style.centerInputContainer }>
        <span>
          Enter new card question <span>&nbsp; ✎</span>
        </span>
        <input disabled={ isLoad }
               type="text"
               value={ newQuestion }
               onChange={ onQuestionInputChange }
        />
        <span>
          Enter new card answer <span>&nbsp; ✎</span>
        </span>
        <input disabled={ isLoad }
               type="text"
               value={ newAnswer }
               onChange={ onAnswerInputChange }
        />
      </div>
      <div>
        <button onClick={ () => setMode() } disabled={ isLoad }>Cancel</button>
        <button onClick={ saveCard } disabled={ isLoad }>Save changes</button>
      </div>
    </div>
  );
};

export default EditCardComponent;
