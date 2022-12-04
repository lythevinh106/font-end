import logo from "./logo.svg";
import "./App.css";
import Header from "./component/header";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Todo from "./todo";
import Album from "./album";
import { Button } from "@mui/material";
import { useSnackbar } from "notistack";

function App() {
  return (
    <>
      {/* <Button onClick={showNoti}>Show</Button> */}

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="todo" element={<Todo />} />
        <Route path="album" element={<Album />} />
      </Routes>
    </>
  );
}

export default App;
