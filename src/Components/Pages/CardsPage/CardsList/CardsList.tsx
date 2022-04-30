import React, { ChangeEvent, useEffect } from 'react';
import style from './CardsList.module.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TableCardsHeader from './Table/TableCardsHeader/TableCardsHeader';
import Card from './Card/Card';
import TablesCardsPagination from './Table/TablesCardsPagination/TablesCardsPagination';
import { cardsTC } from '../../../../Redux/Thunk/cardsThunk/cardsThunk';
import { cardsActions } from '../../../../Redux/Actions/cardsActions/cardsActions';
import Modal from '../../../Common/modal/modal';
import AddCardComponent from './modulsComponents/AddCardComponent/AddCardComponent';
import GlobalError from '../../../Common/globalError/globalError';
import { setGlobalErrorAC } from '../../../../Redux/Reducers/appReducer/appReducer';
import { Undetectable } from '../../../../types';
import { getGlobalError, getIsLoad } from '../../../../Redux/Selectors/appSelectors/appSelectors';
import { getCardsState } from '../../../../Redux/Selectors/cardsSelectors/cardsSelectors';
import { AppStateType } from '../../../../Redux/Store/store';
import { UpdatedType } from '../../../../API/packsAPI/types';
import { useDebounce } from '@react-hook/debounce';

type CardsListType = {
  name: string
  packId: Undetectable<string>
}

const CardsList = ( { name }: CardsListType ) => {

  const dispatch = useDispatch();

  const { packId } = useParams<'packId'>();

  const isLoad = useSelector( getIsLoad );
  const globalError = useSelector( getGlobalError );
  const user_id = useSelector<AppStateType, string>( state => state.cards.cards.filter( f => f.cardsPack_id === packId )[ 0 ]?.user_id );
  const cardsState = useSelector( getCardsState );

  const { cards, cardQuestion, pageCount, page, cardAnswer, sortCards, mode } = { ...cardsState };

  const debouncedCardsSearchName = useDebounce<string>( cardQuestion, 1500 );
  const debouncedCardsOnPage = useDebounce<number>( pageCount, 1000 );
  const debouncedPageCardsChanged = useDebounce<number>( page, 1000 );
  const debouncedSearchCardQ = useDebounce<string>( cardQuestion, 1000 );
  const debouncedSearchCardA = useDebounce<string>( cardAnswer, 1000 );
  const debouncedSearchLastUpdated = useDebounce<UpdatedType>( sortCards, 0 );

  const searchCard = ( e: ChangeEvent<HTMLInputElement> ) => {
    dispatch( cardsActions.searchCardAC( e.currentTarget.value ) );
  };

  useEffect( () => {
      if ( packId ) {
        dispatch( cardsTC( packId ) );
      }
    }, [ debouncedCardsSearchName[ 0 ],
      debouncedCardsOnPage[ 0 ],
      debouncedPageCardsChanged[ 0 ],
      debouncedSearchCardQ[ 0 ],
      debouncedSearchCardA[ 0 ],
      debouncedSearchLastUpdated[ 0 ],
    ],
  );

  const onAddButtonClick = () => {
    dispatch( cardsActions.setCardModeAC( 'add' ) );
  };

  return (
    <div className={ style.cardsListBlock }>
      <div className={ style.cardsList }>
        <div className={ style.searchContainer }>
          <h2> Pack Name: { name }</h2>
          <input
            disabled={ isLoad }
            placeholder={ 'Search...' }
            value={ cardQuestion }
            onChange={ searchCard }
          />

          <button
            disabled={ isLoad }
            onClick={ onAddButtonClick }>
            Add New Card
          </button>

        </div>
        <div className={ style.cardsBlock }>
          <TableCardsHeader user_id={ user_id }/>
          {
            cards?.map( ( tableRow, index ) => {
              return (
                <Card
                  key={ index }
                  content={ tableRow }
                />
              );
            } )
          }

          <Modal
            backgroundOnClick={ () => {
              dispatch( cardsActions.setCardModeAC( null ) );
              dispatch( setGlobalErrorAC( '' ) );

            } }
            show={ mode === 'add' || globalError !== '' }
            height={ 0 }
            width={ 0 }
            backgroundStyle={ mode === 'add' ? { backgroundColor: 'rgba(89,61,215,0.13)' } : { backgroundColor: 'rgba(255,3,3,0.15)' } }
            enableBackground={ true }>
            {
              mode === 'add' &&
                <AddCardComponent packId={ packId }/>
            }
            {
              globalError !== '' &&
                <GlobalError/>
            }
          </Modal>

          <TablesCardsPagination/>
        </div>
      </div>
    </div>
  );
};

export default CardsList;
