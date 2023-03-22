import React from 'react'

function Play({ cancel }) {
    return (
        <div>
            <h1>Welcome Game</h1>
            <button className='btn btn-info' onClick={() => {
                cancel({ type: "Game" })
            }}>Play</button>
        </div>
    )
}

export default Play

