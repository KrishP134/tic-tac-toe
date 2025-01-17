import Board from "./Board";

const Game = () => {
  return (
    <div className="flex flex-row">
      <div className="">
        <Board />
      </div>
      <div className="flex-1">
        <ol></ol>
      </div>
    </div>
  );
};

export default Game;
