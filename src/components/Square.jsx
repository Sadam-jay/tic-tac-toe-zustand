import React from "react";
import { useGameStore } from "../stores/gameSlice";
import { Button, Typography } from "@mui/material";

const Square = ({ index }) => {
  const { board, playMove } = useGameStore();

  return (
    <Button
      variant="outlined"
      onClick={() => playMove(index)}
      sx={{
        width: 100,
        height: 100,
        fontSize: 36,
        fontWeight: "bold",
        textTransform: "none",
        margin: 0,
      }}
    >
      {board[index] ? (
        board[index] === "X" ? (
          <Typography variant="h4" sx={{ fontWeight: "bold" }} color="error">
            X
          </Typography>
        ) : (
          <Typography variant="h4" sx={{ fontWeight: "bold" }} color="primary">
            O
          </Typography>
        )
      ) : (
        ""
      )}
    </Button>
  );
};

export default Square;
