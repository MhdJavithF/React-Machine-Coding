import React from 'react'
import '../Styles/chess.css';

const ChessBoard = () => {
    const size = 8;
    const cells = [];

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            cells.push(
                <div key={`${row}-${col}`} className="cell" style={{ backgroundColor: (row + col) % 2 === 0 ? "#fff" : "#000" }}></div>
            )
        }
    }
    
    return (
        <div className='board'>
            {cells}
        </div>
    )
}

export default ChessBoard