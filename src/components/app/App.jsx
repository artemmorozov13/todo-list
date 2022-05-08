import Home from "pages/Home";
import Todo from "pages/Todo";

import Header from "components/header/Header"

import { HOME_URL, TODO_URL } from "pages/routesConfig";
import { Navigate, Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={HOME_URL} element={<Home />}/>
        <Route path={TODO_URL + ':id'} element={<Todo />}/>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
}

export default App;