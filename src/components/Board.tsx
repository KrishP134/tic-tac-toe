import { useState } from "react";

import type { PlayerKeys, SquareBox } from "../types/types";

import Square from "./Square";

const Board = (): JSX.Element => {
  const [currentValue, setCurrentValue] =
    useState<NonNullable<PlayerKeys>>("X");

  const [squares, setSquares] = useState<Array<SquareBox>>(() =>
    Array(9)
      .fill(null)
      .map((_, index) => {
        return {
          id: index,
          value: null,
        };
      })
  );

  const [status, setStatus] = useState(`Next Player : ${currentValue}`);

  const calculateWinner = (): PlayerKeys => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const winner = winningLines.reduce<PlayerKeys>(
      (acc, winningLine): PlayerKeys => {
        if (acc !== null) {
          return acc;
        }

        const line = squares.filter((square) =>
          winningLine.includes(square.id)
        );

        const isAllEqualAndNotEmpty =
          line[0].value &&
          line[0].value === line[1].value &&
          line[1].value === line[2].value;

        if (isAllEqualAndNotEmpty) {
          return line[0].value;
        }
        return null;
      },
      null
    );

    return winner;
  };

  const handleClick = (id: number): void => {
    const clickedSquare = squares.find((square) => square.id === id);
    if (calculateWinner() || clickedSquare?.value!) {
      return;
    }

    const updatedSquares = squares.reduce<SquareBox[]>((acc, square) => {
      if (square.id !== id) {
        acc.push(square);
        return acc;
      }
      square.value = currentValue;
      acc.push(square);
      return acc;
    }, []);

    setSquares(updatedSquares);

    const calculateNewCurrentValue = (): NonNullable<PlayerKeys> => {
      return currentValue === "X" ? "O" : "X";
    };

    const newCurrentValue = calculateNewCurrentValue();

    setCurrentValue(newCurrentValue);
    const winner = calculateWinner();

    if (winner) {
      setStatus(`Player ${winner} won the Game!`);
    } else {
      setStatus(`Next Player: ${newCurrentValue}`);
    }
  };

  return (
    <>
      <p>{status}</p>
      <div className="grid grid-rows-3 grid-cols-3">
        {squares.map((square) => {
          return (
            <Square
              isRightBorder={square.id % 3 !== 2}
              isBottomBorder={square.id < 6}
              key={square.id}
              value={square.value}
              onSquareClick={() => handleClick(square.id)}
            />
          );
        })}
      </div>
    </>
  );
};

export default Board;
