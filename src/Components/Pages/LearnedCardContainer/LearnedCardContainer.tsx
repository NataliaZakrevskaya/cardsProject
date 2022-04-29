import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cardsTC } from '../../../Redux/Thunk/cardsThunk/cardsThunk';
import Preloader from '../../Common/preloader/preloader';
import { LearnedCard } from './LearnedCard/LearnedCard';
import { getStatus } from '../../../Redux/Selectors/appSelectors/appSelectors';

const LearnedCardContainer = () => {

  const dispatch = useDispatch();

  const appStatus = useSelector( getStatus );

  const { packId } = useParams<'packId'>();

  useEffect( () => {
    if ( packId ) {
      dispatch( cardsTC( packId ) );
    }
  }, [] );

  if ( appStatus === 'loading' ) {
    return <Preloader status={ appStatus }/>;
  }

  return (
    <div>
      <LearnedCard/>
    </div>
  );
};

export default LearnedCardContainer;
