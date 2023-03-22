import React from 'react'

function Lose({ cancel }) {
    return (
        <div>
            <img src='https://www.shutterstock.com/image-vector/pixel-inscription-you-lose-message-260nw-626229314.jpg' />
            <br />
            <button onClick={() => {
                cancel({ type: "Leaderboard" })
            }} className='btn btn-info mt-4' style={{
                marginRight
                    : 25
            }}>Leaderboard</button>
            <button onClick={() => {
                cancel({ type: "Game" })
            }} className='btn btn-success mt-4'>Play Again</button>
        </div>
    )
}

export default Lose
