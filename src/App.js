import "./App.css";
import React,{ useState,useEffect } from "react";
import Header from "./MyComponents/Header";
// import { ToDos } from "./MyComponents/ToDos";
// import { AddToDo } from "./MyComponents/AddToDo";
import { Footer } from "./MyComponents/Footer";
import { Home } from "./MyComponents/Home";
import { About } from "./MyComponents/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  // let initToDo;
  // if (localStorage.getItem("todos") === null) {
  //   initToDo = [];
  // }
  // else {
  //   initToDo = JSON.parse(localStorage.getItem("todos"));
  // }

  // const onDelete = (todo) => {
  //   console.log("Deleted",todo);
  //   settodos(
  //     todos.filter((e) => {
  //       return e !== todo;
  //     })
  //   );
  //   localStorage.setItem("todos",JSON.stringify(todos));
  // };

  // const addToDo = (title,desc) => {
  //   console.log("Adding ToDo",title,desc);
  //   let sno;
  //   if (todos.length === 0) {
  //     sno = 1;
  //   }
  //   else {
  //     sno = todos[todos.length - 1].sno + 1;
  //   }
  //   const myToDo = {
  //     sno: sno,
  //     title: title,
  //     desc: desc,
  //   };
  //   settodos([...todos,myToDo]);
  //   console.log(myToDo);
  // };

  // const [todos,settodos] = useState(initToDo);
  // useEffect(() => {
  //   localStorage.setItem("todos",JSON.stringify(todos));
  // },[todos])

  return (
    <>
      <Router>
        <Header title="My ToDos List" searchBar={true} />
        <Routes>
          {/* <Route exact path="/" render={() => {
            return (
              <>
                <AddToDo addToDo={addToDo} />
                <ToDos todos={todos} onDelete={onDelete} />
              </>
            )
          }} /> */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
