import React from 'react'

function Win({ cancel }) {
    return (
        <div>
            <img src='https://www.3dtrophyfactory.com/wp-content/uploads/2019/04/Game-Trophy-League-of-Legends-Premier-Tour.jpg' />
            <br />
            <button onClick={() => {
                cancel({ type: "Leaderboard" })
            }} className='btn btn-info mt-4' style={{ marginRight: 25 }}>Leaderboard</button>
            <button onClick={() => {
                cancel({ type: "play" })
            }} className='btn btn-success mt-4'>Play Again</button>
        </div>
    )
}

export default Win

