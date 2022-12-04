import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Trang1 from "./Contact";
import Trang2 from "./News";
import Home from "./Home";
import News from "./News";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";
import About from "./About";
import NewAdd from "./newadd";
import NewDetail from "./newdetail";
import DemoApi from "./DemoApi";
import TodoFeature from "./FormLib/Todo";

function App() {
  return (
    <div>
      <h1>Header</h1>
      <nav>
        {/* thẻ Link là 1 cơ chế giúp reload lại trang k cần phải load loai(SPA) */}
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/news">News</Link>
        </p>
        <p>
          <Link to="/contact">Contact</Link>
        </p>
      </nav>
      {/* <Routes> */}
      {/* thiêt lap duong dan */}
      {/* <Route path="/" element={<Home />} />

        <Route path="news" element={<News />}> */}
      {/* /////mawc dinh vao ttang new neu k co duong dan nao phu hop */}
      {/* <Route index={true} element={<News />}></Route> */}
      {/* <Route path=":id" element={<NewDetail />} />
          <Route path="add" element={<NewAdd />} />
        </Route>

        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes> */}
      {/* { useNavigate: thay the cho hisstory} */}
      {/* outlet giup lay ca cha lan con */}
      {/*outlet:https://stackoverflow.com/questions/69932545/react-router-v6-outlet-doesnt-seem-to-work} */}
      {/* <h2>Footer</h2> */}

      {/* /** to chuc api bang axios  */}

      {/* <DemoApi /> */}
      {/* /**thiet lap thu vien form */}

      <TodoFeature />
    </div>
  );
}

export default App;
