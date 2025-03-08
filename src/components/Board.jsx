import React from "react";
import { useGameStore } from "../stores/gameSlice";
import Square from "./Square";
import { Box, Button, Typography } from "@mui/material";

const Board = () => {
  const { winner, resetGame } = useGameStore();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={2}
      p={2}
    >
      {/* {winner && (
        <Typography variant="h3" color="primary">
          Winner: {winner}
        </Typography>
      )} */}
      {winner ? (
        winner === "X" ? (
          <Typography variant="h4" sx={{ fontWeight: "bold" }} color="error">
            Winner: {winner}
          </Typography>
        ) : (
          <Typography variant="h4" sx={{ fontWeight: "bold" }} color="primary">
            Winner: {winner}
          </Typography>
        )
      ) : (
        ""
      )}

      <Box
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        gap={0.5}
        bgcolor="#f0f0f0"
        p={2}
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <Square key={i} index={i} />
        ))}
      </Box>

      <Button variant="outlined" color="error" onClick={resetGame}>
        Reset Game
      </Button>
    </Box>
  );
};

export default Board;
