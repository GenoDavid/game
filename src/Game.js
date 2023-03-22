import React from 'react'

function Game({ cancel }) {
    return (
        <div>
            <img src='https://ichef.bbci.co.uk/news/976/cpsprodpb/13729/production/_112375697_1331db7a-17c0-4401-8cac-6a2309ff49b6.jpg' />
            <br />
            <button onClick={() => {
                cancel({ type: "Win" })
            }} className='btn btn-success mt-4' style={{ marginRight: 25 }}>Win</button>
            <button onClick={() => {
                cancel({ type: "Lose" })
            }} className='btn btn-danger mt-4'>Lose</button>
        </div>
    )
}

export default Game
