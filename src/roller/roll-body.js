import { useState } from "react";
import "./roll-body.css";

const RollBody = () => {
  const [player2, setPlayer2] = useState({
    name: "player2",
    active: false,
    points: 0,
    currentPoints: 0,
  });
  const [player1, setPlayer1] = useState({
    name: "player1",
    active: true,
    points: 0,
    currentPoints: 0,
  });
  const [dice1, setDice1] = useState(5);
  const [dice2, setDice2] = useState(5);
  const rollDices = () => {
    const randomNumber1 = Math.floor(Math.random() * 6 + 1);
    const randomNumber2 = Math.floor(Math.random() * 6 + 1);
    setDice1(randomNumber1);
    setDice2(randomNumber2);
    if (randomNumber1 === 1 || randomNumber2 === 1) {
      someoneGotOne();
    } else {
      someoneScored(randomNumber1, randomNumber2);
    }
  };
  const someoneGotOne = () => {
    if (player1.active) {
      setPlayerDifferentActive();
    } else {
      setPlayerDifferentActive();
    }
  };
  const someoneScored = (num1, num2) => {
    if (player1.active) {
      setPlayerPointsHigher(player1, setPlayer1, num1, num2);
    } else {
      setPlayerPointsHigher(player2, setPlayer2, num1, num2);
    }
  };
  const setPlayerDifferentActive = () => {
    setPlayer1({
      ...player1,
      currentPoints: 0,
      active: !player1.active,
    });
    setPlayer2({
      ...player2,
      currentPoints: 0,
      active: !player2.active,
    });
  };
  const setPlayerPointsHigher = (player, setPlayer, num1, num2) => {
    setPlayer({
      ...player,
      points: player.points + num1 + num2,
      currentPoints: num1 + num2,
    });
    seeIfAPlayerWon(player.points + num1 + num2, player.name);
  };
  const seeIfAPlayerWon = (playerScore, playerName) => {
    if (playerName === "player1") {
      if (playerScore >= 100) {
        console.log("PLAYER ONE WON!!!", player1);
      }
    } else {
      if (playerScore >= 100) {
        console.log("PLAYER TWO WON!!!", player1);
      }
    }
  };
  return (
    <>
      <div class="wrapper clearfix">
        <div
          class={player1.active ? "player-0-panel active" : "player-0-panel"}
        >
          <div class="player-name" id="name-0">
            Player 1
          </div>
          <div class="player-score" id="score-0">
            {player1.points}
          </div>
          <div class="player-current-box">
            <div class="player-current-label">Current</div>
            <div class="player-current-score" id="current-0">
              {player1.currentPoints}
            </div>
          </div>
        </div>

        <div
          class={player2.active ? "player-1-panel active" : "player-0-panel"}
        >
          <div class="player-name" id="name-1">
            Player 2
          </div>
          <div class="player-score" id="score-1">
            {player2.points}
          </div>
          <div class="player-current-box">
            <div class="player-current-label">Current</div>
            <div class="player-current-score" id="current-1">
              {player2.currentPoints}
            </div>
          </div>
        </div>

        <button class="btn-new">
          <i class="ion-ios-plus-outline"></i>New game
        </button>
        <button
          class="btn-roll"
          onClick={() => {
            rollDices();
          }}
        >
          <i class="ion-ios-loop"></i>Roll dice
        </button>
        <button class="btn-hold">
          <i class="ion-ios-download-outline"></i>Hold
        </button>

        <input type="text" id="winningScore" placeholder="Final score" />
        <img
          src={require(`../assets/dice-${dice1}.png`)}
          alt="Dice"
          class="dice"
          id="dice1"
        />
        <img
          src={require(`../assets/dice-${dice2}.png`)}
          alt="Dice"
          class="dice"
          id="dice2"
        />
      </div>
    </>
  );
};

export default RollBody;
