import React from 'react'
import '../Styles/chess.css';

const ChessBoard = () => {
    const size = 8;
    const cells = [];
    const cells1 = [];
    const cells2 = [];


    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            cells.push(
                <div key={`${row}-${col}`} className="cell" style={{ backgroundColor: (row + col) % 2 === 0 ? "#fff" : "#000" }}>{row}-{col}</div>
            )
        }
    }

    for (let row = 0; row < size; row++) {
        cells1[row] = [];
        for (let col = 0; col < size; col++) {
            cells1[row][col] = `${row}-${col}`;
        }
    }
    console.log(cells1);
    
    let val = 0;
    for(let i = 0; i < size; i++){
        cells2[i] = [];
        for(let j = 0; j < size; j++){
            val = i + j;
            if(val % 2 === 0){
                cells2[i][j] = 'even'
            }
            else{
                cells2[i][j] = 'odd'

            }
        }
    }

    console.log(cells2);
    
    return (
        <div className='animated-bg'>
            <h1 style={{color:'white', padding:'20px'}}>Chess Board</h1>
            <div className='board'>{cells}</div>
        </div>
    )
}

export default ChessBoard