import React, { ChangeEvent, useEffect, useState } from 'react';
import style from './PacksList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from 'use-debounce';
import { useNavigate } from 'react-router-dom';
import DoubleRange from '../../../../Common/doubleRange/doubleRange';
import TablesPagination from '../../../../Common/tablePaginator/tablePaginator';
import { packsActions } from '../../../../../Redux/Actions/packsActions/packsActions';
import { packsTC } from '../../../../../Redux/Thunk/packsThunk/packsThunk';
import TableHeader from '../../../CardsPage/CardsList/Table/TableHeader/TableHeader';
import Pack from './Pack/Pack';
import GlobalError from '../../../../Common/globalError/globalError';
import ModalComponent from '../../../../Common/modal/modalComponent';
import { getPacksState } from '../../../../../Redux/Selectors/packsSelectors/packsSelectors';
import { getGlobalError, getIsLoad } from '../../../../../Redux/Selectors/appSelectors/appSelectors';
import { getOwnId } from '../../../../../Redux/Selectors/profileSelectors/profileSelectors';
import { Nullable } from '../../../../../types';
import { SelectType } from '../../../../../Redux/Selectors/packsSelectors/types';
import { ALL, MY } from '../../../../../Redux/Selectors/packsSelectors/constants';
import { appActions } from '../../../../../Redux/Actions/appActions/appActions';
import { routesPathsEnum } from '../../../../../Routes/enums';
import AddPackComponent from '../../../../Common/modal/packsModal/AddPackComponent/AddPackComponent';

const PacksList = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoad = useSelector( getIsLoad );
  const globalError = useSelector( getGlobalError );
  const ownId = useSelector( getOwnId );
  const packsState = useSelector( getPacksState );

  const {
    cardPacks,
    mode,
    packName,
    pageCount,
    minCardsCount,
    maxCardsCount,
    user_id,
    page,
    updated,
  } = { ...packsState };

  const debouncedSearch = useDebounce<string>( packName, 1000 );
  const debouncedMIN = useDebounce<number>( minCardsCount, 1000 );
  const debouncedMAX = useDebounce<number>( maxCardsCount, 1000 );

  const [ selected, setSelected ] = useState<SelectType>( ALL );

  useEffect( () => {
    debugger
    dispatch( packsTC() );
  }, [ debouncedSearch[ 0 ], user_id, debouncedMIN[ 0 ], debouncedMAX[ 0 ], pageCount, page, updated ] );

  const selectMyOrAll = ( value: Nullable<string> ) => {
    dispatch( packsActions.setAllUserIdCardsAC( value ) );
    value
      ? setSelected( MY )
      : setSelected( ALL );
  };

  const onPackNameInputChange = ( e: ChangeEvent<HTMLInputElement> ) => {
    dispatch( packsActions.searchByPackNameAC( e.currentTarget.value ) );
  };
  const onAddButtonClick = () => {
    dispatch( packsActions.setPacksModeAC( 'add' ) );
  };

  const runToCards = ( packId: string ) => {
    dispatch( packsActions.setAllUserIdCardsAC( '' ) );
    dispatch( packsActions.searchByPackNameAC( '' ) );
    dispatch( packsActions.seCurrentPageAC( 1 ) );
    dispatch( packsActions.setMinCardsCountAC( 0 ) );
    dispatch( packsActions.setMaxCardsCountAC( 100 ) );

    navigate( `${ routesPathsEnum.CARDS }/${ packId }` );
  };
  const onModalClick = () => {
    dispatch( packsActions.setPacksModeAC( null ) );
    dispatch( appActions.setGlobalErrorAC( '' ) );
  };
  const onMyButtonClick = () => {
    selectMyOrAll( ownId );
  };
  const onAllButtonClick = () => {
    selectMyOrAll( null );
  };

  return (
    <div>
      <div className={ style.packsListBlock }>

        <div className={ style.showPacks }>
          <h4 className={ style.title }>
            Show packs cards
          </h4>
          <button
            disabled={ isLoad }
            className={ selected === MY ? style.selected : style.hoverSelected }
            onClick={ onMyButtonClick }>
            My
          </button>
          <button
            disabled={ isLoad }
            className={ selected === ALL ? style.selected : style.hoverSelected }
            onClick={ onAllButtonClick }>
            All
          </button>
          <h4 className={ style.title }>Number of cards</h4>
          <DoubleRange/>
        </div>

        <div className={ style.packsList }>
          <div>
            <h4 className={ style.packListTitle }>Pack list</h4>
            <div className={ style.searchContainer }>
              <input
                placeholder={ 'Search...' }
                value={ packName }
                onChange={ onPackNameInputChange }
                disabled={ isLoad }/>
              <button
                disabled={ isLoad }
                className={ style.buttonSearch }
                onClick={ onAddButtonClick }
              >
                Add New
              </button>
            </div>
          </div>
          <div className={ style.cardsBlock }>
            <TableHeader/>
            {
              cardPacks.map( ( tableRow, index ) => {
                return (
                  <div key={ index } onDoubleClick={ () => runToCards( tableRow._id ) }>
                    <Pack item={ tableRow } runToCards={ runToCards }/>
                  </div>
                );
              } )
            }
            <ModalComponent
              backgroundOnClick={ onModalClick }
              show={ globalError !== '' || mode === 'add' || mode === 'edit' }
              height={ 0 }
              width={ 0 }
              enableBackground={ true }>
              { globalError !== '' && <GlobalError/> }
              { mode === 'add' && <AddPackComponent/> }
            </ModalComponent>
          </div>
          <TablesPagination/>
        </div>

      </div>
    </div>
  );
};

export default PacksList;
