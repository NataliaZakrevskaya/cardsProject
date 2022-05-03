import React, { ChangeEvent, useEffect } from 'react';
import style from './CardsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import TableCardsHeader from './Table/TableCardsHeader/TableCardsHeader';
import Card from './Card/Card';
import TablesCardsPagination from './Table/TablesCardsPagination/TablesCardsPagination';
import { cardsTC } from '../../../../Redux/Thunk/cardsThunk/cardsThunk';
import { cardsActions } from '../../../../Redux/Actions/cardsActions/cardsActions';
import ModalComponent from '../../../Common/modal/modalComponent';
import GlobalError from '../../../Common/globalError/globalError';
import { getGlobalError, getIsLoad } from '../../../../Redux/Selectors/appSelectors/appSelectors';
import { getCards, getCardsState } from '../../../../Redux/Selectors/cardsSelectors/cardsSelectors';
import { UpdatedType } from '../../../../API/packsAPI/types';
import { useDebounce } from '@react-hook/debounce';
import { appActions } from '../../../../Redux/Actions/appActions/appActions';
import { CardsListType } from './types';
import { getUserId } from './cardsListHelpers';
import { ModeEnum } from '../../../../enums';
import AddCardComponent from '../../../Common/modal/cardsModal/AddCardComponent/AddCardComponent';

const CardsList = ( { name, packId }: CardsListType ) => {

  const dispatch = useDispatch();

  const isLoad = useSelector( getIsLoad );
  const globalError = useSelector( getGlobalError );
  const allCards = useSelector( getCards );
  const cardsState = useSelector( getCardsState );

  const user_id = getUserId( allCards, packId );
  const { cards, cardQuestion, pageCount, page, cardAnswer, sortCards, mode } = { ...cardsState };

  const debouncedCardsSearchName = useDebounce<string>( cardQuestion, 1500 );
  const debouncedCardsOnPage = useDebounce<number>( pageCount, 1000 );
  const debouncedPageCardsChanged = useDebounce<number>( page, 1000 );
  const debouncedSearchCardQ = useDebounce<string>( cardQuestion, 1000 );
  const debouncedSearchCardA = useDebounce<string>( cardAnswer, 1000 );
  const debouncedSearchLastUpdated = useDebounce<UpdatedType>( sortCards, 0 );

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

  const searchCard = ( e: ChangeEvent<HTMLInputElement> ) => {
    dispatch( cardsActions.searchCardAC( e.currentTarget.value ) );
  };
  const onAddButtonClick = () => {
    dispatch( cardsActions.setCardModeAC( ModeEnum.ADD ) );
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
          <ModalComponent
            backgroundOnClick={ () => {
              dispatch( cardsActions.setCardModeAC( null ) );
              dispatch( appActions.setGlobalErrorAC( '' ) );

            } }
            show={ mode === ModeEnum.ADD || globalError !== '' }
            height={ 0 }
            width={ 0 }
            backgroundStyle={ mode === ModeEnum.ADD ? { backgroundColor: 'rgba(89,61,215,0.13)' } : { backgroundColor: 'rgba(255,3,3,0.15)' } }
            enableBackground={ true }>
            {
              mode === ModeEnum.ADD &&
                <AddCardComponent packId={ packId }/>
            }
            {
              globalError !== '' &&
                <GlobalError/>
            }
          </ModalComponent>
          <TablesCardsPagination/>
        </div>
      </div>
    </div>
  );
};

export default CardsList;
