import React from 'react';
import { useParams } from 'react-router-dom';
import CardsList from './CardsList/CardsList';
import { useSelector } from 'react-redux';
import { getActualPack } from './cardsPageHelpers';
import { getPacks } from '../../../Redux/Selectors/packsSelectors/packsSelectors';

const Cards = () => {

  const { packId } = useParams<'packId'>();

  const packs = useSelector( getPacks );

  const actualPack = getActualPack( packs, packId );

  return (
    <div>
      <CardsList name={ actualPack?.name } packId={ packId }/>
    </div>
  );
};

export default Cards;