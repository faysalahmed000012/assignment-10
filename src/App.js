import { Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./Components/Checkout/Checkout";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import Signup from "./Components/Login/Signup/Signup";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Header from "./Components/Shared/Header/Header";
import NotFound from "./Components/NotFound/NotFound";
import Footer from "./Components/Shared/Footer/Footer";
import Blogs from "./Components/Blogs/Blogs";
import About from "./Components/About/About";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
