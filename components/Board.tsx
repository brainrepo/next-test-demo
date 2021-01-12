import React from 'react';

const Board:React.FC<{hits:Number, points:Number}> = ({hits, points}) => {
    return (<div>
            <div> Hits: {hits} </div>
            <div> Points: {points} </div>
        </div>);
}

export default Board;