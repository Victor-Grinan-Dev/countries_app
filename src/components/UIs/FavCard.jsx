import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromFavorite, favoriteCountriesSelector } from '../../features/countries/countriesSlice';
import { Button } from 'react-bootstrap';

function FavCard( props ) {
    const dispatch = useDispatch();
    const favoriteList = useSelector(favoriteCountriesSelector);

    useEffect(()=>{
        localStorage.setItem('favoriteCountries', favoriteList)
    },[favoriteList]);

    const deleteItem = (name) => {
        dispatch(deleteFromFavorite(name));
    }
    const dragStart = (e) => {
        const target = e.target;
        e.dataTransfer.setData('card_id', target.id);
        setTimeout(()=> {
            target.style.display ="none";
        }, 0)
    }
    const dragOver = (e) => {
        e.stopPropagation();
    }
  return (
    <div 
    id={props.id}
    className='favCard'
    draggable
    onDragOver={dragOver}
    onDragStart={dragStart}>

        <p> { props.name } </p> <Button onClick={()=>deleteItem(props.name)}> x </Button>
        
    </div>
  )
}

export default FavCard;