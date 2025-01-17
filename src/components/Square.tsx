import type { PlayerKeys } from "../types/types";

const Square = ({
  value,
  onSquareClick,
  isBottomBorder,
  isRightBorder,
}: {
  value: PlayerKeys;
  onSquareClick: () => void;
  isRightBorder: boolean;
  isBottomBorder: boolean;
}) => {
  return (
    <button
      onClick={onSquareClick}
      className={`bg-white text-7xl p-4 w-36 h-36 text-center font-bold 
          ${value === "X" ? "text-[#F38523]" : "text-[#A7CA55]"} 
          ${isRightBorder ? "border-r-4 border-[#2F4556]" : ""}
          ${isBottomBorder ? "border-b-4 border-[#2F4556]" : ""}
        }`}
    >
      {value}
    </button>
  );
};

export default Square;
