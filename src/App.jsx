import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import SinglePost from "./Components/SinglePost";
import Post from "./Components/Post";
import NotFound from "./Components/NotFound";
import Project from "./Components/Project";
import NavBar from "./Components/NavBar";



const App = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:slug" element={<SinglePost />} />
        <Route path="/post" element={<Post />} />
        <Route path="/project" element={<Project/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
