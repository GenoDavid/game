import React from 'react'

function Leaderboard({ cancel }) {
    return (
        <div>
            <img src='https://thealgoristsblob.blob.core.windows.net/thealgoristsimages/LeaderboardLLD.jpeg' />
            <br />
            <button onClick={() => {
                cancel({ type: "play" })
            }} className='btn btn-success mt-4'>Play</button>
        </div>
    )
}

export default Leaderboard
