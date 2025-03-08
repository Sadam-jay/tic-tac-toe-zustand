import { create } from "zustand";

export const useGameStore = create((set) => ({
  // Initializes a 3x3 Tic-Tac-Toe board as an array with 9 empty (null) slots.
  // Keeps track of the current player (true → "X", false → "O").
  // Stores the winner ("X", "O", or null if no winner yet).
  board: Array(9).fill(null),
  isXNext: true,
  winner: null,

  // This function is called when a player clicks on a square (with index from 0-8).
  playMove: (index) =>
    set((state) => {
      // If the clicked square is already occupied (state.board[index]), ignore the move.
      // If the game already has a winner (state.winner), ignore the move.
      if (state.board[index] || state.winner) return state;

      // Creates a copy of the board (newBoard = [...state.board]).
      // Places "X" or "O" in the selected square, depending on whose turn it is.
      const newBoard = [...state.board];
      newBoard[index] = state.isXNext ? "X" : "O";

      // board: newBoard → Stores the updated board.
      // isXNext: !state.isXNext → Switches players (if true, changes to false and vice versa).
      // winner: calculateWinner(newBoard) → Calls the function to check if there's a winner.
      return {
        board: newBoard,
        isXNext: !state.isXNext,
        winner: calculateWinner(newBoard),
      };
    }),
  // reset to initial state
  resetGame: () =>
    set({ board: Array(9).fill(null), isXNext: true, winner: null }),
}));

// This function checks for a winning combination.
const calculateWinner = (board) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];

  // board = ["X", "X", "X", null, "O", null, "O", null, null];
  // if ("X" && "X" === "X" && "X" === "X") // ✅ TRUE → "X" Wins!

  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]; // Return "X" or "O"
    }
  }

  return null;
};
