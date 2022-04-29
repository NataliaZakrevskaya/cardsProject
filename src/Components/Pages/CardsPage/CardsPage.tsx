import React from 'react';
import { useParams } from 'react-router-dom';
import CardsList from './CardsList/CardsList';
import { PackType } from '../../../Redux/Reducers/packsReducer/packsReducer';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../../Redux/Store/store';

const Cards = () => {

  const { packId } = useParams<'packId'>();

  const actualPack = useSelector<AppStateType, PackType[]>( state => state.packs.cardPacks.filter( f => f._id === packId ) )[ 0 ];

  return (
    <div>
      <CardsList name={ actualPack?.name } packId={ packId }/>
    </div>
  );
};

export default Cards;