import React, { ChangeEvent, useState } from 'react';
import style
  from '../../../Pages/PacksPage/PacksPage/PackList/modulsComponents/AddPackComponent/AddPackComponent.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { TestAddCardComponentType } from './types';
import { getIsLoad } from '../../../../../Redux/Selectors/appSelectors/appSelectors';
import { addNewCardTC } from '../../../../../Redux/Thunk/cardsThunk/cardsThunk';
import { cardsActions } from '../../../../../Redux/Actions/cardsActions/cardsActions';

const AddCardComponent = ( { packId }: TestAddCardComponentType ) => {

  const dispatch = useDispatch();

  const isLoad = useSelector( getIsLoad );

  const [ question, setQuestion ] = useState<string>( '' );
  const [ answer, setAnswer ] = useState<string>( '' );

  const onAddCardButtonClick = () => {
    if ( packId ) {
      dispatch( addNewCardTC( question, answer, packId ) );
      dispatch( cardsActions.setCardModeAC( null ) );
    }
  };
  const onCancelButtonClick = () => {
    dispatch( cardsActions.setCardModeAC( null ) );
  };
  const onQuestionInputChange = ( e: ChangeEvent<HTMLInputElement> ) => {
    setQuestion( e.currentTarget.value );
  };
  const onAnswerInputChange = ( e: ChangeEvent<HTMLInputElement> ) => {
    setAnswer( e.currentTarget.value );
  };

  return (
    <div className={ style.addItemContainer }>
      <h2>Add new card:</h2>
      <div className={ style.centerInputContainer }>
        <span>
          Question: ✎
        </span>
        <input disabled={ isLoad }
               type="text"
               value={ question }
               onChange={ onQuestionInputChange }
        />
      </div>
      <div className={ style.centerInputContainer }>
        <span>
          Answer: ✎
        </span>
        <input disabled={ isLoad }
               type="text"
               value={ answer }
               onChange={ onAnswerInputChange }
        />
      </div>
      <div className={ style.buttonsContainer }>
        <button onClick={ onCancelButtonClick } disabled={ isLoad }>Cancel</button>
        <button onClick={ onAddCardButtonClick } disabled={ isLoad }>Add</button>
      </div>
    </div>
  );
};

export default AddCardComponent;
