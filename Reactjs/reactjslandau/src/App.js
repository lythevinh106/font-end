// import logo from "./logo.svg";
// import "./App.css";

import React from "react";

import { Routes, Route, Link, NavLink, Navigate } from "react-router-dom";
import Albumfeature from "./features/album";
import Album from "./features/album/components/Album";
import HocState from "./features/HocState";
import NestedRoute from "./features/nestedRoute";
import TodoFeature from "./features/Todo";

function App() {
  const name = "Vinh";
  const age = 18;
  const isFemale = true;
  const student = {
    name: "ezz font end 1",
  };

  const colorList = ["red", "blue", "yellow"];
  ////////cac thanh phan trong ..
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <p>
  //           Xin chao {name} - {age}-{isFemale ? "femail" : "male"}
  //         </p>
  //         {/* cach viet 1  */}
  //         <p>{isFemale ? <p>femail</p> : <p>male</p>}</p>

  //         {/* cach viet 2  */}

  //         <p>{isFemale && <p>femail</p>}</p>
  //         <p>{!isFemale && <p>mail</p>}</p>
  //         {/* cach viet 3 */}
  //         <p>
  //           {isFemale && (
  //             <div>
  //               <p>femail2</p>
  //               <p>femail2</p>
  //             </div>
  //           )}
  //         </p>

  //         <p>
  //           {isFemale && (
  //             // k can phai them the div nhu o tren
  //             <React.Fragment>
  //               <p>femail3</p>
  //               <p>femail3</p>
  //             </React.Fragment>
  //           )}
  //         </p>

  //         {/* render object */}

  //         <p>{student.name}</p>
  //       </a>

  //       <ul>
  //         {colorList.map((color) => (
  //           <li key={color} style={{ color }}>
  //             {color}
  //           </li>
  //         ))}
  //       </ul>
  //     </header>
  //   </div>
  // );

  return (
    <div className="App">
      {/* prop: truyeen tu cpn cha xuong con va con k thay doi dc  */}
      {/* <Albumfeature /> */}
      {/* state: se tien hanh re-render moi khi goi.  */}
      {/* <TodoFeature />
      <HocState /> */}
      {/* Hoc routing /********************************************/}
      {/* khi vao dung dan todos thi ms render ra cai component tuong ung */}
      HomePage
      <Link to="/todo">----Todo----</Link>
      <Link to="/album">---Album---</Link>
      {/* navlink giong nhu link nhưng khi mỗi khi kik vào thì nó thêm 1 class
      active or tự custom */}
      <NavLink to="/todo" className="active-menu">
        ---Todo-navLink----
      </NavLink>
      {/* o ban 6 Switch dc thay the bang routes:
      ///routes co nghia la no se chi render 1 côpnent  
      dau tien neu no co nhieu dung dan su dung no */}
      <Routes>
        <Route path="/" element={<TodoFeature />}></Route>
        <Route path="/todo" element={<TodoFeature />}></Route>
        {/* <Route path="/album" element={<Albumfeature />}></Route> */}
        {/* Navigate la: moi khi chuyen trang do thi nó sẽ thay the bang trang khac gionh redirect V5 */}
        <Route path="/album" element={<Navigate replace to="/todo" />}></Route>
        {/* vd nested : long nhau */}
        <Route path="/nested" element={<NestedRoute />}></Route>
      </Routes>
      {/* exact=true dc hay xai cho routing con =false thi routing cha */}
      {/* Các Hook trong react-router-dom */}
      {/* useHistory Trả về history instance, dùng để navigate useLocation Trả về
      location object của URL hiện tại 
      useParams Trả về path params object của
      URL hiện tại useRouteMatch Trả về match object của URL hiện tại */}
      {/* nhieu dung dan long nhau  */}
    </div>
  );
}

export default App;
