import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/header/Header";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserBlogs from "./pages/UserBlogs";
import CreateBlogs from "./pages/CreateBlogs";
import BlogsDetails from "./pages/BlogsDetails";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Header />
      <Toaster />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/my-blogs" element={<UserBlogs />} />
        <Route path="/create-blogs" element={<CreateBlogs />} />
        <Route path="/blog-details/:id" element={<BlogsDetails />} />

        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
