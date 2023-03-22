import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Game from './Game';
import Play from './Play';
import Lose from './Lose';
import Leaderboard from './Leaderboard';
import Win from './Win';
import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case ("play"):
      return { ui: "play" };
    case ("Game"):
      return { ui: "Game" };
    case ("Win"):
      return { ui: "Win" };
    case ("Lose"):
      return { ui: "Lose" };
    case ("Leaderboard"):
      return { ui: "Leaderboard" }

    default:
      break;
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, { ui: "play" })
  return (
    <div className="App">
      {state.ui === "play" ? <Play cancel={dispatch} /> : null}
      {state.ui === "Game" ? <Game cancel={dispatch} /> : null}
      {state.ui === "Win" ? <Win cancel={dispatch} /> : null}
      {state.ui === "Lose" ? <Lose cancel={dispatch} /> : null}
      {state.ui === "Leaderboard" ? <Leaderboard cancel={dispatch} /> : null}
      {/* <Game />
      <Lose />
      <Leaderboard />
      <Win /> */}
    </div>
  )
}

export default App;
