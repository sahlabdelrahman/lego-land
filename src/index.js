import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { Provider } from "react-redux";
import store from "./redux/store";

const theme = createTheme({
  palette: {
    mainColor: {
      main: "#df3538",
    },
    secondaryColor: {
      main: "#f3f3f3",
    },
    textColor: {
      main: "#aaa",
    },
  },
  scrollbarStyles: {
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: 8,
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.2)",
      outline: "1px solid slategrey",
      borderRadius: 7,
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
