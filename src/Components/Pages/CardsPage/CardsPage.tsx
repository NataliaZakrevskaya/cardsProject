import React from 'react';
import { useParams } from 'react-router-dom';
import CardsList from './CardsList/CardsList';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../../Redux/Store/types';
import { PackType } from '../../../Redux/Reducers/packsReducer/types';

const Cards = () => {

  const { packId } = useParams<'packId'>();

  const actualPack = useSelector<AppStateType, PackType[]>( state => state.packs.cardPacks.filter( (pack: PackType) => pack._id === packId ) )[ 0 ];

  return (
    <div>
      <CardsList name={ actualPack?.name } packId={ packId }/>
    </div>
  );
};

export default Cards;