import React from "react";
import Board from "./components/Board";
import { Typography } from "@mui/material";

const App = () => {
  return (
    <div className="app">
      <Typography variant="h3" color="primary" fontWeight="bold">
        Tic-Tac-Toe
      </Typography>
      <Board />
    </div>
  );
};

export default App;
