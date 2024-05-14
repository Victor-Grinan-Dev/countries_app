import React from 'react';
import '../styles/board.css';

const drop = (e) => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData('card_id');
    const card = document.getElementById(cardId);
    card.style.display = "flex";
    e.target.appendChild(card);
}

const dragOver = (e) => {
    e.preventDefault();
}

function DraggingBoard(props) {
  return (
    <div 
    id={props.id}
    className='board'
    onDrop={drop}
    onDragOver={dragOver}
    >
        
        {props.children}
    </div>
  )
}

export default DraggingBoard;